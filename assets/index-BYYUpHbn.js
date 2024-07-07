(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ne={},Ss=[],kt=()=>{},nT=()=>!1,Eo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nu=t=>t.startsWith("onUpdate:"),Ue=Object.assign,Du=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rT=Object.prototype.hasOwnProperty,be=(t,e)=>rT.call(t,e),se=Array.isArray,Cs=t=>ri(t)==="[object Map]",os=t=>ri(t)==="[object Set]",Qd=t=>ri(t)==="[object Date]",sT=t=>ri(t)==="[object RegExp]",fe=t=>typeof t=="function",$e=t=>typeof t=="string",Bn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Vu=t=>(Ve(t)||fe(t))&&fe(t.then)&&fe(t.catch),Rg=Object.prototype.toString,ri=t=>Rg.call(t),iT=t=>ri(t).slice(8,-1),Sg=t=>ri(t)==="[object Object]",Mu=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oT=/-(\w)/g,St=hc(t=>t.replace(oT,(e,n)=>n?n.toUpperCase():"")),aT=/\B([A-Z])/g,Ut=hc(t=>t.replace(aT,"-$1").toLowerCase()),To=hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bi=hc(t=>t?`on${To(t)}`:""),cn=(t,e)=>!Object.is(t,e),ks=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Va=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ma=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Yd;const Pg=()=>Yd||(Yd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),cT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",lT=uc(cT);function wo(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?fT(r):wo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||Ve(t))return t}const uT=/;(?![^(]*\))/g,hT=/:([^]+)/,dT=/\/\*[^]*?\*\//g;function fT(t){const e={};return t.replace(dT,"").split(uT).forEach(n=>{if(n){const r=n.split(hT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xt(t){let e="";if($e(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=xt(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function pT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!$e(e)&&(t.class=xt(e)),n&&(t.style=wo(n)),t}const gT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mT=uc(gT);function kg(t){return!!t||t===""}function _T(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=vr(t[r],e[r]);return n}function vr(t,e){if(t===e)return!0;let n=Qd(t),r=Qd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Bn(t),r=Bn(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?_T(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!vr(t[o],e[o]))return!1}}return String(t)===String(e)}function dc(t,e){return t.findIndex(n=>vr(n,e))}const tt=t=>$e(t)?t:t==null?"":se(t)||Ve(t)&&(t.toString===Rg||!fe(t.toString))?JSON.stringify(t,Og,2):String(t),Og=(t,e)=>e&&e.__v_isRef?Og(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[dl(r,i)+" =>"]=s,n),{})}:os(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dl(n))}:Bn(e)?dl(e):Ve(e)&&!se(e)&&!Sg(e)?String(e):e,dl=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class Lu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yT(t){return new Lu(t)}function Ng(t,e=Lt){e&&e.active&&e.effects.push(t)}function Dg(){return Lt}function vT(t){Lt&&Lt.cleanups.push(t)}let jr;class qs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ng(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Rr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(ET(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Sr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=pr,n=jr;try{return pr=!0,jr=this,this._runnings++,Jd(this),this.fn()}finally{Xd(this),this._runnings--,jr=n,pr=e}}stop(){this.active&&(Jd(this),Xd(this),this.onStop&&this.onStop(),this.active=!1)}}function ET(t){return t.value}function Jd(t){t._trackId++,t._depsLength=0}function Xd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Vg(t.deps[e],t);t.deps.length=t._depsLength}}function Vg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function TT(t,e){t.effect instanceof qs&&(t=t.effect.fn);const n=new qs(t,kt,()=>{n.dirty&&n.run()});e&&(Ue(n,e),e.scope&&Ng(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function wT(t){t.effect.stop()}let pr=!0,Ul=0;const Mg=[];function Rr(){Mg.push(pr),pr=!1}function Sr(){const t=Mg.pop();pr=t===void 0?!0:t}function xu(){Ul++}function Fu(){for(Ul--;!Ul&&Bl.length;)Bl.shift()()}function Lg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Vg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Bl=[];function xg(t,e,n){xu();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Bl.push(r.scheduler)))}Fu()}const Fg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},La=new WeakMap,qr=Symbol(""),$l=Symbol("");function Dt(t,e,n){if(pr&&jr){let r=La.get(t);r||La.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Fg(()=>r.delete(n))),Lg(jr,s)}}function Mn(t,e,n,r,s,i){const o=La.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&se(t)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||!Bn(d)&&d>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":se(t)?Mu(n)&&c.push(o.get("length")):(c.push(o.get(qr)),Cs(t)&&c.push(o.get($l)));break;case"delete":se(t)||(c.push(o.get(qr)),Cs(t)&&c.push(o.get($l)));break;case"set":Cs(t)&&c.push(o.get(qr));break}xu();for(const l of c)l&&xg(l,5);Fu()}function IT(t,e){const n=La.get(t);return n&&n.get(e)}const AT=uc("__proto__,__v_isRef,__isVue"),Ug=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn)),Zd=bT();function bT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)Dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rr(),xu();const r=Ie(this)[e].apply(this,n);return Fu(),Sr(),r}}),t}function RT(t){Bn(t)||(t=String(t));const e=Ie(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class Bg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Wg:Kg:i?Hg:qg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){if(o&&be(Zd,n))return Reflect.get(Zd,n,r);if(n==="hasOwnProperty")return RT}const c=Reflect.get(e,n,r);return(Bn(n)?Ug.has(n):AT(n))||(s||Dt(e,"get",n),i)?c:Ye(c)?o&&Mu(n)?c:c.value:Ve(c)?s?$u(c):Io(c):c}}class $g extends Bg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Hs(i);if(!eo(r)&&!Hs(r)&&(i=Ie(i),r=Ie(r)),!se(e)&&Ye(i)&&!Ye(r))return l?!1:(i.value=r,!0)}const o=se(e)&&Mu(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?cn(r,i)&&Mn(e,"set",n,r):Mn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Bn(n)||!Ug.has(n))&&Dt(e,"has",n),r}ownKeys(e){return Dt(e,"iterate",se(e)?"length":qr),Reflect.ownKeys(e)}}class jg extends Bg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ST=new $g,CT=new jg,PT=new $g(!0),kT=new jg(!0),Uu=t=>t,fc=t=>Reflect.getPrototypeOf(t);function ra(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(cn(e,i)&&Dt(s,"get",e),Dt(s,"get",i));const{has:o}=fc(s),c=r?Uu:n?qu:to;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function sa(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(cn(t,s)&&Dt(r,"has",t),Dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ia(t,e=!1){return t=t.__v_raw,!e&&Dt(Ie(t),"iterate",qr),Reflect.get(t,"size",t)}function ef(t){t=Ie(t);const e=Ie(this);return fc(e).has.call(e,t)||(e.add(t),Mn(e,"add",t,t)),this}function tf(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=fc(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?cn(e,o)&&Mn(n,"set",t,e):Mn(n,"add",t,e),this}function nf(t){const e=Ie(this),{has:n,get:r}=fc(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Mn(e,"delete",t,void 0),i}function rf(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Mn(t,"clear",void 0,void 0),n}function oa(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ie(o),l=e?Uu:t?qu:to;return!t&&Dt(c,"iterate",qr),o.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function aa(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Cs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Uu:e?qu:to;return!e&&Dt(i,"iterate",l?$l:qr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function er(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function OT(){const t={get(i){return ra(this,i)},get size(){return ia(this)},has:sa,add:ef,set:tf,delete:nf,clear:rf,forEach:oa(!1,!1)},e={get(i){return ra(this,i,!1,!0)},get size(){return ia(this)},has:sa,add:ef,set:tf,delete:nf,clear:rf,forEach:oa(!1,!0)},n={get(i){return ra(this,i,!0)},get size(){return ia(this,!0)},has(i){return sa.call(this,i,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:oa(!0,!1)},r={get(i){return ra(this,i,!0,!0)},get size(){return ia(this,!0)},has(i){return sa.call(this,i,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:oa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=aa(i,!1,!1),n[i]=aa(i,!0,!1),e[i]=aa(i,!1,!0),r[i]=aa(i,!0,!0)}),[t,n,e,r]}const[NT,DT,VT,MT]=OT();function pc(t,e){const n=e?t?MT:VT:t?DT:NT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const LT={get:pc(!1,!1)},xT={get:pc(!1,!0)},FT={get:pc(!0,!1)},UT={get:pc(!0,!0)},qg=new WeakMap,Hg=new WeakMap,Kg=new WeakMap,Wg=new WeakMap;function BT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $T(t){return t.__v_skip||!Object.isExtensible(t)?0:BT(iT(t))}function Io(t){return Hs(t)?t:gc(t,!1,ST,LT,qg)}function Bu(t){return gc(t,!1,PT,xT,Hg)}function $u(t){return gc(t,!0,CT,FT,Kg)}function jT(t){return gc(t,!0,kT,UT,Wg)}function gc(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$T(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Os(t){return Hs(t)?Os(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function eo(t){return!!(t&&t.__v_isShallow)}function ju(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Gg(t){return Object.isExtensible(t)&&Cg(t,"__v_skip",!0),t}const to=t=>Ve(t)?Io(t):t,qu=t=>Ve(t)?$u(t):t;class zg{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qs(()=>e(this._value),()=>Ns(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&cn(e._value,e._value=e.effect.run())&&Ns(e,5),Hu(e),e.effect._dirtyLevel>=2&&Ns(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function qT(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new zg(r,s,i||!s,n)}function Hu(t){var e;pr&&jr&&(t=Ie(t),Lg(jr,(e=t.dep)!=null?e:t.dep=Fg(()=>t.dep=void 0,t instanceof zg?t:void 0)))}function Ns(t,e=5,n,r){t=Ie(t);const s=t.dep;s&&xg(s,e)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function Qe(t){return Yg(t,!1)}function Qg(t){return Yg(t,!0)}function Yg(t,e){return Ye(t)?t:new HT(t,e)}class HT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:to(e)}get value(){return Hu(this),this._value}set value(e){const n=this.__v_isShallow||eo(e)||Hs(e);e=n?e:Ie(e),cn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:to(e),Ns(this,5))}}function KT(t){Ns(t,5)}function wt(t){return Ye(t)?t.value:t}function WT(t){return fe(t)?t():wt(t)}const GT={get:(t,e,n)=>wt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ku(t){return Os(t)?t:new Proxy(t,GT)}class zT{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Hu(this),()=>Ns(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function Jg(t){return new zT(t)}function QT(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=Xg(t,n);return e}class YT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return IT(Ie(this._object),this._key)}}class JT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function XT(t,e,n){return Ye(t)?t:fe(t)?new JT(t):Ve(t)&&arguments.length>1?Xg(t,e,n):Qe(t)}function Xg(t,e,n){const r=t[e];return Ye(r)?r:new YT(t,e,n)}const ZT={GET:"get",HAS:"has",ITERATE:"iterate"},ew={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tw(t,e){}const nw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},rw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Ln(t,e,n,r){try{return r?t(...r):t()}catch(s){as(s,e,n)}}function Bt(t,e,n,r){if(fe(t)){const s=Ln(t,e,n,r);return s&&Vu(s)&&s.catch(i=>{as(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function as(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Rr(),Ln(l,null,10,[t,o,c]),Sr();return}}sw(t,n,s,r)}function sw(t,e,n,r=!0){console.error(t)}let no=!1,jl=!1;const Tt=[];let mn=0;const Ds=[];let ir=null,xr=0;const Zg=Promise.resolve();let Wu=null;function Ao(t){const e=Wu||Zg;return t?e.then(this?t.bind(this):t):e}function iw(t){let e=mn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=ro(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function mc(t){(!Tt.length||!Tt.includes(t,no&&t.allowRecurse?mn+1:mn))&&(t.id==null?Tt.push(t):Tt.splice(iw(t.id),0,t),em())}function em(){!no&&!jl&&(jl=!0,Wu=Zg.then(tm))}function ow(t){const e=Tt.indexOf(t);e>mn&&Tt.splice(e,1)}function xa(t){se(t)?Ds.push(...t):(!ir||!ir.includes(t,t.allowRecurse?xr+1:xr))&&Ds.push(t),em()}function sf(t,e,n=no?mn+1:0){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r()}}}function Fa(t){if(Ds.length){const e=[...new Set(Ds)].sort((n,r)=>ro(n)-ro(r));if(Ds.length=0,ir){ir.push(...e);return}for(ir=e,xr=0;xr<ir.length;xr++){const n=ir[xr];n.active!==!1&&n()}ir=null,xr=0}}const ro=t=>t.id==null?1/0:t.id,aw=(t,e)=>{const n=ro(t)-ro(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tm(t){jl=!1,no=!0,Tt.sort(aw);try{for(mn=0;mn<Tt.length;mn++){const e=Tt[mn];e&&e.active!==!1&&Ln(e,null,14)}}finally{mn=0,Tt.length=0,Fa(),no=!1,Wu=null,(Tt.length||Ds.length)&&tm()}}let Es,ca=[];function nm(t,e){var n,r;Es=t,Es?(Es.enabled=!0,ca.forEach(({event:s,args:i})=>Es.emit(s,...i)),ca=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{nm(i,e)}),setTimeout(()=>{Es||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ca=[])},3e3)):ca=[]}function cw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[d]||Ne;g&&(s=n.map(T=>$e(T)?T.trim():T)),p&&(s=n.map(Va))}let c,l=r[c=Bi(e)]||r[c=Bi(St(e))];!l&&i&&(l=r[c=Bi(Ut(e))]),l&&Bt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Bt(u,t,6,s)}}function rm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const d=rm(u,e,!0);d&&(c=!0,Ue(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):Ue(o,i),Ve(t)&&r.set(t,o),o)}function _c(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Ut(e))||be(t,e))}let rt=null,yc=null;function so(t){const e=rt;return rt=t,yc=t&&t.type.__scopeId||null,e}function Cr(t){yc=t}function Pr(){yc=null}const lw=t=>_n;function _n(t,e=rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jl(-1);const i=so(e);let o;try{o=t(...s)}finally{so(i),r._d&&Jl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ta(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:g,setupState:T,ctx:R,inheritAttrs:P}=t,D=so(t);let F,k;try{if(n.shapeFlag&4){const N=s||r,x=N;F=Ft(u.call(x,N,d,p,T,g,R)),k=c}else{const N=e;F=Ft(N.length>1?N(p,{attrs:c,slots:o,emit:l}):N(p,null)),k=e.props?c:hw(c)}}catch(N){qi.length=0,as(N,t,1),F=Pe(ct)}let C=F;if(k&&P!==!1){const N=Object.keys(k),{shapeFlag:x}=C;N.length&&x&7&&(i&&N.some(Nu)&&(k=dw(k,i)),C=wn(C,k,!1,!0))}return n.dirs&&(C=wn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),F=C,so(D),F}function uw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Tr(s)){if(s.type!==ct||s.children==="v-if"){if(n)return;n=s}}else return}return n}const hw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},dw=(t,e)=>{const n={};for(const r in t)(!Nu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?of(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!_c(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?of(r,o,u):!0:!!o;return!1}function of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_c(n,i))return!0}return!1}function Gu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zu="components",pw="directives";function sm(t,e){return Qu(zu,t,!0,e)||t}const im=Symbol.for("v-ndc");function om(t){return $e(t)?Qu(zu,t,!1)||t:t||im}function gw(t){return Qu(pw,t)}function Qu(t,e,n=!0,r=!1){const s=rt||nt;if(s){const i=s.type;if(t===zu){const c=nu(i,!1);if(c&&(c===e||c===St(e)||c===To(St(e))))return i}const o=af(s[t]||i[t],e)||af(s.appContext[t],e);return!o&&r?i:o}}function af(t,e){return t&&(t[e]||t[St(e)]||t[To(St(e))])}const ql=t=>t.__isSuspense;let Hl=0;const mw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)yw(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}vw(t,e,n,r,s,o,c,l,u)}},hydrate:Ew,create:Yu,normalize:Tw},_w=mw;function io(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function yw(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:d}}=l,p=d("div"),g=t.suspense=Yu(t,s,r,e,p,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,p,null,r,g,i,o),g.deps>0?(io(t,"onPending"),io(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Vs(g,t.ssFallback)):g.resolve(!1,!0)}function vw(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:d}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,T=e.ssFallback,{activeBranch:R,pendingBranch:P,isInFallback:D,isHydrating:F}=p;if(P)p.pendingBranch=g,rn(g,P)?(l(P,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():D&&(F||(l(R,T,n,r,s,null,i,o,c),Vs(p,T)))):(p.pendingId=Hl++,F?(p.isHydrating=!1,p.activeBranch=P):u(P,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=d("div"),D?(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(R,T,n,r,s,null,i,o,c),Vs(p,T))):R&&rn(g,R)?(l(R,g,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(R&&rn(g,R))l(R,g,n,r,s,p,i,o,c),Vs(p,g);else if(io(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=Hl++,l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:k,pendingId:C}=p;k>0?setTimeout(()=>{p.pendingId===C&&p.fallback(T)},k):k===0&&p.fallback(T)}}function Yu(t,e,n,r,s,i,o,c,l,u,d=!1){const{p,m:g,um:T,n:R,o:{parentNode:P,remove:D}}=u;let F;const k=ww(t);k&&e&&e.pendingBranch&&(F=e.pendingId,e.deps++);const C=t.props?Ma(t.props.timeout):void 0,N=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Hl++,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!d,isHydrating:d,isUnmounted:!1,effects:[],resolve(V=!1,b=!1){const{vnode:v,activeBranch:m,pendingBranch:y,pendingId:w,effects:I,parentComponent:E,container:de}=x;let ye=!1;x.isHydrating?x.isHydrating=!1:V||(ye=m&&y.transition&&y.transition.mode==="out-in",ye&&(m.transition.afterLeave=()=>{w===x.pendingId&&(g(y,de,i===N?R(m):i,0),xa(I))}),m&&(P(m.el)!==x.hiddenContainer&&(i=R(m)),T(m,E,x,!0)),ye||g(y,de,i,0)),Vs(x,y),x.pendingBranch=null,x.isInFallback=!1;let z=x.parent,Q=!1;for(;z;){if(z.pendingBranch){z.effects.push(...I),Q=!0;break}z=z.parent}!Q&&!ye&&xa(I),x.effects=[],k&&e&&e.pendingBranch&&F===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),io(v,"onResolve")},fallback(V){if(!x.pendingBranch)return;const{vnode:b,activeBranch:v,parentComponent:m,container:y,namespace:w}=x;io(b,"onFallback");const I=R(v),E=()=>{x.isInFallback&&(p(null,V,y,I,m,null,w,c,l),Vs(x,V))},de=V.transition&&V.transition.mode==="out-in";de&&(v.transition.afterLeave=E),x.isInFallback=!0,T(v,m,null,!0),de||E()},move(V,b,v){x.activeBranch&&g(x.activeBranch,V,b,v),x.container=V},next(){return x.activeBranch&&R(x.activeBranch)},registerDep(V,b,v){const m=!!x.pendingBranch;m&&x.deps++;const y=V.vnode.el;V.asyncDep.catch(w=>{as(w,V,0)}).then(w=>{if(V.isUnmounted||x.isUnmounted||x.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:I}=V;eu(V,w,!1),y&&(I.el=y);const E=!y&&V.subTree.el;b(V,I,P(y||V.subTree.el),y?null:R(V.subTree),x,o,v),E&&D(E),Gu(V,I.el),m&&--x.deps===0&&x.resolve()})},unmount(V,b){x.isUnmounted=!0,x.activeBranch&&T(x.activeBranch,n,V,b),x.pendingBranch&&T(x.pendingBranch,n,V,b)}};return x}function Ew(t,e,n,r,s,i,o,c,l){const u=e.suspense=Yu(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),d=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),d}function Tw(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=cf(r?n.default:n),t.ssFallback=r?cf(n.fallback):Pe(ct)}function cf(t){let e;if(fe(t)){const n=Qr&&t._c;n&&(t._d=!1,Se()),t=t(),n&&(t._d=!0,e=Ot,qm())}return se(t)&&(t=uw(t)),t=Ft(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function am(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):xa(t)}function Vs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Gu(r,s))}function ww(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function vc(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Rr();const c=Yr(n),l=Bt(e,n,t,o);return c(),Sr(),l});return r?s.unshift(i):s.push(i),i}}const Hn=t=>(e,n=nt)=>{(!Co||t==="sp")&&vc(t,(...r)=>e(...r),n)},cm=Hn("bm"),si=Hn("m"),lm=Hn("bu"),Ec=Hn("u"),Tc=Hn("bum"),wc=Hn("um"),um=Hn("sp"),hm=Hn("rtg"),dm=Hn("rtc");function fm(t,e=nt){vc("ec",t,e)}function xn(t,e){if(rt===null)return t;const n=Po(rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&lr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function gn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Rr(),Bt(l,n,8,[t.el,c,t,e]),Sr())}}function Ms(t,e,n,r){let s;const i=n&&n[r];if(se(t)||$e(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function Iw(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(se(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}/*! #__NO_SIDE_EFFECTS__ */function bo(t,e){return fe(t)?Ue({name:t.name},e,{setup:t}):t}const Hr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Aw(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,d=0;const p=()=>(d++,l=null,g()),g=()=>{let T;return l||(T=l=e().catch(R=>{if(R=R instanceof Error?R:new Error(String(R)),c)return new Promise((P,D)=>{c(R,()=>P(p()),()=>D(R),d+1)});throw R}).then(R=>T!==l&&l?l:(R&&(R.__esModule||R[Symbol.toStringTag]==="Module")&&(R=R.default),u=R,R)))};return bo({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const T=nt;if(u)return()=>fl(u,T);const R=k=>{l=null,as(k,T,13,!r)};if(o&&T.suspense||Co)return g().then(k=>()=>fl(k,T)).catch(k=>(R(k),()=>r?Pe(r,{error:k}):null));const P=Qe(!1),D=Qe(),F=Qe(!!s);return s&&setTimeout(()=>{F.value=!1},s),i!=null&&setTimeout(()=>{if(!P.value&&!D.value){const k=new Error(`Async component timed out after ${i}ms.`);R(k),D.value=k}},i),g().then(()=>{P.value=!0,T.parent&&So(T.parent.vnode)&&(T.parent.effect.dirty=!0,mc(T.parent.update))}).catch(k=>{R(k),D.value=k}),()=>{if(P.value&&u)return fl(u,T);if(D.value&&r)return Pe(r,{error:D.value});if(n&&!F.value)return Pe(n)}}})}function fl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Pe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}function bw(t,e,n={},r,s){if(rt.isCE||rt.parent&&Hr(rt.parent)&&rt.parent.isCE)return e!=="default"&&(n.name=e),Pe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Se();const o=i&&pm(i(n)),c=Wr(We,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function pm(t){return t.some(e=>Tr(e)?!(e.type===ct||e.type===We&&!pm(e.children)):!0)?t:null}function Rw(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Bi(r)]=t[r];return n}const Kl=t=>t?Ym(t)?Po(t):Kl(t.parent):null,$i=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kl(t.parent),$root:t=>Kl(t.root),$emit:t=>t.emit,$options:t=>Ju(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,mc(t.update)}),$nextTick:t=>t.n||(t.n=Ao.bind(t.proxy)),$watch:t=>iI.bind(t)}),pl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&be(t,e),Wl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pl(r,e))return o[e]=1,r[e];if(s!==Ne&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==Ne&&be(n,e))return o[e]=4,n[e];Gl&&(o[e]=0)}}const d=$i[e];let p,g;if(d)return e==="$attrs"&&Dt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pl(s,e)?(s[e]=n,!0):r!==Ne&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ne&&be(t,o)||pl(e,o)||(c=i[0])&&be(c,o)||be(r,o)||be($i,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Sw=Ue({},Wl,{get(t,e){if(e!==Symbol.unscopables)return Wl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!lT(e)}});function Cw(){return null}function Pw(){return null}function kw(t){}function Ow(t){}function Nw(){return null}function Dw(){}function Vw(t,e){return null}function Mw(){return gm().slots}function Lw(){return gm().attrs}function gm(){const t=Kn();return t.setupContext||(t.setupContext=Zm(t))}function oo(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function xw(t,e){const n=oo(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?se(s)||fe(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Fw(t,e){return!t||!e?t||e:se(t)&&se(e)?t.concat(e):Ue({},oo(t),oo(e))}function Uw(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Bw(t){const e=Kn();let n=t();return Zl(),Vu(n)&&(n=n.catch(r=>{throw Yr(e),r})),[n,()=>Yr(e)]}let Gl=!0;function $w(t){const e=Ju(t),n=t.proxy,r=t.ctx;Gl=!1,e.beforeCreate&&lf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:T,updated:R,activated:P,deactivated:D,beforeDestroy:F,beforeUnmount:k,destroyed:C,unmounted:N,render:x,renderTracked:V,renderTriggered:b,errorCaptured:v,serverPrefetch:m,expose:y,inheritAttrs:w,components:I,directives:E,filters:de}=e;if(u&&jw(u,r,null),o)for(const Q in o){const W=o[Q];fe(W)&&(r[Q]=W.bind(n))}if(s){const Q=s.call(n,n);Ve(Q)&&(t.data=Io(Q))}if(Gl=!0,i)for(const Q in i){const W=i[Q],je=fe(W)?W.bind(n,n):fe(W.get)?W.get.bind(n,n):kt,tn=!fe(W)&&fe(W.set)?W.set.bind(n):kt,Ht=Qt({get:je,set:tn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:qe=>Ht.value=qe})}if(c)for(const Q in c)mm(c[Q],r,n,Q);if(l){const Q=fe(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(W=>{xs(W,Q[W])})}d&&lf(d,t,"c");function z(Q,W){se(W)?W.forEach(je=>Q(je.bind(n))):W&&Q(W.bind(n))}if(z(cm,p),z(si,g),z(lm,T),z(Ec,R),z(Lm,P),z(xm,D),z(fm,v),z(dm,V),z(hm,b),z(Tc,k),z(wc,N),z(um,m),se(y))if(y.length){const Q=t.exposed||(t.exposed={});y.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:je=>n[W]=je})})}else t.exposed||(t.exposed={});x&&t.render===kt&&(t.render=x),w!=null&&(t.inheritAttrs=w),I&&(t.components=I),E&&(t.directives=E)}function jw(t,e,n=kt){se(t)&&(t=zl(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function lf(t,e,n){Bt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mm(t,e,n,r){const s=r.includes(".")?Mm(n,r):()=>n[r];if($e(t)){const i=e[t];fe(i)&&Fs(s,i)}else if(fe(t))Fs(s,t.bind(n));else if(Ve(t))if(se(t))t.forEach(i=>mm(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Fs(s,i,t)}}function Ju(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ua(l,u,o,!0)),Ua(l,e,o)),Ve(e)&&i.set(e,l),l}function Ua(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ua(t,i,n,!0),s&&s.forEach(o=>Ua(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=qw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const qw={data:uf,props:hf,emits:hf,methods:Ni,computed:Ni,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Ni,directives:Ni,watch:Kw,provide:uf,inject:Hw};function uf(t,e){return e?t?function(){return Ue(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Hw(t,e){return Ni(zl(t),zl(e))}function zl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ni(t,e){return t?Ue(Object.create(null),t,e):e}function hf(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Ue(Object.create(null),oo(t),oo(e??{})):e}function Kw(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function _m(){return{app:null,config:{isNativeTag:nT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ww=0;function Gw(t,e){return function(r,s=null){fe(r)||(r=Ue({},r)),s!=null&&!Ve(s)&&(s=null);const i=_m(),o=new WeakSet;let c=!1;const l=i.app={_uid:Ww++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:t_,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&fe(u.install)?(o.add(u),u.install(l,...d)):fe(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const g=Pe(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Po(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Ls;Ls=l;try{return u()}finally{Ls=d}}};return l}}let Ls=null;function xs(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=nt||rt;if(r||Ls){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ls._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function zw(){return!!(nt||rt||Ls)}const ym={},vm=()=>Object.create(ym),Em=t=>Object.getPrototypeOf(t)===ym;function Qw(t,e,n,r=!1){const s={},i=vm();t.propsDefaults=Object.create(null),Tm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Bu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(_c(t.emitsOptions,g))continue;const T=e[g];if(l)if(be(i,g))T!==i[g]&&(i[g]=T,u=!0);else{const R=St(g);s[R]=Ql(l,c,R,T,t,!1)}else T!==i[g]&&(i[g]=T,u=!0)}}}else{Tm(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!be(e,p)&&((d=Ut(p))===p||!be(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ql(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&Mn(t.attrs,"set","")}function Tm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ps(l))continue;const u=e[l];let d;s&&be(s,d=St(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:_c(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ql(s,l,p,u[p],t,!be(u,p))}}return o}function Ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Yr(s);r=u[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ut(n))&&(r=!0))}return r}function wm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const d=p=>{l=!0;const[g,T]=wm(p,e,!0);Ue(o,g),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ve(t)&&r.set(t,Ss),Ss;if(se(i))for(let d=0;d<i.length;d++){const p=St(i[d]);df(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=St(d);if(df(p)){const g=i[d],T=o[p]=se(g)||fe(g)?{type:g}:Ue({},g);if(T){const R=gf(Boolean,T.type),P=gf(String,T.type);T[0]=R>-1,T[1]=P<0||R<P,(R>-1||be(T,"default"))&&c.push(p)}}}const u=[o,c];return Ve(t)&&r.set(t,u),u}function df(t){return t[0]!=="$"&&!Ps(t)}function ff(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function pf(t,e){return ff(t)===ff(e)}function gf(t,e){return se(e)?e.findIndex(n=>pf(n,t)):fe(e)&&pf(e,t)?0:-1}const Im=t=>t[0]==="_"||t==="$stable",Xu=t=>se(t)?t.map(Ft):[Ft(t)],Jw=(t,e,n)=>{if(e._n)return e;const r=_n((...s)=>Xu(e(...s)),n);return r._c=!1,r},Am=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Im(s))continue;const i=t[s];if(fe(i))e[s]=Jw(s,i,r);else if(i!=null){const o=Xu(i);e[s]=()=>o}}},bm=(t,e)=>{const n=Xu(e);t.slots.default=()=>n},Xw=(t,e)=>{const n=t.slots=vm();if(t.vnode.shapeFlag&32){const r=e._;r?(Ue(n,e),Cg(n,"_",r,!0)):Am(e,n)}else e&&bm(t,e)},Zw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Ue(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Am(e,s)),o=e}else e&&(bm(t,e),o={default:1});if(i)for(const c in s)!Im(c)&&o[c]==null&&delete s[c]};function Ba(t,e,n,r,s=!1){if(se(t)){t.forEach((g,T)=>Ba(g,e&&(se(e)?e[T]:e),n,r,s));return}if(Hr(r)&&!s)return;const i=r.shapeFlag&4?Po(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Ne?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&($e(u)?(d[u]=null,be(p,u)&&(p[u]=null)):Ye(u)&&(u.value=null)),fe(l))Ln(l,c,12,[o,d]);else{const g=$e(l),T=Ye(l);if(g||T){const R=()=>{if(t.f){const P=g?be(p,l)?p[l]:d[l]:l.value;s?se(P)&&Du(P,i):se(P)?P.includes(i)||P.push(i):g?(d[l]=[i],be(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,be(p,l)&&(p[l]=o)):T&&(l.value=o,t.k&&(d[t.k]=o))};o?(R.id=-1,ot(R,n)):R()}}}let mf=!1;const vs=()=>{mf||(console.error("Hydration completed but contains mismatches."),mf=!0)},eI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",tI=t=>t.namespaceURI.includes("MathML"),la=t=>{if(eI(t))return"svg";if(tI(t))return"mathml"},ua=t=>t.nodeType===8;function nI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,d=(C,N)=>{if(!N.hasChildNodes()){n(null,C,N),Fa(),N._vnode=C;return}p(N.firstChild,C,null,null,null),Fa(),N._vnode=C},p=(C,N,x,V,b,v=!1)=>{v=v||!!N.dynamicChildren;const m=ua(C)&&C.data==="[",y=()=>P(C,N,x,V,b,m),{type:w,ref:I,shapeFlag:E,patchFlag:de}=N;let ye=C.nodeType;N.el=C,de===-2&&(v=!1,N.dynamicChildren=null);let z=null;switch(w){case zr:ye!==3?N.children===""?(l(N.el=s(""),o(C),C),z=C):z=y():(C.data!==N.children&&(vs(),C.data=N.children),z=i(C));break;case ct:k(C)?(z=i(C),F(N.el=C.content.firstChild,C,x)):ye!==8||m?z=y():z=i(C);break;case Kr:if(m&&(C=i(C),ye=C.nodeType),ye===1||ye===3){z=C;const Q=!N.children.length;for(let W=0;W<N.staticCount;W++)Q&&(N.children+=z.nodeType===1?z.outerHTML:z.data),W===N.staticCount-1&&(N.anchor=z),z=i(z);return m?i(z):z}else y();break;case We:m?z=R(C,N,x,V,b,v):z=y();break;default:if(E&1)(ye!==1||N.type.toLowerCase()!==C.tagName.toLowerCase())&&!k(C)?z=y():z=g(C,N,x,V,b,v);else if(E&6){N.slotScopeIds=b;const Q=o(C);if(m?z=D(C):ua(C)&&C.data==="teleport start"?z=D(C,C.data,"teleport end"):z=i(C),e(N,Q,null,x,V,la(Q),v),Hr(N)){let W;m?(W=Pe(We),W.anchor=z?z.previousSibling:Q.lastChild):W=C.nodeType===3?gr(""):Pe("div"),W.el=C,N.component.subTree=W}}else E&64?ye!==8?z=y():z=N.type.hydrate(C,N,x,V,b,v,t,T):E&128&&(z=N.type.hydrate(C,N,x,V,la(o(C)),b,v,t,p))}return I!=null&&Ba(I,null,V,N),z},g=(C,N,x,V,b,v)=>{v=v||!!N.dynamicChildren;const{type:m,props:y,patchFlag:w,shapeFlag:I,dirs:E,transition:de}=N,ye=m==="input"||m==="option";if(ye||w!==-1){E&&gn(N,null,x,"created");let z=!1;if(k(C)){z=Pm(V,de)&&x&&x.vnode.props&&x.vnode.props.appear;const W=C.content.firstChild;z&&de.beforeEnter(W),F(W,C,x),N.el=C=W}if(I&16&&!(y&&(y.innerHTML||y.textContent))){let W=T(C.firstChild,N,C,x,V,b,v);for(;W;){vs();const je=W;W=W.nextSibling,c(je)}}else I&8&&C.textContent!==N.children&&(vs(),C.textContent=N.children);if(y)if(ye||!v||w&48)for(const W in y)(ye&&(W.endsWith("value")||W==="indeterminate")||Eo(W)&&!Ps(W)||W[0]===".")&&r(C,W,null,y[W],void 0,void 0,x);else y.onClick&&r(C,"onClick",null,y.onClick,void 0,void 0,x);let Q;(Q=y&&y.onVnodeBeforeMount)&&Ct(Q,x,N),E&&gn(N,null,x,"beforeMount"),((Q=y&&y.onVnodeMounted)||E||z)&&am(()=>{Q&&Ct(Q,x,N),z&&de.enter(C),E&&gn(N,null,x,"mounted")},V)}return C.nextSibling},T=(C,N,x,V,b,v,m)=>{m=m||!!N.dynamicChildren;const y=N.children,w=y.length;for(let I=0;I<w;I++){const E=m?y[I]:y[I]=Ft(y[I]);C?C=p(C,E,V,b,v,m):E.type===zr&&!E.children?l(E.el=s(""),x):(vs(),n(null,E,x,null,V,b,la(x),v))}return C},R=(C,N,x,V,b,v)=>{const{slotScopeIds:m}=N;m&&(b=b?b.concat(m):m);const y=o(C),w=T(i(C),N,y,x,V,b,v);return w&&ua(w)&&w.data==="]"?i(N.anchor=w):(vs(),l(N.anchor=u("]"),y,w),w)},P=(C,N,x,V,b,v)=>{if(vs(),N.el=null,v){const w=D(C);for(;;){const I=i(C);if(I&&I!==w)c(I);else break}}const m=i(C),y=o(C);return c(C),n(null,N,y,m,x,V,la(y),b),m},D=(C,N="[",x="]")=>{let V=0;for(;C;)if(C=i(C),C&&ua(C)&&(C.data===N&&V++,C.data===x)){if(V===0)return i(C);V--}return C},F=(C,N,x)=>{const V=N.parentNode;V&&V.replaceChild(C,N);let b=x;for(;b;)b.vnode.el===N&&(b.vnode.el=b.subTree.el=C),b=b.parent},k=C=>C.nodeType===1&&C.tagName.toLowerCase()==="template";return[d,p]}const ot=am;function Rm(t){return Cm(t)}function Sm(t){return Cm(t,nI)}function Cm(t,e){const n=Pg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:T=kt,insertStaticContent:R}=t,P=(A,S,M,j=null,U=null,Y=null,Z=void 0,G=null,J=!!S.dynamicChildren)=>{if(A===S)return;A&&!rn(A,S)&&(j=$(A),qe(A,U,Y,!0),A=null),S.patchFlag===-2&&(J=!1,S.dynamicChildren=null);const{type:H,ref:te,shapeFlag:le}=S;switch(H){case zr:D(A,S,M,j);break;case ct:F(A,S,M,j);break;case Kr:A==null&&k(S,M,j,Z);break;case We:I(A,S,M,j,U,Y,Z,G,J);break;default:le&1?x(A,S,M,j,U,Y,Z,G,J):le&6?E(A,S,M,j,U,Y,Z,G,J):(le&64||le&128)&&H.process(A,S,M,j,U,Y,Z,G,J,ie)}te!=null&&U&&Ba(te,A&&A.ref,Y,S||A,!S)},D=(A,S,M,j)=>{if(A==null)r(S.el=c(S.children),M,j);else{const U=S.el=A.el;S.children!==A.children&&u(U,S.children)}},F=(A,S,M,j)=>{A==null?r(S.el=l(S.children||""),M,j):S.el=A.el},k=(A,S,M,j)=>{[A.el,A.anchor]=R(A.children,S,M,j,A.el,A.anchor)},C=({el:A,anchor:S},M,j)=>{let U;for(;A&&A!==S;)U=g(A),r(A,M,j),A=U;r(S,M,j)},N=({el:A,anchor:S})=>{let M;for(;A&&A!==S;)M=g(A),s(A),A=M;s(S)},x=(A,S,M,j,U,Y,Z,G,J)=>{S.type==="svg"?Z="svg":S.type==="math"&&(Z="mathml"),A==null?V(S,M,j,U,Y,Z,G,J):m(A,S,U,Y,Z,G,J)},V=(A,S,M,j,U,Y,Z,G)=>{let J,H;const{props:te,shapeFlag:le,transition:ce,dirs:ae}=A;if(J=A.el=o(A.type,Y,te&&te.is,te),le&8?d(J,A.children):le&16&&v(A.children,J,null,j,U,gl(A,Y),Z,G),ae&&gn(A,null,j,"created"),b(J,A,A.scopeId,Z,j),te){for(const ke in te)ke!=="value"&&!Ps(ke)&&i(J,ke,null,te[ke],Y,A.children,j,U,it);"value"in te&&i(J,"value",null,te.value,Y),(H=te.onVnodeBeforeMount)&&Ct(H,j,A)}ae&&gn(A,null,j,"beforeMount");const he=Pm(U,ce);he&&ce.beforeEnter(J),r(J,S,M),((H=te&&te.onVnodeMounted)||he||ae)&&ot(()=>{H&&Ct(H,j,A),he&&ce.enter(J),ae&&gn(A,null,j,"mounted")},U)},b=(A,S,M,j,U)=>{if(M&&T(A,M),j)for(let Y=0;Y<j.length;Y++)T(A,j[Y]);if(U){let Y=U.subTree;if(S===Y){const Z=U.vnode;b(A,Z,Z.scopeId,Z.slotScopeIds,U.parent)}}},v=(A,S,M,j,U,Y,Z,G,J=0)=>{for(let H=J;H<A.length;H++){const te=A[H]=G?ar(A[H]):Ft(A[H]);P(null,te,S,M,j,U,Y,Z,G)}},m=(A,S,M,j,U,Y,Z)=>{const G=S.el=A.el;let{patchFlag:J,dynamicChildren:H,dirs:te}=S;J|=A.patchFlag&16;const le=A.props||Ne,ce=S.props||Ne;let ae;if(M&&Vr(M,!1),(ae=ce.onVnodeBeforeUpdate)&&Ct(ae,M,S,A),te&&gn(S,A,M,"beforeUpdate"),M&&Vr(M,!0),H?y(A.dynamicChildren,H,G,M,j,gl(S,U),Y):Z||W(A,S,G,null,M,j,gl(S,U),Y,!1),J>0){if(J&16)w(G,S,le,ce,M,j,U);else if(J&2&&le.class!==ce.class&&i(G,"class",null,ce.class,U),J&4&&i(G,"style",le.style,ce.style,U),J&8){const he=S.dynamicProps;for(let ke=0;ke<he.length;ke++){const Ae=he[ke],Je=le[Ae],Vt=ce[Ae];(Vt!==Je||Ae==="value")&&i(G,Ae,Je,Vt,U,A.children,M,j,it)}}J&1&&A.children!==S.children&&d(G,S.children)}else!Z&&H==null&&w(G,S,le,ce,M,j,U);((ae=ce.onVnodeUpdated)||te)&&ot(()=>{ae&&Ct(ae,M,S,A),te&&gn(S,A,M,"updated")},j)},y=(A,S,M,j,U,Y,Z)=>{for(let G=0;G<S.length;G++){const J=A[G],H=S[G],te=J.el&&(J.type===We||!rn(J,H)||J.shapeFlag&70)?p(J.el):M;P(J,H,te,null,j,U,Y,Z,!0)}},w=(A,S,M,j,U,Y,Z)=>{if(M!==j){if(M!==Ne)for(const G in M)!Ps(G)&&!(G in j)&&i(A,G,M[G],null,Z,S.children,U,Y,it);for(const G in j){if(Ps(G))continue;const J=j[G],H=M[G];J!==H&&G!=="value"&&i(A,G,H,J,Z,S.children,U,Y,it)}"value"in j&&i(A,"value",M.value,j.value,Z)}},I=(A,S,M,j,U,Y,Z,G,J)=>{const H=S.el=A?A.el:c(""),te=S.anchor=A?A.anchor:c("");let{patchFlag:le,dynamicChildren:ce,slotScopeIds:ae}=S;ae&&(G=G?G.concat(ae):ae),A==null?(r(H,M,j),r(te,M,j),v(S.children||[],M,te,U,Y,Z,G,J)):le>0&&le&64&&ce&&A.dynamicChildren?(y(A.dynamicChildren,ce,M,U,Y,Z,G),(S.key!=null||U&&S===U.subTree)&&Zu(A,S,!0)):W(A,S,M,te,U,Y,Z,G,J)},E=(A,S,M,j,U,Y,Z,G,J)=>{S.slotScopeIds=G,A==null?S.shapeFlag&512?U.ctx.activate(S,M,j,Z,J):de(S,M,j,U,Y,Z,J):ye(A,S,J)},de=(A,S,M,j,U,Y,Z)=>{const G=A.component=Qm(A,j,U);if(So(A)&&(G.ctx.renderer=ie),Jm(G),G.asyncDep){if(U&&U.registerDep(G,z,Z),!A.el){const J=G.subTree=Pe(ct);F(null,J,S,M)}}else z(G,A,S,M,U,Y,Z)},ye=(A,S,M)=>{const j=S.component=A.component;if(fw(A,S,M))if(j.asyncDep&&!j.asyncResolved){Q(j,S,M);return}else j.next=S,ow(j.update),j.effect.dirty=!0,j.update();else S.el=A.el,j.vnode=S},z=(A,S,M,j,U,Y,Z)=>{const G=()=>{if(A.isMounted){let{next:te,bu:le,u:ce,parent:ae,vnode:he}=A;{const Kt=km(A);if(Kt){te&&(te.el=he.el,Q(A,te,Z)),Kt.asyncDep.then(()=>{A.isUnmounted||G()});return}}let ke=te,Ae;Vr(A,!1),te?(te.el=he.el,Q(A,te,Z)):te=he,le&&ks(le),(Ae=te.props&&te.props.onVnodeBeforeUpdate)&&Ct(Ae,ae,te,he),Vr(A,!0);const Je=Ta(A),Vt=A.subTree;A.subTree=Je,P(Vt,Je,p(Vt.el),$(Vt),A,U,Y),te.el=Je.el,ke===null&&Gu(A,Je.el),ce&&ot(ce,U),(Ae=te.props&&te.props.onVnodeUpdated)&&ot(()=>Ct(Ae,ae,te,he),U)}else{let te;const{el:le,props:ce}=S,{bm:ae,m:he,parent:ke}=A,Ae=Hr(S);if(Vr(A,!1),ae&&ks(ae),!Ae&&(te=ce&&ce.onVnodeBeforeMount)&&Ct(te,ke,S),Vr(A,!0),le&&De){const Je=()=>{A.subTree=Ta(A),De(le,A.subTree,A,U,null)};Ae?S.type.__asyncLoader().then(()=>!A.isUnmounted&&Je()):Je()}else{const Je=A.subTree=Ta(A);P(null,Je,M,j,A,U,Y),S.el=Je.el}if(he&&ot(he,U),!Ae&&(te=ce&&ce.onVnodeMounted)){const Je=S;ot(()=>Ct(te,ke,Je),U)}(S.shapeFlag&256||ke&&Hr(ke.vnode)&&ke.vnode.shapeFlag&256)&&A.a&&ot(A.a,U),A.isMounted=!0,S=M=j=null}},J=A.effect=new qs(G,kt,()=>mc(H),A.scope),H=A.update=()=>{J.dirty&&J.run()};H.id=A.uid,Vr(A,!0),H()},Q=(A,S,M)=>{S.component=A;const j=A.vnode.props;A.vnode=S,A.next=null,Yw(A,S.props,j,M),Zw(A,S.children,M),Rr(),sf(A),Sr()},W=(A,S,M,j,U,Y,Z,G,J=!1)=>{const H=A&&A.children,te=A?A.shapeFlag:0,le=S.children,{patchFlag:ce,shapeFlag:ae}=S;if(ce>0){if(ce&128){tn(H,le,M,j,U,Y,Z,G,J);return}else if(ce&256){je(H,le,M,j,U,Y,Z,G,J);return}}ae&8?(te&16&&it(H,U,Y),le!==H&&d(M,le)):te&16?ae&16?tn(H,le,M,j,U,Y,Z,G,J):it(H,U,Y,!0):(te&8&&d(M,""),ae&16&&v(le,M,j,U,Y,Z,G,J))},je=(A,S,M,j,U,Y,Z,G,J)=>{A=A||Ss,S=S||Ss;const H=A.length,te=S.length,le=Math.min(H,te);let ce;for(ce=0;ce<le;ce++){const ae=S[ce]=J?ar(S[ce]):Ft(S[ce]);P(A[ce],ae,M,null,U,Y,Z,G,J)}H>te?it(A,U,Y,!0,!1,le):v(S,M,j,U,Y,Z,G,J,le)},tn=(A,S,M,j,U,Y,Z,G,J)=>{let H=0;const te=S.length;let le=A.length-1,ce=te-1;for(;H<=le&&H<=ce;){const ae=A[H],he=S[H]=J?ar(S[H]):Ft(S[H]);if(rn(ae,he))P(ae,he,M,null,U,Y,Z,G,J);else break;H++}for(;H<=le&&H<=ce;){const ae=A[le],he=S[ce]=J?ar(S[ce]):Ft(S[ce]);if(rn(ae,he))P(ae,he,M,null,U,Y,Z,G,J);else break;le--,ce--}if(H>le){if(H<=ce){const ae=ce+1,he=ae<te?S[ae].el:j;for(;H<=ce;)P(null,S[H]=J?ar(S[H]):Ft(S[H]),M,he,U,Y,Z,G,J),H++}}else if(H>ce)for(;H<=le;)qe(A[H],U,Y,!0),H++;else{const ae=H,he=H,ke=new Map;for(H=he;H<=ce;H++){const At=S[H]=J?ar(S[H]):Ft(S[H]);At.key!=null&&ke.set(At.key,H)}let Ae,Je=0;const Vt=ce-he+1;let Kt=!1,pi=0;const Yn=new Array(Vt);for(H=0;H<Vt;H++)Yn[H]=0;for(H=ae;H<=le;H++){const At=A[H];if(Je>=Vt){qe(At,U,Y,!0);continue}let Wt;if(At.key!=null)Wt=ke.get(At.key);else for(Ae=he;Ae<=ce;Ae++)if(Yn[Ae-he]===0&&rn(At,S[Ae])){Wt=Ae;break}Wt===void 0?qe(At,U,Y,!0):(Yn[Wt-he]=H+1,Wt>=pi?pi=Wt:Kt=!0,P(At,S[Wt],M,null,U,Y,Z,G,J),Je++)}const fs=Kt?rI(Yn):Ss;for(Ae=fs.length-1,H=Vt-1;H>=0;H--){const At=he+H,Wt=S[At],ps=At+1<te?S[At+1].el:j;Yn[H]===0?P(null,Wt,M,ps,U,Y,Z,G,J):Kt&&(Ae<0||H!==fs[Ae]?Ht(Wt,M,ps,2):Ae--)}}},Ht=(A,S,M,j,U=null)=>{const{el:Y,type:Z,transition:G,children:J,shapeFlag:H}=A;if(H&6){Ht(A.component.subTree,S,M,j);return}if(H&128){A.suspense.move(S,M,j);return}if(H&64){Z.move(A,S,M,ie);return}if(Z===We){r(Y,S,M);for(let le=0;le<J.length;le++)Ht(J[le],S,M,j);r(A.anchor,S,M);return}if(Z===Kr){C(A,S,M);return}if(j!==2&&H&1&&G)if(j===0)G.beforeEnter(Y),r(Y,S,M),ot(()=>G.enter(Y),U);else{const{leave:le,delayLeave:ce,afterLeave:ae}=G,he=()=>r(Y,S,M),ke=()=>{le(Y,()=>{he(),ae&&ae()})};ce?ce(Y,he,ke):ke()}else r(Y,S,M)},qe=(A,S,M,j=!1,U=!1)=>{const{type:Y,props:Z,ref:G,children:J,dynamicChildren:H,shapeFlag:te,patchFlag:le,dirs:ce,memoIndex:ae}=A;if(G!=null&&Ba(G,null,M,A,!0),ae!=null&&(S.renderCache[ae]=void 0),te&256){S.ctx.deactivate(A);return}const he=te&1&&ce,ke=!Hr(A);let Ae;if(ke&&(Ae=Z&&Z.onVnodeBeforeUnmount)&&Ct(Ae,S,A),te&6)fn(A.component,M,j);else{if(te&128){A.suspense.unmount(M,j);return}he&&gn(A,null,S,"beforeUnmount"),te&64?A.type.remove(A,S,M,U,ie,j):H&&(Y!==We||le>0&&le&64)?it(H,S,M,!1,!0):(Y===We&&le&384||!U&&te&16)&&it(J,S,M),j&&He(A)}(ke&&(Ae=Z&&Z.onVnodeUnmounted)||he)&&ot(()=>{Ae&&Ct(Ae,S,A),he&&gn(A,null,S,"unmounted")},M)},He=A=>{const{type:S,el:M,anchor:j,transition:U}=A;if(S===We){Qn(M,j);return}if(S===Kr){N(A);return}const Y=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Z,delayLeave:G}=U,J=()=>Z(M,Y);G?G(A.el,Y,J):J()}else Y()},Qn=(A,S)=>{let M;for(;A!==S;)M=g(A),s(A),A=M;s(S)},fn=(A,S,M)=>{const{bum:j,scope:U,update:Y,subTree:Z,um:G,m:J,a:H}=A;$a(J),$a(H),j&&ks(j),U.stop(),Y&&(Y.active=!1,qe(Z,A,S,M)),G&&ot(G,S),ot(()=>{A.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},it=(A,S,M,j=!1,U=!1,Y=0)=>{for(let Z=Y;Z<A.length;Z++)qe(A[Z],S,M,j,U)},$=A=>A.shapeFlag&6?$(A.component.subTree):A.shapeFlag&128?A.suspense.next():g(A.anchor||A.el);let ne=!1;const ee=(A,S,M)=>{A==null?S._vnode&&qe(S._vnode,null,null,!0):P(S._vnode||null,A,S,null,null,null,M),ne||(ne=!0,sf(),Fa(),ne=!1),S._vnode=A},ie={p:P,um:qe,m:Ht,r:He,mt:de,mc:v,pc:W,pbc:y,n:$,o:t};let Ee,De;return e&&([Ee,De]=e(ie)),{render:ee,hydrate:Ee,createApp:Gw(ee,Ee)}}function gl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zu(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ar(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Zu(o,c)),c.type===zr&&(c.el=o.el)}}function rI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function km(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:km(e)}function $a(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Om=Symbol.for("v-scx"),Nm=()=>$t(Om);function sI(t,e){return Ro(t,null,e)}function Dm(t,e){return Ro(t,null,{flush:"post"})}function Vm(t,e){return Ro(t,null,{flush:"sync"})}const ha={};function Fs(t,e,n){return Ro(t,e,n)}function Ro(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ne){if(e&&i){const V=e;e=(...b)=>{V(...b),x()}}const l=nt,u=V=>r===!0?V:lr(V,r===!1?1:void 0);let d,p=!1,g=!1;if(Ye(t)?(d=()=>t.value,p=eo(t)):Os(t)?(d=()=>u(t),p=!0):se(t)?(g=!0,p=t.some(V=>Os(V)||eo(V)),d=()=>t.map(V=>{if(Ye(V))return V.value;if(Os(V))return u(V);if(fe(V))return Ln(V,l,2)})):fe(t)?e?d=()=>Ln(t,l,2):d=()=>(T&&T(),Bt(t,l,3,[R])):d=kt,e&&r){const V=d;d=()=>lr(V())}let T,R=V=>{T=C.onStop=()=>{Ln(V,l,4),T=C.onStop=void 0}},P;if(Co)if(R=kt,e?n&&Bt(e,l,3,[d(),g?[]:void 0,R]):d(),s==="sync"){const V=Nm();P=V.__watcherHandles||(V.__watcherHandles=[])}else return kt;let D=g?new Array(t.length).fill(ha):ha;const F=()=>{if(!(!C.active||!C.dirty))if(e){const V=C.run();(r||p||(g?V.some((b,v)=>cn(b,D[v])):cn(V,D)))&&(T&&T(),Bt(e,l,3,[V,D===ha?void 0:g&&D[0]===ha?[]:D,R]),D=V)}else C.run()};F.allowRecurse=!!e;let k;s==="sync"?k=F:s==="post"?k=()=>ot(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),k=()=>mc(F));const C=new qs(d,kt,k),N=Dg(),x=()=>{C.stop(),N&&Du(N.effects,C)};return e?n?F():D=C.run():s==="post"?ot(C.run.bind(C),l&&l.suspense):C.run(),P&&P.push(x),x}function iI(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Mm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Yr(this),c=Ro(s,i.bind(r),n);return o(),c}function Mm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function lr(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))lr(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)lr(t[r],e,n);else if(os(t)||Cs(t))t.forEach(r=>{lr(r,e,n)});else if(Sg(t)){for(const r in t)lr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&lr(t[r],e,n)}return t}const So=t=>t.type.__isKeepAlive,oI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Kn(),r=n.ctx;if(!r.renderer)return()=>{const k=e.default&&e.default();return k&&k.length===1?k[0]:k};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:d,o:{createElement:p}}}=r,g=p("div");r.activate=(k,C,N,x,V)=>{const b=k.component;u(k,C,N,0,c),l(b.vnode,k,C,N,b,c,x,k.slotScopeIds,V),ot(()=>{b.isDeactivated=!1,b.a&&ks(b.a);const v=k.props&&k.props.onVnodeMounted;v&&Ct(v,b.parent,k)},c)},r.deactivate=k=>{const C=k.component;$a(C.m),$a(C.a),u(k,g,null,1,c),ot(()=>{C.da&&ks(C.da);const N=k.props&&k.props.onVnodeUnmounted;N&&Ct(N,C.parent,k),C.isDeactivated=!0},c)};function T(k){ml(k),d(k,n,c,!0)}function R(k){s.forEach((C,N)=>{const x=nu(C.type);x&&(!k||!k(x))&&P(N)})}function P(k){const C=s.get(k);!o||!rn(C,o)?T(C):o&&ml(o),s.delete(k),i.delete(k)}Fs(()=>[t.include,t.exclude],([k,C])=>{k&&R(N=>Di(k,N)),C&&R(N=>!Di(C,N))},{flush:"post",deep:!0});let D=null;const F=()=>{D!=null&&(ql(n.subTree.type)?ot(()=>{s.set(D,da(n.subTree))},n.subTree.suspense):s.set(D,da(n.subTree)))};return si(F),Ec(F),Tc(()=>{s.forEach(k=>{const{subTree:C,suspense:N}=n,x=da(C);if(k.type===x.type&&k.key===x.key){ml(x);const V=x.component.da;V&&ot(V,N);return}T(k)})}),()=>{if(D=null,!e.default)return null;const k=e.default(),C=k[0];if(k.length>1)return o=null,k;if(!Tr(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return o=null,C;let N=da(C);const x=N.type,V=nu(Hr(N)?N.type.__asyncResolved||{}:x),{include:b,exclude:v,max:m}=t;if(b&&(!V||!Di(b,V))||v&&V&&Di(v,V))return o=N,C;const y=N.key==null?x:N.key,w=s.get(y);return N.el&&(N=wn(N),C.shapeFlag&128&&(C.ssContent=N)),D=y,w?(N.el=w.el,N.component=w.component,N.transition&&Er(N,N.transition),N.shapeFlag|=512,i.delete(y),i.add(y)):(i.add(y),m&&i.size>parseInt(m,10)&&P(i.values().next().value)),N.shapeFlag|=256,o=N,ql(C.type)?C:N}}},aI=oI;function Di(t,e){return se(t)?t.some(n=>Di(n,e)):$e(t)?t.split(",").includes(e):sT(t)?t.test(e):!1}function Lm(t,e){Fm(t,"a",e)}function xm(t,e){Fm(t,"da",e)}function Fm(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)So(s.parent.vnode)&&cI(r,e,n,s),s=s.parent}}function cI(t,e,n,r){const s=vc(e,t,r,!0);wc(()=>{Du(r[e],s)},n)}function ml(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function da(t){return t.shapeFlag&128?t.ssContent:t}const or=Symbol("_leaveCb"),fa=Symbol("_enterCb");function eh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return si(()=>{t.isMounted=!0}),Tc(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],th={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},Um=t=>{const e=t.subTree;return e.component?Um(e.component):e},lI={name:"BaseTransition",props:th,setup(t,{slots:e}){const n=Kn(),r=eh();return()=>{const s=e.default&&Ic(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==ct){i=g;break}}const o=Ie(t),{mode:c}=o;if(r.isLeaving)return _l(i);const l=_f(i);if(!l)return _l(i);let u=Ks(l,o,r,n,g=>u=g);Er(l,u);const d=n.subTree,p=d&&_f(d);if(p&&p.type!==ct&&!rn(l,p)&&Um(n).type!==ct){const g=Ks(p,o,r,n);if(Er(p,g),c==="out-in"&&l.type!==ct)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},_l(i);c==="in-out"&&l.type!==ct&&(g.delayLeave=(T,R,P)=>{const D=$m(r,p);D[String(p.key)]=p,T[or]=()=>{R(),T[or]=void 0,delete u.delayedLeave},u.delayedLeave=P})}return i}}},Bm=lI;function $m(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ks(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:T,onAfterLeave:R,onLeaveCancelled:P,onBeforeAppear:D,onAppear:F,onAfterAppear:k,onAppearCancelled:C}=e,N=String(t.key),x=$m(n,t),V=(m,y)=>{m&&Bt(m,r,9,y)},b=(m,y)=>{const w=y[1];V(m,y),se(m)?m.every(I=>I.length<=1)&&w():m.length<=1&&w()},v={mode:o,persisted:c,beforeEnter(m){let y=l;if(!n.isMounted)if(i)y=D||l;else return;m[or]&&m[or](!0);const w=x[N];w&&rn(t,w)&&w.el[or]&&w.el[or](),V(y,[m])},enter(m){let y=u,w=d,I=p;if(!n.isMounted)if(i)y=F||u,w=k||d,I=C||p;else return;let E=!1;const de=m[fa]=ye=>{E||(E=!0,ye?V(I,[m]):V(w,[m]),v.delayedLeave&&v.delayedLeave(),m[fa]=void 0)};y?b(y,[m,de]):de()},leave(m,y){const w=String(t.key);if(m[fa]&&m[fa](!0),n.isUnmounting)return y();V(g,[m]);let I=!1;const E=m[or]=de=>{I||(I=!0,y(),de?V(P,[m]):V(R,[m]),m[or]=void 0,x[w]===t&&delete x[w])};x[w]=t,T?b(T,[m,E]):E()},clone(m){const y=Ks(m,e,n,r,s);return s&&s(y),y}};return v}function _l(t){if(So(t))return t=wn(t),t.children=null,t}function _f(t){if(!So(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Er(t,e){t.shapeFlag&6&&t.component?Er(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ic(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===We?(o.patchFlag&128&&s++,r=r.concat(Ic(o.children,e,c))):(e||o.type!==ct)&&r.push(c!=null?wn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const uI=t=>t.__isTeleport,ji=t=>t&&(t.disabled||t.disabled===""),yf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,vf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Yl=(t,e)=>{const n=t&&t.to;return $e(n)?e?e(n):null:n},hI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:d,pc:p,pbc:g,o:{insert:T,querySelector:R,createText:P,createComment:D}}=u,F=ji(e.props);let{shapeFlag:k,children:C,dynamicChildren:N}=e;if(t==null){const x=e.el=P(""),V=e.anchor=P("");T(x,n,r),T(V,n,r);const b=e.target=Yl(e.props,R),v=e.targetAnchor=P("");b&&(T(v,b),o==="svg"||yf(b)?o="svg":(o==="mathml"||vf(b))&&(o="mathml"));const m=(y,w)=>{k&16&&d(C,y,w,s,i,o,c,l)};F?m(n,V):b&&m(b,v)}else{e.el=t.el;const x=e.anchor=t.anchor,V=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=ji(t.props),m=v?n:V,y=v?x:b;if(o==="svg"||yf(V)?o="svg":(o==="mathml"||vf(V))&&(o="mathml"),N?(g(t.dynamicChildren,N,m,s,i,o,c),Zu(t,e,!0)):l||p(t,e,m,y,s,i,o,c,!1),F)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):pa(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const w=e.target=Yl(e.props,R);w&&pa(e,w,null,u,0)}else v&&pa(e,V,b,u,1)}jm(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:d,target:p,props:g}=t;if(p&&i(d),o&&i(u),c&16){const T=o||!ji(g);for(let R=0;R<l.length;R++){const P=l[R];s(P,e,n,T,!!P.dynamicChildren)}}},move:pa,hydrate:dI};function pa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||ji(d))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function dI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const d=e.target=Yl(e.props,l);if(d){const p=d._lpa||d.firstChild;if(e.shapeFlag&16)if(ji(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let g=p;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,d,n,r,s,i)}jm(e)}return e.anchor&&o(e.anchor)}const fI=hI;function jm(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const We=Symbol.for("v-fgt"),zr=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Kr=Symbol.for("v-stc"),qi=[];let Ot=null;function Se(t=!1){qi.push(Ot=t?null:[])}function qm(){qi.pop(),Ot=qi[qi.length-1]||null}let Qr=1;function Jl(t){Qr+=t}function Hm(t){return t.dynamicChildren=Qr>0?Ot||Ss:null,qm(),Qr>0&&Ot&&Ot.push(t),t}function Be(t,e,n,r,s,i){return Hm(B(t,e,n,r,s,i,!0))}function Wr(t,e,n,r,s){return Hm(Pe(t,e,n,r,s,!0))}function Tr(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}function pI(t){}const Km=({key:t})=>t??null,wa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Ye(t)||fe(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Km(e),ref:e&&wa(e),scopeId:yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rt};return c?(nh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Qr>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const Pe=gI;function gI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===im)&&(t=ct),Tr(t)){const c=wn(t,e,!0);return n&&nh(c,n),Qr>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(wI(t)&&(t=t.__vccOpts),e){e=Wm(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=xt(c)),Ve(l)&&(ju(l)&&!se(l)&&(l=Ue({},l)),e.style=wo(l))}const o=$e(t)?1:ql(t)?128:uI(t)?64:Ve(t)?4:fe(t)?2:0;return B(t,e,n,r,s,o,i,!0)}function Wm(t){return t?ju(t)||Em(t)?Ue({},t):t:null}function wn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?zm(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Km(u),ref:e&&e.ref?n&&i?se(i)?i.concat(wa(e)):[i,wa(e)]:wa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wn(t.ssContent),ssFallback:t.ssFallback&&wn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Er(d,l.clone(d)),d}function gr(t=" ",e=0){return Pe(zr,null,t,e)}function Gm(t,e){const n=Pe(Kr,null,t);return n.staticCount=e,n}function On(t="",e=!1){return e?(Se(),Wr(ct,null,t)):Pe(ct,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Pe(ct):se(t)?Pe(We,null,t.slice()):typeof t=="object"?ar(t):Pe(zr,null,String(t))}function ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wn(t)}function nh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Em(e)?e._ctx=rt:s===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),r&64?(n=16,e=[gr(e)]):n=8);t.children=e,t.shapeFlag|=n}function zm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xt([e.class,r.class]));else if(s==="style")e.style=wo([e.style,r.style]);else if(Eo(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ct(t,e,n,r=null){Bt(t,e,7,[n,r])}const mI=_m();let _I=0;function Qm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mI,i={uid:_I++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wm(r,s),emitsOptions:rm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cw.bind(null,i),t.ce&&t.ce(i),i}let nt=null;const Kn=()=>nt||rt;let ja,Xl;{const t=Pg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ja=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),Xl=e("__VUE_SSR_SETTERS__",n=>Co=n)}const Yr=t=>{const e=nt;return ja(t),t.scope.on(),()=>{t.scope.off(),ja(e)}},Zl=()=>{nt&&nt.scope.off(),ja(null)};function Ym(t){return t.vnode.shapeFlag&4}let Co=!1;function Jm(t,e=!1){e&&Xl(e);const{props:n,children:r}=t.vnode,s=Ym(t);Qw(t,n,s,e),Xw(t,r);const i=s?yI(t,e):void 0;return e&&Xl(!1),i}function yI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Zm(t):null,i=Yr(t);Rr();const o=Ln(r,t,0,[t.props,s]);if(Sr(),i(),Vu(o)){if(o.then(Zl,Zl),e)return o.then(c=>{eu(t,c,e)}).catch(c=>{as(c,t,0)});t.asyncDep=o}else eu(t,o,e)}else Xm(t,e)}function eu(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Ku(e)),Xm(t,n)}let qa,tu;function vI(t){qa=t,tu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Sw))}}const EI=()=>!qa;function Xm(t,e,n){const r=t.type;if(!t.render){if(!e&&qa&&!r.render){const s=r.template||Ju(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Ue(Ue({isCustomElement:i,delimiters:c},o),l);r.render=qa(s,u)}}t.render=r.render||kt,tu&&tu(t)}{const s=Yr(t);Rr();try{$w(t)}finally{Sr(),s()}}}const TI={get(t,e){return Dt(t,"get",""),t[e]}};function Zm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TI),slots:t.slots,emit:t.emit,expose:e}}function Po(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ku(Gg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $i)return $i[n](t)},has(e,n){return n in e||n in $i}})):t.proxy}function nu(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function wI(t){return fe(t)&&"__vccOpts"in t}const Qt=(t,e)=>qT(t,e,Co);function II(t,e,n=Ne){const r=Kn(),s=St(e),i=Ut(e),o=Jg((l,u)=>{let d;return Vm(()=>{const p=t[e];cn(d,p)&&(d=p,u())}),{get(){return l(),n.get?n.get(d):d},set(p){const g=r.vnode.props;!(g&&(e in g||s in g||i in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g))&&cn(p,d)&&(d=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function Ac(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!se(e)?Tr(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),Pe(t,e,n))}function AI(){}function bI(t,e,n,r){const s=n[r];if(s&&e_(s,t))return s;const i=e();return i.memo=t.slice(),i.memoIndex=r,n[r]=i}function e_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(cn(n[r],e[r]))return!1;return Qr>0&&Ot&&Ot.push(t),!0}const t_="3.4.29",RI=kt,SI=rw,CI=Es,PI=nm,kI={createComponentInstance:Qm,setupComponent:Jm,renderComponentRoot:Ta,setCurrentRenderingInstance:so,isVNode:Tr,normalizeVNode:Ft,getComponentPublicInstance:Po},OI=kI,NI=null,DI=null,VI=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const MI="http://www.w3.org/2000/svg",LI="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Ef=Pn&&Pn.createElement("template"),xI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(MI,t):e==="mathml"?Pn.createElementNS(LI,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ef.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Ef.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",Ci="animation",Ws=Symbol("_vtc"),bc=(t,{slots:e})=>Ac(Bm,r_(t),e);bc.displayName="Transition";const n_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},FI=bc.props=Ue({},th,n_),Mr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Tf=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function r_(t){const e={};for(const I in t)I in n_||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,R=UI(s),P=R&&R[0],D=R&&R[1],{onBeforeEnter:F,onEnter:k,onEnterCancelled:C,onLeave:N,onLeaveCancelled:x,onBeforeAppear:V=F,onAppear:b=k,onAppearCancelled:v=C}=e,m=(I,E,de)=>{sr(I,E?d:c),sr(I,E?u:o),de&&de()},y=(I,E)=>{I._isLeaving=!1,sr(I,p),sr(I,T),sr(I,g),E&&E()},w=I=>(E,de)=>{const ye=I?b:k,z=()=>m(E,I,de);Mr(ye,[E,z]),wf(()=>{sr(E,I?l:i),Cn(E,I?d:c),Tf(ye)||If(E,r,P,z)})};return Ue(e,{onBeforeEnter(I){Mr(F,[I]),Cn(I,i),Cn(I,o)},onBeforeAppear(I){Mr(V,[I]),Cn(I,l),Cn(I,u)},onEnter:w(!1),onAppear:w(!0),onLeave(I,E){I._isLeaving=!0;const de=()=>y(I,E);Cn(I,p),Cn(I,g),i_(),wf(()=>{I._isLeaving&&(sr(I,p),Cn(I,T),Tf(N)||If(I,r,D,de))}),Mr(N,[I,de])},onEnterCancelled(I){m(I,!1),Mr(C,[I])},onAppearCancelled(I){m(I,!0),Mr(v,[I])},onLeaveCancelled(I){y(I),Mr(x,[I])}})}function UI(t){if(t==null)return null;if(Ve(t))return[yl(t.enter),yl(t.leave)];{const e=yl(t);return[e,e]}}function yl(t){return Ma(t)}function Cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ws]||(t[Ws]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ws];n&&(n.delete(e),n.size||(t[Ws]=void 0))}function wf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let BI=0;function If(t,e,n,r){const s=t._endId=++BI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=s_(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=T=>{T.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(u,g)}function s_(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${tr}Delay`),i=r(`${tr}Duration`),o=Af(s,i),c=r(`${Ci}Delay`),l=r(`${Ci}Duration`),u=Af(c,l);let d=null,p=0,g=0;e===tr?o>0&&(d=tr,p=o,g=i.length):e===Ci?u>0&&(d=Ci,p=u,g=l.length):(p=Math.max(o,u),d=p>0?o>u?tr:Ci:null,g=d?d===tr?i.length:l.length:0);const T=d===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:T}}function Af(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>bf(n)+bf(t[r])))}function bf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function i_(){return document.body.offsetHeight}function $I(t,e,n){const r=t[Ws];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ha=Symbol("_vod"),o_=Symbol("_vsh"),a_={beforeMount(t,{value:e},{transition:n}){t[Ha]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Pi(t,!0),r.enter(t)):r.leave(t,()=>{Pi(t,!1)}):Pi(t,e))},beforeUnmount(t,{value:e}){Pi(t,e)}};function Pi(t,e){t.style.display=e?t[Ha]:"none",t[o_]=!e}function jI(){a_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const c_=Symbol("");function qI(t){const e=Kn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>su(i,s))},r=()=>{const s=t(e.proxy);ru(e.subTree,s),n(s)};si(()=>{Dm(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),wc(()=>s.disconnect())})}function ru(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ru(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)su(t.el,e);else if(t.type===We)t.children.forEach(n=>ru(n,e));else if(t.type===Kr){let{el:n,anchor:r}=t;for(;n&&(su(n,e),n!==r);)n=n.nextSibling}}function su(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[c_]=r}}const HI=/(^|;)\s*display\s*:/;function KI(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ia(r,c,"")}else for(const o in e)n[o]==null&&Ia(r,o,"");for(const o in n)o==="display"&&(i=!0),Ia(r,o,n[o])}else if(s){if(e!==n){const o=r[c_];o&&(n+=";"+o),r.cssText=n,i=HI.test(n)}}else e&&t.removeAttribute("style");Ha in t&&(t[Ha]=i?r.display:"",t[o_]&&(r.display="none"))}const Rf=/\s*!important$/;function Ia(t,e,n){if(se(n))n.forEach(r=>Ia(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=WI(t,e);Rf.test(n)?t.setProperty(Ut(r),n.replace(Rf,""),"important"):t[r]=n}}const Sf=["Webkit","Moz","ms"],vl={};function WI(t,e){const n=vl[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return vl[e]=r;r=To(r);for(let s=0;s<Sf.length;s++){const i=Sf[s]+r;if(i in t)return vl[e]=i}return e}const Cf="http://www.w3.org/1999/xlink";function Pf(t,e,n,r,s,i=mT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cf,e.slice(6,e.length)):t.setAttributeNS(Cf,e,n):n==null||i&&!kg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function GI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=kg(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function kn(t,e,n,r){t.addEventListener(e,n,r)}function zI(t,e,n,r){t.removeEventListener(e,n,r)}const kf=Symbol("_vei");function QI(t,e,n,r,s=null){const i=t[kf]||(t[kf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=YI(e);if(r){const u=i[e]=ZI(r,s);kn(t,c,u,l)}else o&&(zI(t,c,o,l),i[e]=void 0)}}const Of=/(?:Once|Passive|Capture)$/;function YI(t){let e;if(Of.test(t)){e={};let r;for(;r=t.match(Of);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ut(t.slice(2)),e]}let El=0;const JI=Promise.resolve(),XI=()=>El||(JI.then(()=>El=0),El=Date.now());function ZI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(eA(r,n.value),e,5,[r])};return n.value=t,n.attached=XI(),n}function eA(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tA=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?$I(t,r,u):e==="style"?KI(t,n,r):Eo(e)?Nu(e)||QI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nA(t,e,r,u))?(GI(t,e,r,i,o,c,l),(e==="value"||e==="checked"||e==="selected")&&Pf(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Pf(t,e,r,u))};function nA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nf(e)&&$e(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function l_(t,e,n){const r=bo(t,e);class s extends Rc{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const rA=(t,e)=>l_(t,e,E_),sA=typeof HTMLElement<"u"?HTMLElement:class{};class Rc extends sA{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Ao(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),iu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!se(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=Ma(this._props[l])),(c||(c=Object.create(null)))[St(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=se(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(St))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=St(e);this._numberProps&&this._numberProps[r]&&(n=Ma(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Ut(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ut(e),n+""):n||this.removeAttribute(Ut(e))))}_update(){iu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Pe(this._def,Ue({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Ut(i)!==i&&r(Ut(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Rc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function iA(t="$style"){{const e=Kn();if(!e)return Ne;const n=e.type.__cssModules;if(!n)return Ne;const r=n[t];return r||Ne}}const u_=new WeakMap,h_=new WeakMap,Ka=Symbol("_moveCb"),Df=Symbol("_enterCb"),d_={name:"TransitionGroup",props:Ue({},FI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Kn(),r=eh();let s,i;return Ec(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!hA(s[0].el,n.vnode.el,o))return;s.forEach(cA),s.forEach(lA);const c=s.filter(uA);i_(),c.forEach(l=>{const u=l.el,d=u.style;Cn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Ka]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Ka]=null,sr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Ie(t),c=r_(o);let l=o.tag||We;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Er(d,Ks(d,c,r,n)),u_.set(d,d.el.getBoundingClientRect()))}i=e.default?Ic(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Er(d,Ks(d,c,r,n))}return Pe(l,null,i)}}},oA=t=>delete t.mode;d_.props;const aA=d_;function cA(t){const e=t.el;e[Ka]&&e[Ka](),e[Df]&&e[Df]()}function lA(t){h_.set(t,t.el.getBoundingClientRect())}function uA(t){const e=u_.get(t),n=h_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function hA(t,e,n){const r=t.cloneNode(),s=t[Ws];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=s_(r);return i.removeChild(r),o}const wr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>ks(e,n):e};function dA(t){t.target.composing=!0}function Vf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jt=Symbol("_assign"),Xt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Jt]=wr(s);const i=r||s.props&&s.props.type==="number";kn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Va(c)),t[Jt](c)}),n&&kn(t,"change",()=>{t.value=t.value.trim()}),e||(kn(t,"compositionstart",dA),kn(t,"compositionend",Vf),kn(t,"change",Vf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Jt]=wr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Va(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},rh={deep:!0,created(t,e,n){t[Jt]=wr(n),kn(t,"change",()=>{const r=t._modelValue,s=Gs(t),i=t.checked,o=t[Jt];if(se(r)){const c=dc(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(os(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(p_(t,i))})},mounted:Mf,beforeUpdate(t,e,n){t[Jt]=wr(n),Mf(t,e,n)}};function Mf(t,{value:e,oldValue:n},r){t._modelValue=e,se(e)?t.checked=dc(e,r.props.value)>-1:os(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=vr(e,p_(t,!0)))}const sh={created(t,{value:e},n){t.checked=vr(e,n.props.value),t[Jt]=wr(n),kn(t,"change",()=>{t[Jt](Gs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Jt]=wr(r),e!==n&&(t.checked=vr(e,r.props.value))}},f_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=os(e);kn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Va(Gs(o)):Gs(o));t[Jt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ao(()=>{t._assigning=!1})}),t[Jt]=wr(r)},mounted(t,{value:e,modifiers:{number:n}}){Lf(t,e)},beforeUpdate(t,e,n){t[Jt]=wr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Lf(t,e)}};function Lf(t,e,n){const r=t.multiple,s=se(e);if(!(r&&!s&&!os(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Gs(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=dc(e,l)>-1}else c.selected=e.has(l);else if(vr(Gs(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Gs(t){return"_value"in t?t._value:t.value}function p_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const g_={created(t,e,n){ga(t,e,n,null,"created")},mounted(t,e,n){ga(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ga(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ga(t,e,n,r,"updated")}};function m_(t,e){switch(t){case"SELECT":return f_;case"TEXTAREA":return Xt;default:switch(e){case"checkbox":return rh;case"radio":return sh;default:return Xt}}}function ga(t,e,n,r,s){const o=m_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function fA(){Xt.getSSRProps=({value:t})=>({value:t}),sh.getSSRProps=({value:t},e)=>{if(e.props&&vr(e.props.value,t))return{checked:!0}},rh.getSSRProps=({value:t},e)=>{if(se(t)){if(e.props&&dc(t,e.props.value)>-1)return{checked:!0}}else if(os(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},g_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=m_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const pA=["ctrl","shift","alt","meta"],gA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pA.some(n=>t[`${n}Key`]&&!e.includes(n))},mA=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=gA[e[o]];if(c&&c(s,e))return}return t(s,...i)})},_A={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ih=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Ut(s.key);if(e.some(o=>o===i||_A[o]===i))return t(s)})},__=Ue({patchProp:tA},xI);let Hi,xf=!1;function y_(){return Hi||(Hi=Rm(__))}function v_(){return Hi=xf?Hi:Sm(__),xf=!0,Hi}const iu=(...t)=>{y_().render(...t)},E_=(...t)=>{v_().hydrate(...t)},T_=(...t)=>{const e=y_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=I_(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,w_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},yA=(...t)=>{const e=v_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=I_(r);if(s)return n(s,!0,w_(s))},e};function w_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function I_(t){return $e(t)?document.querySelector(t):t}let Ff=!1;const vA=()=>{Ff||(Ff=!0,fA(),jI())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const EA=()=>{},TA=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Bm,BaseTransitionPropsValidators:th,Comment:ct,DeprecationTypes:VI,EffectScope:Lu,ErrorCodes:nw,ErrorTypeStrings:SI,Fragment:We,KeepAlive:aI,ReactiveEffect:qs,Static:Kr,Suspense:_w,Teleport:fI,Text:zr,TrackOpTypes:ZT,Transition:bc,TransitionGroup:aA,TriggerOpTypes:ew,VueElement:Rc,assertNumber:tw,callWithAsyncErrorHandling:Bt,callWithErrorHandling:Ln,camelize:St,capitalize:To,cloneVNode:wn,compatUtils:DI,compile:EA,computed:Qt,createApp:T_,createBlock:Wr,createCommentVNode:On,createElementBlock:Be,createElementVNode:B,createHydrationRenderer:Sm,createPropsRestProxy:Uw,createRenderer:Rm,createSSRApp:yA,createSlots:Iw,createStaticVNode:Gm,createTextVNode:gr,createVNode:Pe,customRef:Jg,defineAsyncComponent:Aw,defineComponent:bo,defineCustomElement:l_,defineEmits:Pw,defineExpose:kw,defineModel:Dw,defineOptions:Ow,defineProps:Cw,defineSSRCustomElement:rA,defineSlots:Nw,devtools:CI,effect:TT,effectScope:yT,getCurrentInstance:Kn,getCurrentScope:Dg,getTransitionRawChildren:Ic,guardReactiveProps:Wm,h:Ac,handleError:as,hasInjectionContext:zw,hydrate:E_,initCustomFormatter:AI,initDirectivesForSSR:vA,inject:$t,isMemoSame:e_,isProxy:ju,isReactive:Os,isReadonly:Hs,isRef:Ye,isRuntimeOnly:EI,isShallow:eo,isVNode:Tr,markRaw:Gg,mergeDefaults:xw,mergeModels:Fw,mergeProps:zm,nextTick:Ao,normalizeClass:xt,normalizeProps:pT,normalizeStyle:wo,onActivated:Lm,onBeforeMount:cm,onBeforeUnmount:Tc,onBeforeUpdate:lm,onDeactivated:xm,onErrorCaptured:fm,onMounted:si,onRenderTracked:dm,onRenderTriggered:hm,onScopeDispose:vT,onServerPrefetch:um,onUnmounted:wc,onUpdated:Ec,openBlock:Se,popScopeId:Pr,provide:xs,proxyRefs:Ku,pushScopeId:Cr,queuePostFlushCb:xa,reactive:Io,readonly:$u,ref:Qe,registerRuntimeCompiler:vI,render:iu,renderList:Ms,renderSlot:bw,resolveComponent:sm,resolveDirective:gw,resolveDynamicComponent:om,resolveFilter:NI,resolveTransitionHooks:Ks,setBlockTracking:Jl,setDevtoolsHook:PI,setTransitionHooks:Er,shallowReactive:Bu,shallowReadonly:jT,shallowRef:Qg,ssrContextKey:Om,ssrUtils:OI,stop:wT,toDisplayString:tt,toHandlerKey:Bi,toHandlers:Rw,toRaw:Ie,toRef:XT,toRefs:QT,toValue:WT,transformVNodeArgs:pI,triggerRef:KT,unref:wt,useAttrs:Lw,useCssModule:iA,useCssVars:qI,useModel:II,useSSRContext:Nm,useSlots:Mw,useTransitionState:eh,vModelCheckbox:rh,vModelDynamic:g_,vModelRadio:sh,vModelSelect:f_,vModelText:Xt,vShow:a_,version:t_,warn:RI,watch:Fs,watchEffect:sI,watchPostEffect:Dm,watchSyncEffect:Vm,withAsyncContext:Bw,withCtx:_n,withDefaults:Vw,withDirectives:xn,withKeys:ih,withMemo:bI,withModifiers:mA,withScopeId:lw},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ts=typeof document<"u";function wA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Tl(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const Ki=()=>{},ln=Array.isArray,A_=/#/g,IA=/&/g,AA=/\//g,bA=/=/g,RA=/\?/g,b_=/\+/g,SA=/%5B/g,CA=/%5D/g,R_=/%5E/g,PA=/%60/g,S_=/%7B/g,kA=/%7C/g,C_=/%7D/g,OA=/%20/g;function oh(t){return encodeURI(""+t).replace(kA,"|").replace(SA,"[").replace(CA,"]")}function NA(t){return oh(t).replace(S_,"{").replace(C_,"}").replace(R_,"^")}function ou(t){return oh(t).replace(b_,"%2B").replace(OA,"+").replace(A_,"%23").replace(IA,"%26").replace(PA,"`").replace(S_,"{").replace(C_,"}").replace(R_,"^")}function DA(t){return ou(t).replace(bA,"%3D")}function VA(t){return oh(t).replace(A_,"%23").replace(RA,"%3F")}function MA(t){return t==null?"":VA(t).replace(AA,"%2F")}function ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const LA=/\/$/,xA=t=>t.replace(LA,"");function wl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=$A(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ao(o)}}function FA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zs(e.matched[r],n.matched[s])&&P_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function P_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BA(t[n],e[n]))return!1;return!0}function BA(t,e){return ln(t)?Bf(t,e):ln(e)?Bf(e,t):t===e}function Bf(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $A(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var co;(function(t){t.pop="pop",t.push="push"})(co||(co={}));var Wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wi||(Wi={}));function jA(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xA(t)}const qA=/^[^#]+#/;function HA(t,e){return t.replace(qA,"#")+e}function KA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Sc=()=>({left:window.scrollX,top:window.scrollY});function WA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=KA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $f(t,e){return(history.state?history.state.position-e:-1)+t}const au=new Map;function GA(t,e){au.set(t,e)}function zA(t){const e=au.get(t);return au.delete(t),e}let QA=()=>location.protocol+"//"+location.host;function k_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Uf(l,"")}return Uf(n,t)+r+s}function YA(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const T=k_(t,location),R=n.value,P=e.value;let D=0;if(g){if(n.value=T,e.value=g,o&&o===R){o=null;return}D=P?g.position-P.position:0}else r(T);s.forEach(F=>{F(n.value,R,{delta:D,type:co.pop,direction:D?D>0?Wi.forward:Wi.back:Wi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const T=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(T),T}function d(){const{history:g}=window;g.state&&g.replaceState(Oe({},g.state,{scroll:Sc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function jf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Sc():null}}function JA(t){const{history:e,location:n}=window,r={value:k_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:QA()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(T){console.error(T),n[d?"replace":"assign"](g)}}function o(l,u){const d=Oe({},e.state,jf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=Oe({},s.value,e.state,{forward:l,scroll:Sc()});i(d.current,d,!0);const p=Oe({},jf(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function XA(t){t=jA(t);const e=JA(t),n=YA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:HA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ZA(t){return typeof t=="string"||t&&typeof t=="object"}function O_(t){return typeof t=="string"||typeof t=="symbol"}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},N_=Symbol("");var qf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qf||(qf={}));function Qs(t,e){return Oe(new Error,{type:t,[N_]:!0},e)}function Sn(t,e){return t instanceof Error&&N_ in t&&(e==null||!!(t.type&e))}const Hf="[^/]+?",eb={sensitive:!1,strict:!1,start:!0,end:!0},tb=/[.+*?^${}()[\]/\\]/g;function nb(t,e){const n=Oe({},eb,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let T=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(tb,"\\$&"),T+=40;else if(g.type===1){const{value:R,repeatable:P,optional:D,regexp:F}=g;i.push({name:R,repeatable:P,optional:D});const k=F||Hf;if(k!==Hf){T+=10;try{new RegExp(`(${k})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+N.message)}}let C=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;p||(C=D&&u.length<2?`(?:/${C})`:"/"+C),D&&(C+="?"),s+=C,T+=20,D&&(T+=-8),P&&(T+=-20),k===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const T=d[g]||"",R=i[g-1];p[R.name]=T&&R.repeatable?T.split("/"):T}return p}function l(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of g)if(T.type===0)d+=T.value;else if(T.type===1){const{value:R,repeatable:P,optional:D}=T,F=R in u?u[R]:"";if(ln(F)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=ln(F)?F.join("/"):F;if(!k)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=k}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function rb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function D_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Kf(r))return 1;if(Kf(s))return-1}return s.length-r.length}function Kf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sb={type:0,value:""},ib=/[a-zA-Z0-9_]/;function ob(t){if(!t)return[[]];if(t==="/")return[[sb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${u}": ${T}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:ib.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function ab(t,e,n){const r=nb(ob(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cb(t,e){const n=[],r=new Map;e=zf({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const T=!g,R=lb(d);R.aliasOf=g&&g.record;const P=zf(e,d),D=[R];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const N of C)D.push(Oe({},R,{components:g?g.record.components:R.components,path:N,aliasOf:g?g.record:R}))}let F,k;for(const C of D){const{path:N}=C;if(p&&N[0]!=="/"){const x=p.record.path,V=x[x.length-1]==="/"?"":"/";C.path=p.record.path+(N&&V+N)}if(F=ab(C,p,P),g?g.alias.push(F):(k=k||F,k!==F&&k.alias.push(F),T&&d.name&&!Gf(F)&&o(d.name)),V_(F)&&l(F),R.children){const x=R.children;for(let V=0;V<x.length;V++)i(x[V],F,g&&g.children[V])}g=g||F}return k?()=>{o(k)}:Ki}function o(d){if(O_(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const p=db(d,n);n.splice(p,0,d),d.record.name&&!Gf(d)&&r.set(d.record.name,d)}function u(d,p){let g,T={},R,P;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Qs(1,{location:d});P=g.record.name,T=Oe(Wf(p.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),d.params&&Wf(d.params,g.keys.map(k=>k.name))),R=g.stringify(T)}else if(d.path!=null)R=d.path,g=n.find(k=>k.re.test(R)),g&&(T=g.parse(R),P=g.record.name);else{if(g=p.name?r.get(p.name):n.find(k=>k.re.test(p.path)),!g)throw Qs(1,{location:d,currentLocation:p});P=g.record.name,T=Oe({},p.params,d.params),R=g.stringify(T)}const D=[];let F=g;for(;F;)D.unshift(F.record),F=F.parent;return{name:P,path:R,params:T,matched:D,meta:hb(D)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Wf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ub(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ub(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hb(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function zf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function db(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;D_(t,e[i])<0?r=i:n=i+1}const s=fb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function fb(t){let e=t;for(;e=e.parent;)if(V_(e)&&D_(t,e)===0)return e}function V_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(b_," "),o=i.indexOf("="),c=ao(o<0?i:i.slice(0,o)),l=o<0?null:ao(i.slice(o+1));if(c in e){let u=e[c];ln(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Qf(t){let e="";for(let n in t){const r=t[n];if(n=DA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(i=>i&&ou(i)):[r&&ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mb=Symbol(""),Yf=Symbol(""),Cc=Symbol(""),ah=Symbol(""),cu=Symbol("");function ki(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Qs(4,{from:n,to:e})):g instanceof Error?l(g):ZA(g)?l(Qs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Il(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(_b(l)){const d=(l.__vccOpts||l)[e];d&&i.push(cr(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=wA(d)?d.default:d;o.components[c]=p;const T=(p.__vccOpts||p)[e];return T&&cr(T,n,r,o,c,s)()}))}}return i}function _b(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jf(t){const e=$t(Cc),n=$t(ah),r=Qt(()=>{const l=wt(t.to);return e.resolve(l)}),s=Qt(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(zs.bind(null,d));if(g>-1)return g;const T=Xf(l[u-2]);return u>1&&Xf(d)===T&&p[p.length-1].path!==T?p.findIndex(zs.bind(null,l[u-2])):g}),i=Qt(()=>s.value>-1&&Eb(n.params,r.value.params)),o=Qt(()=>s.value>-1&&s.value===n.matched.length-1&&P_(n.params,r.value.params));function c(l={}){return vb(l)?e[wt(t.replace)?"replace":"push"](wt(t.to)).catch(Ki):Promise.resolve()}return{route:r,href:Qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const yb=bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jf,setup(t,{slots:e}){const n=Io(Jf(t)),{options:r}=$t(Cc),s=Qt(()=>({[Zf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ac("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),M_=yb;function vb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Eb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zf=(t,e,n)=>t??e??n,Tb=bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(cu),s=Qt(()=>t.route||r.value),i=$t(Yf,0),o=Qt(()=>{let u=wt(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=Qt(()=>s.value.matched[o.value]);xs(Yf,Qt(()=>o.value+1)),xs(mb,c),xs(cu,s);const l=Qe();return Fs(()=>[l.value,c.value,t.name],([u,d,p],[g,T,R])=>{d&&(d.instances[p]=u,T&&T!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),u&&d&&(!T||!zs(d,T)||!g)&&(d.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return ep(n.default,{Component:g,route:u});const T=p.props[d],R=T?T===!0?u.params:typeof T=="function"?T(u):T:null,D=Ac(g,Oe({},R,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return ep(n.default,{Component:D,route:u})||D}}});function ep(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const L_=Tb;function wb(t){const e=cb(t.routes,t),n=t.parseQuery||pb,r=t.stringifyQuery||Qf,s=t.history,i=ki(),o=ki(),c=ki(),l=Qg(nr);let u=nr;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Tl.bind(null,$=>""+$),p=Tl.bind(null,MA),g=Tl.bind(null,ao);function T($,ne){let ee,ie;return O_($)?(ee=e.getRecordMatcher($),ie=ne):ie=$,e.addRoute(ie,ee)}function R($){const ne=e.getRecordMatcher($);ne&&e.removeRoute(ne)}function P(){return e.getRoutes().map($=>$.record)}function D($){return!!e.getRecordMatcher($)}function F($,ne){if(ne=Oe({},ne||l.value),typeof $=="string"){const S=wl(n,$,ne.path),M=e.resolve({path:S.path},ne),j=s.createHref(S.fullPath);return Oe(S,M,{params:g(M.params),hash:ao(S.hash),redirectedFrom:void 0,href:j})}let ee;if($.path!=null)ee=Oe({},$,{path:wl(n,$.path,ne.path).path});else{const S=Oe({},$.params);for(const M in S)S[M]==null&&delete S[M];ee=Oe({},$,{params:p(S)}),ne.params=p(ne.params)}const ie=e.resolve(ee,ne),Ee=$.hash||"";ie.params=d(g(ie.params));const De=FA(r,Oe({},$,{hash:NA(Ee),path:ie.path})),A=s.createHref(De);return Oe({fullPath:De,hash:Ee,query:r===Qf?gb($.query):$.query||{}},ie,{redirectedFrom:void 0,href:A})}function k($){return typeof $=="string"?wl(n,$,l.value.path):Oe({},$)}function C($,ne){if(u!==$)return Qs(8,{from:ne,to:$})}function N($){return b($)}function x($){return N(Oe(k($),{replace:!0}))}function V($){const ne=$.matched[$.matched.length-1];if(ne&&ne.redirect){const{redirect:ee}=ne;let ie=typeof ee=="function"?ee($):ee;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=k(ie):{path:ie},ie.params={}),Oe({query:$.query,hash:$.hash,params:ie.path!=null?{}:$.params},ie)}}function b($,ne){const ee=u=F($),ie=l.value,Ee=$.state,De=$.force,A=$.replace===!0,S=V(ee);if(S)return b(Oe(k(S),{state:typeof S=="object"?Oe({},Ee,S.state):Ee,force:De,replace:A}),ne||ee);const M=ee;M.redirectedFrom=ne;let j;return!De&&UA(r,ie,ee)&&(j=Qs(16,{to:M,from:ie}),Ht(ie,ie,!0,!1)),(j?Promise.resolve(j):y(M,ie)).catch(U=>Sn(U)?Sn(U,2)?U:tn(U):W(U,M,ie)).then(U=>{if(U){if(Sn(U,2))return b(Oe({replace:A},k(U.to),{state:typeof U.to=="object"?Oe({},Ee,U.to.state):Ee,force:De}),ne||M)}else U=I(M,ie,!0,A,Ee);return w(M,ie,U),U})}function v($,ne){const ee=C($,ne);return ee?Promise.reject(ee):Promise.resolve()}function m($){const ne=Qn.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext($):$()}function y($,ne){let ee;const[ie,Ee,De]=Ib($,ne);ee=Il(ie.reverse(),"beforeRouteLeave",$,ne);for(const S of ie)S.leaveGuards.forEach(M=>{ee.push(cr(M,$,ne))});const A=v.bind(null,$,ne);return ee.push(A),it(ee).then(()=>{ee=[];for(const S of i.list())ee.push(cr(S,$,ne));return ee.push(A),it(ee)}).then(()=>{ee=Il(Ee,"beforeRouteUpdate",$,ne);for(const S of Ee)S.updateGuards.forEach(M=>{ee.push(cr(M,$,ne))});return ee.push(A),it(ee)}).then(()=>{ee=[];for(const S of De)if(S.beforeEnter)if(ln(S.beforeEnter))for(const M of S.beforeEnter)ee.push(cr(M,$,ne));else ee.push(cr(S.beforeEnter,$,ne));return ee.push(A),it(ee)}).then(()=>($.matched.forEach(S=>S.enterCallbacks={}),ee=Il(De,"beforeRouteEnter",$,ne,m),ee.push(A),it(ee))).then(()=>{ee=[];for(const S of o.list())ee.push(cr(S,$,ne));return ee.push(A),it(ee)}).catch(S=>Sn(S,8)?S:Promise.reject(S))}function w($,ne,ee){c.list().forEach(ie=>m(()=>ie($,ne,ee)))}function I($,ne,ee,ie,Ee){const De=C($,ne);if(De)return De;const A=ne===nr,S=Ts?history.state:{};ee&&(ie||A?s.replace($.fullPath,Oe({scroll:A&&S&&S.scroll},Ee)):s.push($.fullPath,Ee)),l.value=$,Ht($,ne,ee,A),tn()}let E;function de(){E||(E=s.listen(($,ne,ee)=>{if(!fn.listening)return;const ie=F($),Ee=V(ie);if(Ee){b(Oe(Ee,{replace:!0}),ie).catch(Ki);return}u=ie;const De=l.value;Ts&&GA($f(De.fullPath,ee.delta),Sc()),y(ie,De).catch(A=>Sn(A,12)?A:Sn(A,2)?(b(A.to,ie).then(S=>{Sn(S,20)&&!ee.delta&&ee.type===co.pop&&s.go(-1,!1)}).catch(Ki),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),W(A,ie,De))).then(A=>{A=A||I(ie,De,!1),A&&(ee.delta&&!Sn(A,8)?s.go(-ee.delta,!1):ee.type===co.pop&&Sn(A,20)&&s.go(-1,!1)),w(ie,De,A)}).catch(Ki)}))}let ye=ki(),z=ki(),Q;function W($,ne,ee){tn($);const ie=z.list();return ie.length?ie.forEach(Ee=>Ee($,ne,ee)):console.error($),Promise.reject($)}function je(){return Q&&l.value!==nr?Promise.resolve():new Promise(($,ne)=>{ye.add([$,ne])})}function tn($){return Q||(Q=!$,de(),ye.list().forEach(([ne,ee])=>$?ee($):ne()),ye.reset()),$}function Ht($,ne,ee,ie){const{scrollBehavior:Ee}=t;if(!Ts||!Ee)return Promise.resolve();const De=!ee&&zA($f($.fullPath,0))||(ie||!ee)&&history.state&&history.state.scroll||null;return Ao().then(()=>Ee($,ne,De)).then(A=>A&&WA(A)).catch(A=>W(A,$,ne))}const qe=$=>s.go($);let He;const Qn=new Set,fn={currentRoute:l,listening:!0,addRoute:T,removeRoute:R,hasRoute:D,getRoutes:P,resolve:F,options:t,push:N,replace:x,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:z.add,isReady:je,install($){const ne=this;$.component("RouterLink",M_),$.component("RouterView",L_),$.config.globalProperties.$router=ne,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>wt(l)}),Ts&&!He&&l.value===nr&&(He=!0,N(s.location).catch(Ee=>{}));const ee={};for(const Ee in nr)Object.defineProperty(ee,Ee,{get:()=>l.value[Ee],enumerable:!0});$.provide(Cc,ne),$.provide(ah,Bu(ee)),$.provide(cu,l);const ie=$.unmount;Qn.add($),$.unmount=function(){Qn.delete($),Qn.size<1&&(u=nr,E&&E(),E=null,l.value=nr,He=!1,Q=!1),ie()}}};function it($){return $.reduce((ne,ee)=>ne.then(()=>m(ee)),Promise.resolve())}return fn}function Ib(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>zs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>zs(u,l))||s.push(l))}return[n,r,s]}function Pc(){return $t(Cc)}function x_(){return $t(ah)}var tp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ab=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},U_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,T=u&63;l||(T=64,o||(g=64)),r.push(n[d],n[p],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ab(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new bb;const g=i<<2|c>>4;if(r.push(g),u!==64){const T=c<<4&240|u>>2;if(r.push(T),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rb=function(t){const e=F_(t);return U_.encodeByteArray(e,!0)},Wa=function(t){return Rb(t).replace(/\./g,"")},B_=function(t){try{return U_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cb=()=>Sb().__FIREBASE_DEFAULTS__,Pb=()=>{if(typeof process>"u"||typeof tp>"u")return;const t=tp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&B_(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return Cb()||Pb()||kb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$_=t=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ob=t=>{const e=$_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},j_=()=>{var t;return(t=kc())===null||t===void 0?void 0:t.config},q_=t=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Db(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wa(JSON.stringify(n)),Wa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Mb(){var t;const e=(t=kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xb(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fb(){return!Mb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K_(){try{return typeof indexedDB=="object"}catch{return!1}}function W_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Ub(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bb,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$b(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dn(s,c,r)}}function $b(t,e){return t.replace(jb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jb=/\{\$([^}]+)}/g;function qb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(np(i)&&np(o)){if(!lo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hb(t,e){const n=new Kb(t,e);return n.subscribe.bind(n)}class Kb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Al),s.error===void 0&&(s.error=Al),s.complete===void 0&&(s.complete=Al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Al(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=1e3,zb=2,Qb=4*60*60*1e3,Yb=.5;function rp(t,e=Gb,n=zb){const r=e*Math.pow(n,t),s=Math.round(Yb*r*(Math.random()-.5)*2);return Math.min(Qb,r+s)}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zb(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xb(t){return t===Lr?void 0:t}function Zb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const t0={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},n0=Te.INFO,r0={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},s0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=r0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=n0,this._logHandler=s0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const i0=(t,e)=>e.some(n=>t instanceof n);let sp,ip;function o0(){return sp||(sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a0(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const G_=new WeakMap,lu=new WeakMap,z_=new WeakMap,bl=new WeakMap,ch=new WeakMap;function c0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&G_.set(n,t)}).catch(()=>{}),ch.set(e,t),e}function l0(t){if(lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lu.set(t,e)}let uu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||z_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function u0(t){uu=t(uu)}function h0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rl(this),e,...n);return z_.set(r,e.sort?e.sort():[e]),mr(r)}:a0().includes(t)?function(...e){return t.apply(Rl(this),e),mr(G_.get(this))}:function(...e){return mr(t.apply(Rl(this),e))}}function d0(t){return typeof t=="function"?h0(t):(t instanceof IDBTransaction&&l0(t),i0(t,o0())?new Proxy(t,uu):t)}function mr(t){if(t instanceof IDBRequest)return c0(t);if(bl.has(t))return bl.get(t);const e=d0(t);return e!==t&&(bl.set(t,e),ch.set(e,t)),e}const Rl=t=>ch.get(t);function Q_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mr(o.result),l.oldVersion,l.newVersion,mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const f0=["get","getKey","getAll","getAllKeys","count"],p0=["put","add","delete","clear"],Sl=new Map;function op(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sl.get(e))return Sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=p0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||f0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Sl.set(e,i),i}u0(t=>({...t,get:(e,n,r)=>op(e,n)||t.get(e,n,r),has:(e,n)=>!!op(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function m0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hu="@firebase/app",ap="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Oc("@firebase/app"),_0="@firebase/app-compat",y0="@firebase/analytics-compat",v0="@firebase/analytics",E0="@firebase/app-check-compat",T0="@firebase/app-check",w0="@firebase/auth",I0="@firebase/auth-compat",A0="@firebase/database",b0="@firebase/database-compat",R0="@firebase/functions",S0="@firebase/functions-compat",C0="@firebase/installations",P0="@firebase/installations-compat",k0="@firebase/messaging",O0="@firebase/messaging-compat",N0="@firebase/performance",D0="@firebase/performance-compat",V0="@firebase/remote-config",M0="@firebase/remote-config-compat",L0="@firebase/storage",x0="@firebase/storage-compat",F0="@firebase/firestore",U0="@firebase/vertexai-preview",B0="@firebase/firestore-compat",$0="firebase",j0="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="[DEFAULT]",q0={[hu]:"fire-core",[_0]:"fire-core-compat",[v0]:"fire-analytics",[y0]:"fire-analytics-compat",[T0]:"fire-app-check",[E0]:"fire-app-check-compat",[w0]:"fire-auth",[I0]:"fire-auth-compat",[A0]:"fire-rtdb",[b0]:"fire-rtdb-compat",[R0]:"fire-fn",[S0]:"fire-fn-compat",[C0]:"fire-iid",[P0]:"fire-iid-compat",[k0]:"fire-fcm",[O0]:"fire-fcm-compat",[N0]:"fire-perf",[D0]:"fire-perf-compat",[V0]:"fire-rc",[M0]:"fire-rc-compat",[L0]:"fire-gcs",[x0]:"fire-gcs-compat",[F0]:"fire-fst",[B0]:"fire-fst-compat",[U0]:"fire-vertex","fire-js":"fire-js",[$0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map,H0=new Map,fu=new Map;function cp(t,e){try{t.container.addComponent(e)}catch(n){Jr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(fu.has(e))return Jr.debug(`There were multiple attempts to register component ${e}.`),!1;fu.set(e,t);for(const n of Ga.values())cp(n,t);for(const n of H0.values())cp(n,t);return!0}function ls(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new cs("app","Firebase",K0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=j0;function Y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:du,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _r.create("bad-app-name",{appName:String(s)});if(n||(n=j_()),!n)throw _r.create("no-options");const i=Ga.get(s);if(i){if(lo(n,i.options)&&lo(r,i.config))return i;throw _r.create("duplicate-app",{appName:s})}const o=new e0(s);for(const l of fu.values())o.addComponent(l);const c=new W0(n,r,o);return Ga.set(s,c),c}function lh(t=du){const e=Ga.get(t);if(!e&&t===du&&j_())return Y_();if(!e)throw _r.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=q0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jr.warn(c.join(" "));return}In(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const G0="firebase-heartbeat-database",z0=1,uo="firebase-heartbeat-store";let Cl=null;function J_(){return Cl||(Cl=Q_(G0,z0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Cl}async function Q0(t){try{const n=(await J_()).transaction(uo),r=await n.objectStore(uo).get(X_(t));return await n.done,r}catch(e){if(e instanceof dn)Jr.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jr.warn(n.message)}}}async function lp(t,e){try{const r=(await J_()).transaction(uo,"readwrite");await r.objectStore(uo).put(e,X_(t)),await r.done}catch(n){if(n instanceof dn)Jr.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jr.warn(r.message)}}}function X_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Y0=1024,J0=30*24*60*60*1e3;class X0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=up();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=J0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=up(),{heartbeatsToSend:r,unsentEntries:s}=Z0(this._heartbeatsCache.heartbeats),i=Wa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function up(){return new Date().toISOString().substring(0,10)}function Z0(t,e=Y0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K_()?W_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hp(t){return Wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){In(new un("platform-logger",e=>new g0(e),"PRIVATE")),In(new un("heartbeat",e=>new X0(e),"PRIVATE")),Zt(hu,ap,t),Zt(hu,ap,"esm2017"),Zt("fire-js","")}tR("");function uh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nR=Z_,ey=new cs("auth","Firebase",Z_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Oc("@firebase/auth");function rR(t,...e){za.logLevel<=Te.WARN&&za.warn(`Auth (${ii}): ${t}`,...e)}function Aa(t,...e){za.logLevel<=Te.ERROR&&za.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw dh(t,...e)}function an(t,...e){return dh(t,...e)}function hh(t,e,n){const r=Object.assign(Object.assign({},nR()),{[e]:n});return new cs("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return hh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(t,"argument-error"),hh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ey.create(t,...e)}function pe(t,e,...n){if(!t)throw dh(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function $n(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iR(){return dp()==="http:"||dp()==="https:"}function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||H_()||"connection"in navigator)?navigator.onLine:!0}function aR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=Vb()||Lb()}get(){return oR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new Oo(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,s={}){return ny(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ko(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ty.fetch()(ry(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function ny(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cR),e);try{const s=new hR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hh(t,d,u);en(t,d)}}catch(s){if(s instanceof dn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function No(t,e,n,r,s={}){const i=await Gn(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ry(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fh(t.config,s):`${t.config.apiScheme}://${s}`}function uR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),lR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function fp(t){return t!==void 0&&t.enterprise!==void 0}class dR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fR(t,e){return Gn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function sy(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gR(t,e=!1){const n=gt(t),r=await n.getIdToken(e),s=ph(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gi(Pl(s.auth_time)),issuedAtTime:Gi(Pl(s.iat)),expirationTime:Gi(Pl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pl(t){return Number(t)*1e3}function ph(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=B_(n);return s?JSON.parse(s):(Aa("Failed to decode base64 JWT payload"),null)}catch(s){return Aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pp(t){const e=ph(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&mR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ho(t,sy(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?iy(i.providerUserInfo):[],c=vR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new gu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function yR(t){const e=gt(t);await Qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function iy(t){return t.map(e=>{var{providerId:n}=e,r=uh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){const n=await ny(t,{},async()=>{const r=ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ry(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ty.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TR(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=pp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ER(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _R(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ho(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gR(this,e)}reload(){return yR(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await ho(this,pR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:N,isAnonymous:x,providerData:V,stsTokenManager:b}=n;pe(C&&b,e,"internal-error");const v=Us.fromJSON(this.name,b);pe(typeof C=="string",e,"internal-error"),rr(p,e.name),rr(g,e.name),pe(typeof N=="boolean",e,"internal-error"),pe(typeof x=="boolean",e,"internal-error"),rr(T,e.name),rr(R,e.name),rr(P,e.name),rr(D,e.name),rr(F,e.name),rr(k,e.name);const m=new Dn({uid:C,auth:e,email:g,emailVerified:N,displayName:p,isAnonymous:x,photoURL:R,phoneNumber:T,tenantId:P,stsTokenManager:v,createdAt:F,lastLoginAt:k});return V&&Array.isArray(V)&&(m.providerData=V.map(y=>Object.assign({},y))),D&&(m._redirectEventId=D),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?iy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Us;c.updateFromIdToken(r);const l=new Dn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new Map;function Vn(t){$n(t instanceof Function,"Expected a class definition");let e=gp.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oy.type="NONE";const mp=oy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ba(this.userKey,s.apiKey,i),this.fullPersistenceKey=ba("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Vn(mp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Vn(mp);const o=ba(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Dn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Bs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hy(e))return"Blackberry";if(dy(e))return"Webos";if(gh(e))return"Safari";if((e.includes("chrome/")||cy(e))&&!e.includes("edge/"))return"Chrome";if(uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ay(t=pt()){return/firefox\//i.test(t)}function gh(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cy(t=pt()){return/crios\//i.test(t)}function ly(t=pt()){return/iemobile/i.test(t)}function uy(t=pt()){return/android/i.test(t)}function hy(t=pt()){return/blackberry/i.test(t)}function dy(t=pt()){return/webos/i.test(t)}function Nc(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wR(t=pt()){var e;return Nc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IR(){return xb()&&document.documentMode===10}function fy(t=pt()){return Nc(t)||uy(t)||dy(t)||hy(t)||/windows phone/i.test(t)||ly(t)}function AR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e=[]){let n;switch(t){case"Browser":n=_p(pt());break;case"Worker":n=`${_p(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
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
 */class bR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RR(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
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
 */const SR=6;class CR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new bR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sy(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Fn(this));const n=e?gt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RR(this),n=new CR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await TR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(t){return gt(t)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hb(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kR(t){Dc=t}function gy(t){return Dc.loadJS(t)}function OR(){return Dc.recaptchaEnterpriseScript}function NR(){return Dc.gapiScript}function DR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VR="recaptcha-enterprise",MR="NO_RECAPTCHA";class LR{constructor(e){this.type=VR,this.auth=zn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{fR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new dR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;fp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(MR)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&fp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=OR();l.length!==0&&(l+=c),gy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function vp(t,e,n,r=!1){const s=new LR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ya(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await vp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t,e){const n=ls(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(lo(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function FR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UR(t,e,n){const r=zn(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=my(e),{host:o,port:c}=BR(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),$R()}function my(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BR(t){const e=my(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ep(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ep(o)}}}function Ep(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $R(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function jR(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e){return No(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}async function HR(t,e){return Gn(t,"POST","/v1/accounts:sendOobCode",Wn(t,e))}async function KR(t,e){return HR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function GR(t,e){return No(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends mh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ya(e,n,"signInWithPassword",qR);case"emailLink":return WR(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ya(e,r,"signUpPassword",jR);case"emailLink":return GR(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){return No(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="http://localhost";class Xr extends mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=uh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:zR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YR(t){const e=Vi(Mi(t)).link,n=e?Vi(Mi(e)).deep_link_id:null,r=Vi(Mi(t)).deep_link_id;return(r?Vi(Mi(r)).link:null)||r||n||e||t}class _h{constructor(e){var n,r,s,i,o,c;const l=Vi(Mi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=QR((s=l.mode)!==null&&s!==void 0?s:null);pe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=YR(e);try{return new _h(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_h.parseLink(n);return pe(r,"argument-error"),fo._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends yh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Do{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Do{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Do{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t,e){return No(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=Tp(r);return new Zr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tp(r);return new Zr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ja(e,n,r,s)}}function _y(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ja._fromErrorAndOperation(t,i,e,r):i})}async function XR(t,e,n=!1){const r=await ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Fn(r));const s="reauthenticate";try{const i=await ho(t,_y(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=ph(i.idToken);pe(o,r,"internal-error");const{sub:c}=o;return pe(t.uid===c,r,"user-mismatch"),Zr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(t,e,n=!1){if(sn(t.app))return Promise.reject(Fn(t));const r="signIn",s=await _y(t,r,e),i=await Zr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function eS(t,e){return yy(zn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(t){const e=zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tS(t,e,n){const r=zn(t);await Ya(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",KR)}async function nS(t,e,n){if(sn(t.app))return Promise.reject(Fn(t));const r=zn(t),o=await Ya(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vy(t),l}),c=await Zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function rS(t,e,n){return sn(t.app)?Promise.reject(Fn(t)):eS(gt(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vy(t),r})}function sS(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function iS(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function Ey(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function oS(t){return gt(t).signOut()}const Xa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){const t=pt();return gh(t)||Nc(t)}const cS=1e3,lS=10;class wy extends Ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aS()&&AR(),this.fallbackToPolling=fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wy.type="LOCAL";const uS=wy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy extends Ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iy.type="SESSION";const Ay=Iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await hS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=vh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function fS(t){yn().location.href=t}/**
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
 */function by(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function pS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mS(){return by()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="firebaseLocalStorageDb",_S=1,Za="firebaseLocalStorage",Sy="fbase_key";class Vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mc(t,e){return t.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function yS(){const t=indexedDB.deleteDatabase(Ry);return new Vo(t).toPromise()}function mu(){const t=indexedDB.open(Ry,_S);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Za,{keyPath:Sy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Za)?e(r):(r.close(),await yS(),e(await mu()))})})}async function wp(t,e,n){const r=Mc(t,!0).put({[Sy]:e,value:n});return new Vo(r).toPromise()}async function vS(t,e){const n=Mc(t,!1).get(e),r=await new Vo(n).toPromise();return r===void 0?null:r.value}function Ip(t,e){const n=Mc(t,!0).delete(e);return new Vo(n).toPromise()}const ES=800,TS=3;class Cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return by()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(mS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pS(),!this.activeServiceWorker)return;this.sender=new dS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mu();return await wp(e,Xa,"1"),await Ip(e,Xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mc(s,!1).getAll();return new Vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ES)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cy.type="LOCAL";const wS=Cy;new Oo(3e4,6e4);/**
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
 */function Py(t,e){return e?Vn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends mh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IS(t){return yy(t.auth,new Eh(t),t.bypassAuthState)}function AS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),ZR(n,new Eh(t),t.bypassAuthState)}async function bS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),XR(n,new Eh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IS;case"linkViaPopup":case"linkViaRedirect":return bS;case"reauthViaPopup":case"reauthViaRedirect":return AS;default:en(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new Oo(2e3,1e4);async function Oy(t,e,n){if(sn(t.app))return Promise.reject(an(t,"operation-not-supported-in-this-environment"));const r=zn(t);sR(t,e,yh);const s=Py(r,n);return new Ur(r,"signInViaPopup",e,s).executeNotNull()}class Ur extends ky{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RS.get())};e()}}Ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="pendingRedirect",Ra=new Map;class CS extends ky{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await PS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PS(t,e){const n=NS(e),r=OS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function kS(t,e){Ra.set(t._key(),e)}function OS(t){return Vn(t._redirectPersistence)}function NS(t){return ba(SS,t.config.apiKey,t.name)}async function DS(t,e,n=!1){if(sn(t.app))return Promise.reject(Fn(t));const r=zn(t),s=Py(r,e),o=await new CS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=10*60*1e3;class MS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ny(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ap(e))}saveEventToCache(e){this.cachedEventUids.add(Ap(e)),this.lastProcessedEventTime=Date.now()}}function Ap(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ny({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ny(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,US=/^https?/;async function BS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xS(t);for(const n of e)try{if($S(n))return}catch{}en(t,"unauthorized-domain")}function $S(t){const e=pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!US.test(n))return!1;if(FS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jS=new Oo(3e4,6e4);function bp(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qS(t){return new Promise((e,n)=>{var r,s,i;function o(){bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bp(),n(an(t,"network-request-failed"))},timeout:jS.get()})}if(!((s=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yn().gapi)===null||i===void 0)&&i.load)o();else{const c=DR("iframefcb");return yn()[c]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},gy(`${NR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Sa=null,e})}let Sa=null;function HS(t){return Sa=Sa||qS(t),Sa}/**
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
 */const KS=new Oo(5e3,15e3),WS="__/auth/iframe",GS="emulator/auth/iframe",zS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YS(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fh(e,GS):`https://${t.config.authDomain}/${WS}`,r={apiKey:e.apiKey,appName:t.name,v:ii},s=QS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ko(r).slice(1)}`}async function JS(t){const e=await HS(t),n=yn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:YS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),c=yn().setTimeout(()=>{i(o)},KS.get());function l(){yn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const XS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZS=500,eC=600,tC="_blank",nC="http://localhost";class Rp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rC(t,e,n,r=ZS,s=eC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},XS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=pt().toLowerCase();n&&(c=cy(u)?tC:n),ay(u)&&(e=e||nC,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[T,R])=>`${g}${T}=${R},`,"");if(wR(u)&&c!=="_self")return sC(e||"",c),new Rp(null);const p=window.open(e||"",c,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new Rp(p)}function sC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iC="__/auth/handler",oC="emulator/auth/handler",aC=encodeURIComponent("fac");async function Sp(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:s};if(e instanceof yh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Do){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${aC}=${encodeURIComponent(l)}`:"";return`${cC(t)}?${ko(c).slice(1)}${u}`}function cC({config:t}){return t.emulator?fh(t,oC):`https://${t.authDomain}/${iC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="webStorageSupport";class lC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ay,this._completeRedirectFn=DS,this._overrideRedirectResult=kS}async _openPopup(e,n,r,s){var i;$n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sp(e,n,r,pu(),s);return rC(e,o,vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sp(e,n,r,pu(),s);return fS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JS(e),r=new MS(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kl,{type:kl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kl];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fy()||gh()||Nc()}}const uC=lC;var Cp="@firebase/auth",Pp="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fC(t){In(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:py(t)},u=new PR(r,s,i,l);return FR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new un("auth-internal",e=>{const n=zn(e.getProvider("auth").getImmediate());return(r=>new hC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Cp,Pp,dC(t)),Zt(Cp,Pp,"esm2017")}/**
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
 */const pC=5*60,gC=q_("authIdTokenMaxAge")||pC;let kp=null;const mC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gC)return;const s=n==null?void 0:n.token;kp!==s&&(kp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ai(t=lh()){const e=ls(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xR(t,{popupRedirectResolver:uC,persistence:[wS,uS,Ay]}),r=q_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=mC(i.toString());iS(n,o,()=>o(n.currentUser)),sS(n,c=>o(c))}}const s=$_("auth");return s&&UR(n,`http://${s}`),n}function _C(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_C().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fC("Browser");var yC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function EC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Dy={exports:{}};const TC=EC(TA);(function(t,e){(function(r,s){t.exports=s(TC)})(yC,n=>(()=>{var r={772:(c,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(u,d)=>{const p=u.__vccOpts||u;for(const[g,T]of d)p[g]=T;return p}},976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),i.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>x,ToastPlugin:()=>b,ToastPositions:()=>R,default:()=>v,useToast:()=>V});var c=i(976);const l=(0,c.createElementVNode)("div",{class:"v-toast__icon"},null,-1),u=["innerHTML"];function d(m,y,w,I,E,de){return(0,c.openBlock)(),(0,c.createBlock)(c.Transition,{"enter-active-class":m.transition.enter,"leave-active-class":m.transition.leave},{default:(0,c.withCtx)(()=>[(0,c.withDirectives)((0,c.createElementVNode)("div",{ref:"root",role:"alert",class:(0,c.normalizeClass)(["v-toast__item",[`v-toast__item--${m.type}`,`v-toast__item--${m.position}`]]),onMouseover:y[0]||(y[0]=ye=>m.toggleTimer(!0)),onMouseleave:y[1]||(y[1]=ye=>m.toggleTimer(!1)),onClick:y[2]||(y[2]=function(){return m.whenClicked&&m.whenClicked(...arguments)})},[l,(0,c.createElementVNode)("p",{class:"v-toast__text",innerHTML:m.message},null,8,u)],34),[[c.vShow,m.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function p(m){var y;typeof m.remove<"u"?m.remove():(y=m.parentNode)==null||y.removeChild(m)}function g(m,y,w){let I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const E=(0,c.h)(m,y,I),de=document.createElement("div");return de.classList.add("v-toast--pending"),w.appendChild(de),(0,c.render)(E,de),E.component}class T{constructor(y,w){this.startedAt=Date.now(),this.callback=y,this.delay=w,this.timer=setTimeout(y,w)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const R=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function P(m){return{all:m=m||new Map,on:function(y,w){var I=m.get(y);I?I.push(w):m.set(y,[w])},off:function(y,w){var I=m.get(y);I&&(w?I.splice(I.indexOf(w)>>>0,1):m.set(y,[]))},emit:function(y,w){var I=m.get(y);I&&I.slice().map(function(E){E(w)}),(I=m.get("*"))&&I.slice().map(function(E){E(y,w)})}}}const F=P(),k=(0,c.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:R.BOTTOM_RIGHT,validator(m){return Object.values(R).includes(m)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),F.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const m=document.body;m.appendChild(this.parentTop),m.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const m=this.$refs.root;(0,c.render)(null,m),p(m)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const m=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),p(m),this.isActive=!0,this.duration&&(this.timer=new T(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(m){!this.pauseOnHover||!this.timer||(m?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case R.TOP:case R.TOP_RIGHT:case R.TOP_LEFT:return this.parentTop;case R.BOTTOM:case R.BOTTOM_RIGHT:case R.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case R.TOP:case R.TOP_RIGHT:case R.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case R.BOTTOM:case R.BOTTOM_RIGHT:case R.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){F.off("toast-clear",this.dismiss)}});var C=i(772);const x=(0,C.default)(k,[["render",d]]),V=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(y){let w=null;typeof y=="string"&&(w=y);const E=Object.assign({},{message:w},m,y);return{dismiss:g(x,E,document.body).ctx.dismiss}},clear(){F.emit("toast-clear")},success(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"success"},w))},error(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"error"},w))},info(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"info"},w))},warning(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"warning"},w))},default(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"default"},w))}}},b={install:function(m){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=V(y);m.config.globalProperties.$toast=w,m.provide("$toast",w)}},v=b})(),o})())})(Dy);var Vy=Dy.exports;const wC=vC(Vy);function Ke(t,e){const n=Vy.useToast();switch(t){case"success":n.success(e);break;case"info":n.info(e);break;case"warning":n.warning(e);break;case"error":n.error(e);break;case"default":n.default(e);break;default:n.default(e);break}}const us=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},My=t=>(Cr("data-v-bfeb2da2"),t=t(),Pr(),t),IC={class:"navBar"},AC={class:"container"},bC=My(()=>B("div",{class:"co"},"CO",-1)),RC=My(()=>B("div",{class:"student"},"STUDENT",-1)),SC={class:"buttons"},CC={__name:"Nav",props:{isLoggedIn:Boolean},setup(t){const e=ai(),n=Pc();function r(){oS(e).then(()=>{n.push("/"),Ke("success","Successfully singed out!")}).catch(s=>{Ke("error",s.message)})}return(s,i)=>{const o=sm("RouterLink");return Se(),Be("div",IC,[B("div",AC,[Pe(o,{class:"logo",to:"/"},{default:_n(()=>[bC,RC]),_:1}),B("div",SC,[t.isLoggedIn?On("",!0):(Se(),Wr(o,{key:0,class:"button",to:"/Login"},{default:_n(()=>[gr("Login")]),_:1})),t.isLoggedIn?On("",!0):(Se(),Wr(o,{key:1,class:"button",to:"/Register"},{default:_n(()=>[gr("Register")]),_:1})),t.isLoggedIn?(Se(),Wr(o,{key:2,class:"button",to:"/findcostudent"},{default:_n(()=>[gr("Find students")]),_:1})):On("",!0),t.isLoggedIn?(Se(),Be("div",{key:3,class:"button",onClick:i[0]||(i[0]=c=>r())},"Sign out")):On("",!0)])])])}}},PC=us(CC,[["__scopeId","data-v-bfeb2da2"]]),kC={},Ly=t=>(Cr("data-v-c0e10d71"),t=t(),Pr(),t),OC={class:"footerBox"},NC=Ly(()=>B("p",null,"Copyright ©2024",-1)),DC=Ly(()=>B("p",null,"Designed by Samuel Coryn",-1)),VC=[NC,DC];function MC(t,e){return Se(),Be("div",OC,VC)}const LC=us(kC,[["render",MC],["__scopeId","data-v-c0e10d71"]]),xC={class:"navBox"},FC={__name:"App",setup(t){const e=Qe(!1);let n;return si(()=>{n=ai(),Ey(n,r=>{r?e.value=!0:e.value=!1})}),xs("isLoggedInKey",e),(r,s)=>(Se(),Be(We,null,[B("div",xC,[Pe(PC,{isLoggedIn:e.value},null,8,["isLoggedIn"])]),Pe(wt(L_),null,{default:_n(({Component:i})=>[Pe(bc,{name:"route",mode:"out-in"},{default:_n(()=>[(Se(),Wr(om(i)))]),_:2},1024)]),_:1}),Pe(LC)],64))}},UC="/costudent-demo/assets/students_stock_photo-BvfkMiXM.jpg",Th=t=>(Cr("data-v-33ed4297"),t=t(),Pr(),t),BC={class:"root"},$C={class:"grid"},jC={class:"landingColumn"},qC=Th(()=>B("div",{class:"title"},[B("h1",null,"Study better,"),B("h1",null,"Together")],-1)),HC=Th(()=>B("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),KC={class:"buttonArray"},WC=Th(()=>B("div",{class:"photo"},[B("img",{src:UC,alt:"People studying together."})],-1)),GC=Gm('<div id="learnMore" data-v-33ed4297><div class="article" data-v-33ed4297><h1 data-v-33ed4297>ABOUT</h1><p data-v-33ed4297>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-33ed4297>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-33ed4297>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-33ed4297>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-33ed4297>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-33ed4297><div class="node" data-v-33ed4297><p data-v-33ed4297>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-33ed4297><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-33ed4297></path></svg><div class="node" data-v-33ed4297><p data-v-33ed4297>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-33ed4297><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-33ed4297></path></svg><div class="node" data-v-33ed4297><p data-v-33ed4297>Learn togehter!</p></div></div></div>',1),zC={__name:"Home",setup(t){function e(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=$t("isLoggedInKey"),s=Pc();return(i,o)=>(Se(),Be("div",BC,[B("div",$C,[B("div",jC,[qC,HC,B("div",KC,[B("div",{class:"button",onClick:o[0]||(o[0]=c=>n())},"Start studying"),B("div",{class:"button",onClick:o[1]||(o[1]=c=>e())},"Learn more")])]),WC]),GC]))}},QC=us(zC,[["__scopeId","data-v-33ed4297"]]);var YC="firebase",JC="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(YC,JC,"app");const xy="@firebase/installations",wh="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=1e4,Uy=`w:${wh}`,By="FIS_v2",XC="https://firebaseinstallations.googleapis.com/v1",ZC=60*60*1e3,eP="installations",tP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},es=new cs(eP,tP,nP);function $y(t){return t instanceof dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy({projectId:t}){return`${XC}/projects/${t}/installations`}function qy(t){return{token:t.token,requestStatus:2,expiresIn:sP(t.expiresIn),creationTime:Date.now()}}async function Hy(t,e){const r=(await e.json()).error;return es.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ky({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rP(t,{refreshToken:e}){const n=Ky(t);return n.append("Authorization",iP(e)),n}async function Wy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sP(t){return Number(t.replace("s","000"))}function iP(t){return`${By} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jy(t),s=Ky(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:By,appId:t.appId,sdkVersion:Uy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Wy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:qy(u.authToken)}}else throw await Hy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=/^[cdef][\w-]{21}$/,_u="";function lP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uP(t);return cP.test(n)?n:_u}catch{return _u}}function uP(t){return aP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=new Map;function Qy(t,e){const n=Lc(t);Yy(n,e),hP(n,e)}function Yy(t,e){const n=zy.get(t);if(n)for(const r of n)r(e)}function hP(t,e){const n=dP();n&&n.postMessage({key:t,fid:e}),fP()}let Br=null;function dP(){return!Br&&"BroadcastChannel"in self&&(Br=new BroadcastChannel("[Firebase] FID Change"),Br.onmessage=t=>{Yy(t.data.key,t.data.fid)}),Br}function fP(){zy.size===0&&Br&&(Br.close(),Br=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="firebase-installations-database",gP=1,ts="firebase-installations-store";let Ol=null;function Ih(){return Ol||(Ol=Q_(pP,gP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}})),Ol}async function ec(t,e){const n=Lc(t),s=(await Ih()).transaction(ts,"readwrite"),i=s.objectStore(ts),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Qy(t,e.fid),e}async function Jy(t){const e=Lc(t),r=(await Ih()).transaction(ts,"readwrite");await r.objectStore(ts).delete(e),await r.done}async function xc(t,e){const n=Lc(t),s=(await Ih()).transaction(ts,"readwrite"),i=s.objectStore(ts),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&Qy(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t){let e;const n=await xc(t.appConfig,r=>{const s=mP(r),i=_P(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===_u?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function mP(t){const e=t||{fid:lP(),registrationStatus:0};return Xy(e)}function _P(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vP(t)}:{installationEntry:e}}async function yP(t,e){try{const n=await oP(t,e);return ec(t.appConfig,n)}catch(n){throw $y(n)&&n.customData.serverCode===409?await Jy(t.appConfig):await ec(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vP(t){let e=await Op(t.appConfig);for(;e.registrationStatus===1;)await Gy(100),e=await Op(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ah(t);return r||n}return e}function Op(t){return xc(t,e=>{if(!e)throw es.create("installation-not-found");return Xy(e)})}function Xy(t){return EP(t)?{fid:t.fid,registrationStatus:0}:t}function EP(t){return t.registrationStatus===1&&t.registrationTime+Fy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP({appConfig:t,heartbeatServiceProvider:e},n){const r=wP(t,n),s=rP(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Uy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Wy(()=>fetch(r,c));if(l.ok){const u=await l.json();return qy(u)}else throw await Hy("Generate Auth Token",l)}function wP(t,{fid:e}){return`${jy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(t,e=!1){let n;const r=await xc(t.appConfig,i=>{if(!Zy(i))throw es.create("not-registered");const o=i.authToken;if(!e&&bP(o))return i;if(o.requestStatus===1)return n=IP(t,e),i;{if(!navigator.onLine)throw es.create("app-offline");const c=SP(i);return n=AP(t,c),c}});return n?await n:r.authToken}async function IP(t,e){let n=await Np(t.appConfig);for(;n.authToken.requestStatus===1;)await Gy(100),n=await Np(t.appConfig);const r=n.authToken;return r.requestStatus===0?bh(t,e):r}function Np(t){return xc(t,e=>{if(!Zy(e))throw es.create("not-registered");const n=e.authToken;return CP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AP(t,e){try{const n=await TP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ec(t.appConfig,r),n}catch(n){if($y(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ec(t.appConfig,r)}throw n}}function Zy(t){return t!==void 0&&t.registrationStatus===2}function bP(t){return t.requestStatus===2&&!RP(t)}function RP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ZC}function SP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function CP(t){return t.requestStatus===1&&t.requestTime+Fy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ah(e);return r?r.catch(console.error):bh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e=!1){const n=t;return await OP(n),(await bh(n,e)).token}async function OP(t){const{registrationPromise:e}=await Ah(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){if(!t||!t.options)throw Nl("App Configuration");if(!t.name)throw Nl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Nl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Nl(t){return es.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="installations",DP="installations-internal",VP=t=>{const e=t.getProvider("app").getImmediate(),n=NP(e),r=ls(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},MP=t=>{const e=t.getProvider("app").getImmediate(),n=ls(e,ev).getImmediate();return{getId:()=>PP(n),getToken:s=>kP(n,s)}};function LP(){In(new un(ev,VP,"PUBLIC")),In(new un(DP,MP,"PRIVATE"))}LP();Zt(xy,wh);Zt(xy,wh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="analytics",xP="firebase_id",FP="origin",UP=60*1e3,BP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new cs("analytics","Analytics",$P);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){if(!t.startsWith(Rh)){const e=jt.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function tv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function HP(t,e){const n=qP("firebase-js-sdk-policy",{createScriptURL:jP}),r=document.createElement("script"),s=`${Rh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function KP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function WP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await tv(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Nt.error(c)}t("config",s,i)}async function GP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await tv(n);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Nt.error(i)}}function zP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await GP(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await WP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Nt.error(c)}}return s}function QP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=zP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function YP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=30,XP=1e3;class ZP{constructor(e={},n=XP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nv=new ZP;function e1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function t1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:e1(r)},i=BP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function n1(t,e=nv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw jt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw jt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new i1;return setTimeout(async()=>{c.abort()},UP),rv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function rv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=nv){var i;const{appId:o,measurementId:c}=t;try{await r1(r,e)}catch(l){if(c)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await t1(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!s1(u)){if(s.deleteThrottleMetadata(o),c)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?rp(n,s.intervalMillis,JP):rp(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),Nt.debug(`Calling attemptFetch again in ${d} millis`),rv(t,p,r,s)}}function r1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function s1(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class i1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function o1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(){if(K_())try{await W_()}catch(t){return Nt.warn(jt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Nt.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function c1(t,e,n,r,s,i,o){var c;const l=n1(t);l.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Nt.error(T)),e.push(l);const u=a1().then(T=>{if(T)return r.getId()}),[d,p]=await Promise.all([l,u]);YP(i)||HP(i,d.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[FP]="firebase",g.update=!0,p!=null&&(g[xP]=p),s("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.app=e}_delete(){return delete zi[this.app.options.appId],Promise.resolve()}}let zi={},Dp=[];const Vp={};let Dl="dataLayer",u1="gtag",Mp,sv,Lp=!1;function h1(){const t=[];if(H_()&&t.push("This is a browser extension environment."),Ub()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=jt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function d1(t,e,n){h1();const r=t.options.appId;if(!r)throw jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(zi[r]!=null)throw jt.create("already-exists",{id:r});if(!Lp){KP(Dl);const{wrappedGtag:i,gtagCore:o}=QP(zi,Dp,Vp,Dl,u1);sv=i,Mp=o,Lp=!0}return zi[r]=c1(t,Dp,Vp,e,Mp,Dl,n),new l1(t)}function f1(t=lh()){t=gt(t);const e=ls(t,tc);return e.isInitialized()?e.getImmediate():p1(t)}function p1(t,e={}){const n=ls(t,tc);if(n.isInitialized()){const s=n.getImmediate();if(lo(e,n.getOptions()))return s;throw jt.create("already-initialized")}return n.initialize({options:e})}function g1(t,e,n,r){t=gt(t),o1(sv,zi[t.app.options.appId],e,n,r).catch(s=>Nt.error(s))}const xp="@firebase/analytics",Fp="0.10.4";function m1(){In(new un(tc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return d1(r,s,n)},"PUBLIC")),In(new un("analytics-internal",t,"PRIVATE")),Zt(xp,Fp),Zt(xp,Fp,"esm2017");function t(e){try{const n=e.getProvider(tc).getImmediate();return{logEvent:(r,s,i)=>g1(n,r,s,i)}}catch(n){throw jt.create("interop-component-reg-failed",{reason:n})}}}m1();var Up=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,iv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function m(){}m.prototype=v.prototype,b.D=v.prototype,b.prototype=new m,b.prototype.constructor=b,b.C=function(y,w,I){for(var E=Array(arguments.length-2),de=2;de<arguments.length;de++)E[de-2]=arguments[de];return v.prototype[w].apply(y,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,m){m||(m=0);var y=Array(16);if(typeof v=="string")for(var w=0;16>w;++w)y[w]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(w=0;16>w;++w)y[w]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=b.g[0],m=b.g[1],w=b.g[2];var I=b.g[3],E=v+(I^m&(w^I))+y[0]+3614090360&4294967295;v=m+(E<<7&4294967295|E>>>25),E=I+(w^v&(m^w))+y[1]+3905402710&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(m^I&(v^m))+y[2]+606105819&4294967295,w=I+(E<<17&4294967295|E>>>15),E=m+(v^w&(I^v))+y[3]+3250441966&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(I^m&(w^I))+y[4]+4118548399&4294967295,v=m+(E<<7&4294967295|E>>>25),E=I+(w^v&(m^w))+y[5]+1200080426&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(m^I&(v^m))+y[6]+2821735955&4294967295,w=I+(E<<17&4294967295|E>>>15),E=m+(v^w&(I^v))+y[7]+4249261313&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(I^m&(w^I))+y[8]+1770035416&4294967295,v=m+(E<<7&4294967295|E>>>25),E=I+(w^v&(m^w))+y[9]+2336552879&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(m^I&(v^m))+y[10]+4294925233&4294967295,w=I+(E<<17&4294967295|E>>>15),E=m+(v^w&(I^v))+y[11]+2304563134&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(I^m&(w^I))+y[12]+1804603682&4294967295,v=m+(E<<7&4294967295|E>>>25),E=I+(w^v&(m^w))+y[13]+4254626195&4294967295,I=v+(E<<12&4294967295|E>>>20),E=w+(m^I&(v^m))+y[14]+2792965006&4294967295,w=I+(E<<17&4294967295|E>>>15),E=m+(v^w&(I^v))+y[15]+1236535329&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(w^I&(m^w))+y[1]+4129170786&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^w&(v^m))+y[6]+3225465664&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(I^v))+y[11]+643717713&4294967295,w=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(w^I))+y[0]+3921069994&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(w^I&(m^w))+y[5]+3593408605&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^w&(v^m))+y[10]+38016083&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(I^v))+y[15]+3634488961&4294967295,w=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(w^I))+y[4]+3889429448&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(w^I&(m^w))+y[9]+568446438&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^w&(v^m))+y[14]+3275163606&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(I^v))+y[3]+4107603335&4294967295,w=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(w^I))+y[8]+1163531501&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(w^I&(m^w))+y[13]+2850285829&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^w&(v^m))+y[2]+4243563512&4294967295,I=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(I^v))+y[7]+1735328473&4294967295,w=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(w^I))+y[12]+2368359562&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(m^w^I)+y[5]+4294588738&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^w)+y[8]+2272392833&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^m)+y[11]+1839030562&4294967295,w=I+(E<<16&4294967295|E>>>16),E=m+(w^I^v)+y[14]+4259657740&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(m^w^I)+y[1]+2763975236&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^w)+y[4]+1272893353&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^m)+y[7]+4139469664&4294967295,w=I+(E<<16&4294967295|E>>>16),E=m+(w^I^v)+y[10]+3200236656&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(m^w^I)+y[13]+681279174&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^w)+y[0]+3936430074&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^m)+y[3]+3572445317&4294967295,w=I+(E<<16&4294967295|E>>>16),E=m+(w^I^v)+y[6]+76029189&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(m^w^I)+y[9]+3654602809&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^w)+y[12]+3873151461&4294967295,I=v+(E<<11&4294967295|E>>>21),E=w+(I^v^m)+y[15]+530742520&4294967295,w=I+(E<<16&4294967295|E>>>16),E=m+(w^I^v)+y[2]+3299628645&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(w^(m|~I))+y[0]+4096336452&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~w))+y[7]+1126891415&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~m))+y[14]+2878612391&4294967295,w=I+(E<<15&4294967295|E>>>17),E=m+(I^(w|~v))+y[5]+4237533241&4294967295,m=w+(E<<21&4294967295|E>>>11),E=v+(w^(m|~I))+y[12]+1700485571&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~w))+y[3]+2399980690&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~m))+y[10]+4293915773&4294967295,w=I+(E<<15&4294967295|E>>>17),E=m+(I^(w|~v))+y[1]+2240044497&4294967295,m=w+(E<<21&4294967295|E>>>11),E=v+(w^(m|~I))+y[8]+1873313359&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~w))+y[15]+4264355552&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~m))+y[6]+2734768916&4294967295,w=I+(E<<15&4294967295|E>>>17),E=m+(I^(w|~v))+y[13]+1309151649&4294967295,m=w+(E<<21&4294967295|E>>>11),E=v+(w^(m|~I))+y[4]+4149444226&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~w))+y[11]+3174756917&4294967295,I=v+(E<<10&4294967295|E>>>22),E=w+(v^(I|~m))+y[2]+718787259&4294967295,w=I+(E<<15&4294967295|E>>>17),E=m+(I^(w|~v))+y[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var m=v-this.blockSize,y=this.B,w=this.h,I=0;I<v;){if(w==0)for(;I<=m;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<v;)if(y[w++]=b.charCodeAt(I++),w==this.blockSize){s(this,y),w=0;break}}else for(;I<v;)if(y[w++]=b[I++],w==this.blockSize){s(this,y),w=0;break}}this.h=w,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var m=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=m&255,m/=256;for(this.u(b),b=Array(16),v=m=0;4>v;++v)for(var y=0;32>y;y+=8)b[m++]=this.g[v]>>>y&255;return b};function i(b,v){var m=c;return Object.prototype.hasOwnProperty.call(m,b)?m[b]:m[b]=v(b)}function o(b,v){this.h=v;for(var m=[],y=!0,w=b.length-1;0<=w;w--){var I=b[w]|0;y&&I==v||(m[w]=I,y=!1)}this.g=m}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(u(-b));for(var v=[],m=1,y=0;b>=m;y++)v[y]=b/m|0,m*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return D(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=u(Math.pow(v,8)),y=p,w=0;w<b.length;w+=8){var I=Math.min(8,b.length-w),E=parseInt(b.substring(w,w+I),v);8>I?(I=u(Math.pow(v,I)),y=y.j(I).add(u(E))):(y=y.j(m),y=y.add(u(E)))}return y}var p=l(0),g=l(1),T=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var b=0,v=1,m=0;m<this.g.length;m++){var y=this.i(m);b+=(0<=y?y:4294967296+y)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(P(this))return"-"+D(this).toString(b);for(var v=u(Math.pow(b,6)),m=this,y="";;){var w=N(m,v).g;m=F(m,w.j(v));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(b);if(m=w,R(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=F(this,b),P(b)?-1:R(b)?0:1};function D(b){for(var v=b.g.length,m=[],y=0;y<v;y++)m[y]=~b.g[y];return new o(m,~b.h).add(g)}t.abs=function(){return P(this)?D(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0,w=0;w<=v;w++){var I=y+(this.i(w)&65535)+(b.i(w)&65535),E=(I>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);y=E>>>16,I&=65535,E&=65535,m[w]=E<<16|I}return new o(m,m[m.length-1]&-2147483648?-1:0)};function F(b,v){return b.add(D(v))}t.j=function(b){if(R(this)||R(b))return p;if(P(this))return P(b)?D(this).j(D(b)):D(D(this).j(b));if(P(b))return D(this.j(D(b)));if(0>this.l(T)&&0>b.l(T))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,m=[],y=0;y<2*v;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var w=0;w<b.g.length;w++){var I=this.i(y)>>>16,E=this.i(y)&65535,de=b.i(w)>>>16,ye=b.i(w)&65535;m[2*y+2*w]+=E*ye,k(m,2*y+2*w),m[2*y+2*w+1]+=I*ye,k(m,2*y+2*w+1),m[2*y+2*w+1]+=E*de,k(m,2*y+2*w+1),m[2*y+2*w+2]+=I*de,k(m,2*y+2*w+2)}for(y=0;y<v;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=v;y<2*v;y++)m[y]=0;return new o(m,0)};function k(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function C(b,v){this.g=b,this.h=v}function N(b,v){if(R(v))throw Error("division by zero");if(R(b))return new C(p,p);if(P(b))return v=N(D(b),v),new C(D(v.g),D(v.h));if(P(v))return v=N(b,D(v)),new C(D(v.g),v.h);if(30<b.g.length){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var m=g,y=v;0>=y.l(b);)m=x(m),y=x(y);var w=V(m,1),I=V(y,1);for(y=V(y,2),m=V(m,2);!R(y);){var E=I.add(y);0>=E.l(b)&&(w=w.add(m),I=E),y=V(y,1),m=V(m,1)}return v=F(b,w.j(v)),new C(w,v)}for(w=p;0<=b.l(v);){for(m=Math.max(1,Math.floor(b.m()/v.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=u(m),E=I.j(v);P(E)||0<E.l(b);)m-=y,I=u(m),E=I.j(v);R(I)&&(I=g),w=w.add(I),b=F(b,E)}return new C(w,b)}t.A=function(b){return N(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)&b.i(y);return new o(m,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)|b.i(y);return new o(m,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)^b.i(y);return new o(m,this.h^b.h)};function x(b){for(var v=b.g.length+1,m=[],y=0;y<v;y++)m[y]=b.i(y)<<1|b.i(y-1)>>>31;return new o(m,b.h)}function V(b,v){var m=v>>5;v%=32;for(var y=b.g.length-m,w=[],I=0;I<y;I++)w[I]=0<v?b.i(I+m)>>>v|b.i(I+m+1)<<32-v:b.i(I+m);return new o(w,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Gr=o}).apply(typeof Up<"u"?Up:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ov,av,Li,cv,Ca,yu,lv,uv,hv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in f))break e;f=f[O]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,O={next:function(){if(!_&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,O,L){for(var X=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)X[Me-2]=arguments[Me];return h.prototype[O].apply(_,X)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(l(_)){const O=a.length||0,L=_.length||0;a.length=O+L;for(let X=0;X<L;X++)a[O+X]=_[X]}else a.push(_)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var x=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function V(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(a,h){let f,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(f in _)a[f]=_[f];for(let L=0;L<m.length;L++)f=m[L],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function w(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function I(a){c.setTimeout(()=>{throw a},0)}function E(){var a=je;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,f){const _=ye.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var ye=new F(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,W=!1,je=new de,tn=()=>{const a=c.Promise.resolve(void 0);Q=()=>{a.then(Ht)}};var Ht=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){I(f)}var h=ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Qn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function fn(a,h){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(x){e:{try{N(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:it[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fn.aa.h.call(this)}}R(fn,He);var it={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),ne=0;function ee(a,h,f,_,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=O,this.key=++ne,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,h,f,_,O){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var X=A(a,h,_,O);return-1<X?(h=a[X],f||(h.fa=!1)):(h=new ee(h,this.src,L,!!_,O),h.fa=f,a.push(h)),h};function De(a,h){var f=h.type;if(f in a.g){var _=a.g[f],O=Array.prototype.indexOf.call(_,h,void 0),L;(L=0<=O)&&Array.prototype.splice.call(_,O,1),L&&(ie(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function A(a,h,f,_){for(var O=0;O<a.length;++O){var L=a[O];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==_)return O}return-1}var S="closure_lm_"+(1e6*Math.random()|0),M={};function j(a,h,f,_,O){if(Array.isArray(h)){for(var L=0;L<h.length;L++)j(a,h[L],f,_,O);return null}return f=ce(f),a&&a[$]?a.K(h,f,u(_)?!!_.capture:!!_,O):U(a,h,f,!1,_,O)}function U(a,h,f,_,O,L){if(!h)throw Error("Invalid event type");var X=u(O)?!!O.capture:!!O,Me=te(a);if(Me||(a[S]=Me=new Ee(a)),f=Me.add(h,f,_,X,L),f.proxy)return f;if(_=Y(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Qn||(O=X),O===void 0&&(O=!1),a.addEventListener(h.toString(),_,O);else if(a.attachEvent)a.attachEvent(J(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=H;return a}function Z(a,h,f,_,O){if(Array.isArray(h))for(var L=0;L<h.length;L++)Z(a,h[L],f,_,O);else _=u(_)?!!_.capture:!!_,f=ce(f),a&&a[$]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=A(L,f,_,O),-1<f&&(ie(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=te(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,f,_,O)),(f=-1<a?h[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[$])De(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(J(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=te(h))?(De(f,a),f.h==0&&(f.src=null,h[S]=null)):ie(a)}}}function J(a){return a in M?M[a]:M[a]="on"+a}function H(a,h){if(a.da)a=!0;else{h=new fn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&G(a),a=f.call(_,h)}return a}function te(a){return a=a[S],a instanceof Ee?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[le]||(a[le]=function(h){return a.handleEvent(h)}),a[le])}function ae(){qe.call(this),this.i=new Ee(this),this.M=this,this.F=null}R(ae,qe),ae.prototype[$]=!0,ae.prototype.removeEventListener=function(a,h,f,_){Z(this,a,h,f,_)};function he(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new He(h,a);else if(h instanceof He)h.target=h.target||a;else{var O=h;h=new He(_,a),y(h,O)}if(O=!0,f)for(var L=f.length-1;0<=L;L--){var X=h.g=f[L];O=ke(X,_,!0,h)&&O}if(X=h.g=a,O=ke(X,_,!0,h)&&O,O=ke(X,_,!1,h)&&O,f)for(L=0;L<f.length;L++)X=h.g=f[L],O=ke(X,_,!1,h)&&O}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ie(f[_]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ae.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function ke(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,L=0;L<h.length;++L){var X=h[L];if(X&&!X.da&&X.capture==f){var Me=X.listener,ut=X.ha||X.src;X.fa&&De(a.i,X),O=Me.call(ut,_)!==!1&&O}}return O&&!_.defaultPrevented}function Ae(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Je(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,Je(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Vt extends qe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(a){qe.call(this),this.h=a,this.g={}}R(Kt,qe);var pi=[];function Yn(a){V(a.g,function(h,f){this.g.hasOwnProperty(f)&&G(h)},a),a.g={}}Kt.prototype.N=function(){Kt.aa.N.call(this),Yn(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fs=c.JSON.stringify,At=c.JSON.parse,Wt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ps(){}ps.prototype.h=null;function sd(a){return a.h||(a.h=a.i())}function id(){}var gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xc(){He.call(this,"d")}R(Xc,He);function Zc(){He.call(this,"c")}R(Zc,He);var kr={},od=null;function qo(){return od=od||new ae}kr.La="serverreachability";function ad(a){He.call(this,kr.La,a)}R(ad,He);function mi(a){const h=qo();he(h,new ad(h))}kr.STAT_EVENT="statevent";function cd(a,h){He.call(this,kr.STAT_EVENT,a),this.stat=h}R(cd,He);function bt(a){const h=qo();he(h,new cd(h,a))}kr.Ma="timingevent";function ld(a,h){He.call(this,kr.Ma,a),this.size=h}R(ld,He);function _i(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function yi(){this.g=!0}yi.prototype.xa=function(){this.g=!1};function DE(a,h,f,_,O,L){a.info(function(){if(a.g)if(L)for(var X="",Me=L.split("&"),ut=0;ut<Me.length;ut++){var Re=Me[ut].split("=");if(1<Re.length){var mt=Re[0];Re=Re[1];var _t=mt.split("_");X=2<=_t.length&&_t[1]=="type"?X+(mt+"="+Re+"&"):X+(mt+"=redacted&")}}else X=null;else X=L;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+f+`
`+X})}function VE(a,h,f,_,O,L,X){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+f+`
`+L+" "+X})}function gs(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+LE(a,f)+(_?" "+_:"")})}function ME(a,h){a.info(function(){return"TIMEOUT: "+h})}yi.prototype.info=function(){};function LE(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return fs(f)}catch{return h}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ud={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},el;function Ko(){}R(Ko,ps),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},el=new Ko;function Jn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new Kt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hd}function hd(){this.i=null,this.g="",this.h=!1}var dd={},tl={};function nl(a,h,f){a.L=1,a.v=Qo(bn(h)),a.m=f,a.P=!0,fd(a,null)}function fd(a,h){a.F=Date.now(),Wo(a),a.A=bn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Sd(f.i,"t",_),a.C=0,f=a.j.J,a.h=new hd,a.g=Kd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Vt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(pi[0]=O.toString()),O=pi);for(var L=0;L<O.length;L++){var X=j(f,O[L],_||h.handleEvent,!1,h.h||h);if(!X)break;h.g[X.key]=X}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),mi(),DE(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Rn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=Rn(this.g);var h=this.g.Ba();const ys=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Vd(this.g)))){this.J||_t!=4||h==7||(h==8||0>=ys?mi(3):mi(2)),rl(this);var f=this.g.Z();this.X=f;t:if(pd(this)){var _=Vd(this.g);a="";var O=_.length,L=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),vi(this);var X="";break t}this.h.i=new c.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(L&&h==O-1)});_.length=0,this.h.g+=a,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=f==200,VE(this.i,this.u,this.A,this.l,this.R,_t,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ut=this.g;if((Me=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Me)){var Re=Me;break t}}Re=null}if(f=Re)gs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sl(this,f);else{this.o=!1,this.s=3,bt(12),Or(this),vi(this);break e}}if(this.P){f=!0;let nn;for(;!this.J&&this.C<X.length;)if(nn=xE(this,X),nn==tl){_t==4&&(this.s=4,bt(14),f=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==dd){this.s=4,bt(15),gs(this.i,this.l,X,"[Invalid Chunk]"),f=!1;break}else gs(this.i,this.l,nn,null),sl(this,nn);if(pd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||X.length!=0||this.h.h||(this.s=1,bt(16),f=!1),this.o=this.o&&f,!f)gs(this.i,this.l,X,"[Invalid Chunked Response]"),Or(this),vi(this);else if(0<X.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),ul(mt),mt.M=!0,bt(11))}}else gs(this.i,this.l,X,null),sl(this,X);_t==4&&Or(this),this.o&&!this.J&&(_t==4?$d(this.j,this):(this.o=!1,Wo(this)))}else eT(this.g),f==400&&0<X.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Or(this),vi(this)}}}catch{}finally{}};function pd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xE(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?tl:(f=Number(h.substring(f,_)),isNaN(f)?dd:(_+=1,_+f>h.length?tl:(h=h.slice(_,_+f),a.C=_+f,h)))}Jn.prototype.cancel=function(){this.J=!0,Or(this)};function Wo(a){a.S=Date.now()+a.I,gd(a,a.I)}function gd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_i(g(a.ba,a),h)}function rl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ME(this.i,this.A),this.L!=2&&(mi(),bt(17)),Or(this),this.s=2,vi(this)):gd(this,this.S-a)};function vi(a){a.j.G==0||a.J||$d(a.j,a)}function Or(a){rl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Yn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function sl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||il(f.h,a))){if(!a.K&&il(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ea(f),Xo(f);else break e;ll(f),bt(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=_i(g(f.Za,f),6e3));if(1>=yd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Dr(f,11)}else if((a.K||f.g==a)&&ea(f),!k(h))for(O=f.Da.g.parse(h),h=0;h<O.length;h++){let Re=O[h];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const mt=Re[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const _t=Re[4];_t!=null&&(f.Aa=_t,f.j.info("SVER="+f.Aa));const ys=Re[5];ys!=null&&typeof ys=="number"&&0<ys&&(_=1.5*ys,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const nn=a.g;if(nn){const na=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(na){var L=_.h;L.g||na.indexOf("spdy")==-1&&na.indexOf("quic")==-1&&na.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ol(L,L.h),L.h=null))}if(_.D){const hl=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;hl&&(_.ya=hl,xe(_.I,_.D,hl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var X=a;if(_.qa=Hd(_,_.J?_.ia:null,_.W),X.K){vd(_.h,X);var Me=X,ut=_.L;ut&&(Me.I=ut),Me.B&&(rl(Me),Wo(Me)),_.g=X}else Ud(_);0<f.i.length&&Zo(f)}else Re[0]!="stop"&&Re[0]!="close"||Dr(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Dr(f,7):cl(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}mi(4)}catch{}}var FE=class{constructor(a,h){this.g=a,this.map=h}};function md(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _d(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yd(a){return a.h?1:a.g?a.g.size:0}function il(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ol(a,h){a.g?a.g.add(h):a.h=h}function vd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}md.prototype.cancel=function(){if(this.i=Ed(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ed(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function UE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function BE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Td(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=BE(a),_=UE(a),O=_.length,L=0;L<O;L++)h.call(void 0,_[L],f&&f[L],a)}var wd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $E(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),O=null;if(0<=_){var L=a[f].substring(0,_);O=a[f].substring(_+1)}else L=a[f];h(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,Go(this,a.j),this.o=a.o,this.g=a.g,zo(this,a.s),this.l=a.l;var h=a.i,f=new wi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Id(this,f),this.m=a.m}else a&&(h=String(a).match(wd))?(this.h=!1,Go(this,h[1]||"",!0),this.o=Ei(h[2]||""),this.g=Ei(h[3]||"",!0),zo(this,h[4]),this.l=Ei(h[5]||"",!0),Id(this,h[6]||"",!0),this.m=Ei(h[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Nr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ti(h,Ad,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ti(h,Ad,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ti(f,f.charAt(0)=="/"?HE:qE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ti(f,WE)),a.join("")};function bn(a){return new Nr(a)}function Go(a,h,f){a.j=f?Ei(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function zo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Id(a,h,f){h instanceof wi?(a.i=h,GE(a.i,a.h)):(f||(h=Ti(h,KE)),a.i=new wi(h,a.h))}function xe(a,h,f){a.i.set(h,f)}function Qo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ei(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,jE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ad=/[#\/\?@]/g,qE=/[#\?:]/g,HE=/[#\?]/g,KE=/[#\?@]/g,WE=/#/g;function wi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&$E(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=wi.prototype,t.add=function(a,h){Xn(this),this.i=null,a=ms(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function bd(a,h){Xn(a),h=ms(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rd(a,h){return Xn(a),h=ms(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,_){f.forEach(function(O){a.call(h,O,_,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const O=a[_];for(let L=0;L<O.length;L++)f.push(h[_])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")Rd(this,a)&&(h=h.concat(this.g.get(ms(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=ms(this,a),Rd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Sd(a,h,f){bd(a,h),0<f.length&&(a.i=null,a.g.set(ms(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const L=encodeURIComponent(String(_)),X=this.V(_);for(_=0;_<X.length;_++){var O=L;X[_]!==""&&(O+="="+encodeURIComponent(String(X[_]))),a.push(O)}}return this.i=a.join("&")};function ms(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function GE(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,_){var O=_.toLowerCase();_!=O&&(bd(this,_),Sd(this,O,f))},a)),a.j=h}function zE(a,h){const f=new yi;if(c.Image){const _=new Image;_.onload=T(Zn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=T(Zn,f,"TestLoadImage: error",!1,h,_),_.onabort=T(Zn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=T(Zn,f,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function QE(a,h){const f=new yi,_=new AbortController,O=setTimeout(()=>{_.abort(),Zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(O),L.ok?Zn(f,"TestPingServer: ok",!0,h):Zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Zn(f,"TestPingServer: error",!1,h)})}function Zn(a,h,f,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(f)}catch{}}function YE(){this.g=new Wt}function JE(a,h,f){const _=f||"";try{Td(a,function(O,L){let X=O;u(O)&&(X=fs(O)),h.push(_+L+"="+encodeURIComponent(X))})}catch(O){throw h.push(_+"type="+encodeURIComponent("_badmap")),O}}function Ii(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Ii,ps),Ii.prototype.g=function(){return new Yo(this.l,this.j)},Ii.prototype.i=function(a){return function(){return a}}({});function Yo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Yo,ae),t=Yo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ai(this):bi(this),this.readyState==3&&Cd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pd(a){let h="";return V(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function al(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Pd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):xe(a,h,f))}function ze(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ze,ae);var XE=/^https?$/i,ZE=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():el.g(),this.v=this.o?sd(this.o):sd(el),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){kd(this,L);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)f.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())f.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),O=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ZE,h,void 0))||_||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,X]of f)this.g.setRequestHeader(L,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dd(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){kd(this,L)}};function kd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Od(a),Jo(a)}function Od(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jo(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Nd(this):this.bb())},t.bb=function(){Nd(this)};function Nd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rn(a)!=4||a.Z()!=2)){if(a.u&&Rn(a)==4)Ae(a.Ea,0,a);else if(he(a,"readystatechange"),Rn(a)==4){a.h=!1;try{const X=a.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=X===0){var O=String(a.D).match(wd)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),_=!XE.test(O?O.toLowerCase():"")}f=_}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var L=2<Rn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Od(a)}}finally{Jo(a)}}}}function Jo(a,h){if(a.g){Dd(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||he(a,"ready");try{f.onreadystatechange=_}catch{}}}function Dd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),At(h)}};function Vd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function eT(a){const h={};a=(a.g&&2<=Rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(k(a[_]))continue;var f=w(a[_]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[O]||[];h[O]=L,L.push(f)}b(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ri(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Md(a){this.Aa=0,this.i=[],this.j=new yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ri("baseRetryDelayMs",5e3,a),this.cb=Ri("retryDelaySeedMs",1e4,a),this.Wa=Ri("forwardChannelMaxRetries",2,a),this.wa=Ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new md(a&&a.concurrentRequestLimit),this.Da=new YE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Md.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){bt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Hd(this,null,this.W),Zo(this)};function cl(a){if(Ld(a),a.G==3){var h=a.U++,f=bn(a.I);if(xe(f,"SID",a.K),xe(f,"RID",h),xe(f,"TYPE","terminate"),Si(a,f),h=new Jn(a,a.j,h),h.L=2,h.v=Qo(bn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Kd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Wo(h)}qd(a)}function Xo(a){a.g&&(ul(a),a.g.cancel(),a.g=null)}function Ld(a){Xo(a),a.u&&(c.clearTimeout(a.u),a.u=null),ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Zo(a){if(!_d(a.h)&&!a.s){a.s=!0;var h=a.Ga;Q||tn(),W||(Q(),W=!0),je.add(h,a),a.B=0}}function tT(a,h){return yd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_i(g(a.Ga,a,h),jd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Jn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),y(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Fd(this,O,h),f=bn(this.I),xe(f,"RID",a),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),Si(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(Pd(L)))+"&"+h:this.m&&al(f,this.m,L)),ol(this.h,O),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",h),xe(f,"SID","null"),O.T=!0,nl(O,f,null)):nl(O,f,h),this.G=2}}else this.G==3&&(a?xd(this,a):this.i.length==0||_d(this.h)||xd(this))};function xd(a,h){var f;h?f=h.l:f=a.U++;const _=bn(a.I);xe(_,"SID",a.K),xe(_,"RID",f),xe(_,"AID",a.T),Si(a,_),a.m&&a.o&&al(_,a.m,a.o),f=new Jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Fd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ol(a.h,f),nl(f,_,h)}function Si(a,h){a.H&&V(a.H,function(f,_){xe(h,_,f)}),a.l&&Td({},function(f,_){xe(h,_,f)})}function Fd(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let L=-1;for(;;){const X=["count="+f];L==-1?0<f?(L=O[0].g,X.push("ofs="+L)):L=0:X.push("ofs="+L);let Me=!0;for(let ut=0;ut<f;ut++){let Re=O[ut].g;const mt=O[ut].map;if(Re-=L,0>Re)L=Math.max(0,O[ut].g-100),Me=!1;else try{JE(mt,X,"req"+Re+"_")}catch{_&&_(mt)}}if(Me){_=X.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function Ud(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Q||tn(),W||(Q(),W=!0),je.add(h,a),a.v=0}}function ll(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_i(g(a.Fa,a),jd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_i(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Xo(this),Bd(this))};function ul(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Bd(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=bn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),Si(a,h),a.m&&a.o&&al(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Qo(bn(h)),f.m=null,f.P=!0,fd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Xo(this),ll(this),bt(19))};function ea(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function $d(a,h){var f=null;if(a.g==h){ea(a),ul(a),a.g=null;var _=2}else if(il(a.h,h))f=h.D,vd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;_=qo(),he(_,new ld(_,f)),Zo(a)}else Ud(a);else if(O=h.s,O==3||O==0&&0<h.X||!(_==1&&tT(a,h)||_==2&&ll(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),O){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function jd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const O=!_;_=new Nr(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Go(_,"https"),Qo(_),O?zE(_.toString(),f):QE(_.toString(),f)}else bt(2);a.G=0,a.l&&a.l.sa(h),qd(a),Ld(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function qd(a){if(a.G=0,a.ka=[],a.l){const h=Ed(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Hd(a,h,f){var _=f instanceof Nr?bn(f):new Nr(f);if(_.g!="")h&&(_.g=h+"."+_.g),zo(_,_.s);else{var O=c.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var L=new Nr(null);_&&Go(L,_),h&&(L.g=h),O&&zo(L,O),f&&(L.l=f),_=L}return f=a.D,h=a.ya,f&&h&&xe(_,f,h),xe(_,"VER",a.la),Si(a,_),_}function Kd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ze(new Ii({eb:f})):new ze(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wd(){}t=Wd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ta(){}ta.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){ae.call(this),this.g=new Md(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!k(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!k(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}R(Mt,ae),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){cl(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=fs(a),a=f);h.i.push(new FE(h.Ya++,a)),h.G==3&&Zo(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,cl(this.g),delete this.g,Mt.aa.N.call(this)};function Gd(a){Xc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Gd,Xc);function zd(){Zc.call(this),this.status=1}R(zd,Zc);function _s(a){this.g=a}R(_s,Wd),_s.prototype.ua=function(){he(this.g,"a")},_s.prototype.ta=function(a){he(this.g,new Gd(a))},_s.prototype.sa=function(a){he(this.g,new zd)},_s.prototype.ra=function(){he(this.g,"b")},ta.prototype.createWebChannel=ta.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,hv=function(){return new ta},uv=function(){return qo()},lv=kr,yu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Ca=Ho,ud.COMPLETE="complete",cv=ud,id.EventType=gi,gi.OPEN="a",gi.CLOSE="b",gi.ERROR="c",gi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Li=id,av=Ii,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,ov=ze}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});const Bp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ci="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Oc("@firebase/firestore");function Oi(){return ns.logLevel}function oe(t,...e){if(ns.logLevel<=Te.DEBUG){const n=e.map(Sh);ns.debug(`Firestore (${ci}): ${t}`,...n)}}function jn(t,...e){if(ns.logLevel<=Te.ERROR){const n=e.map(Sh);ns.error(`Firestore (${ci}): ${t}`,...n)}}function Ys(t,...e){if(ns.logLevel<=Te.WARN){const n=e.map(Sh);ns.warn(`Firestore (${ci}): ${t}`,...n)}}function Sh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Le(t,e){t||ge()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class y1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class v1{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new dv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new vt(e)}}class E1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class T1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new E1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,oe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new w1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=A1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function Js(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new st(0,0))}static max(){return new me(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends po{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const b1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends po{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return b1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new re(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new re(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new re(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Fe.fromString(e))}static fromName(e){return new ue(Fe.fromString(e).popFirst(5))}static empty(){return new ue(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Fe(e.slice()))}}function R1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Ir(s,ue.empty(),e)}function S1(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(me.min(),ue.empty(),-1)}static max(){return new Ir(me.max(),ue.empty(),-1)}}function C1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==P1)throw t;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function O1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Lo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ch.oe=-1;function Fc(t){return t==null}function nc(t){return t===0&&1/t==-1/0}function N1(t){return typeof t=="number"&&Number.isInteger(t)&&!nc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jp(this.data.getIterator())}getIteratorFrom(e){return new jp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class jp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new on([])}unionWith(e){let n=new ft(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gv("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const D1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Le(!!t),typeof t=="string"){let e=0;const n=D1.exec(t);if(Le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rs(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kh(t){const e=t.mapValue.fields.__previous_value__;return Ph(e)?kh(e):e}function go(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ph(t)?4:M1(t)?9007199254740991:10:ge()}function An(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ar(s.timestampValue),c=Ar(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rs(s.bytesValue).isEqual(rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),c=Ze(i.doubleValue);return o===c?nc(o)===nc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if($p(o)!==$p(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!An(o[l],c[l])))return!1;return!0}(t,e);default:return ge()}}function _o(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ze(i.integerValue||i.doubleValue),l=Ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return qp(t.timestampValue,e.timestampValue);case 4:return qp(go(t),go(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const c=rs(i),l=rs(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Ce(c[u],l[u]);if(d!==0)return d}return Ce(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ce(Ze(i.latitude),Ze(o.latitude));return c!==0?c:Ce(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const d=Xs(c[u],l[u]);if(d)return d}return Ce(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===va.mapValue&&o===va.mapValue)return 0;if(i===va.mapValue)return 1;if(o===va.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Ce(l[p],d[p]);if(g!==0)return g;const T=Xs(c[l[p]],u[d[p]]);if(T!==0)return T}return Ce(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function qp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=Ar(t),r=Ar(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function Zs(t){return vu(t)}function vu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vu(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function Hp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eu(t){return!!t&&"integerValue"in t}function Oh(t){return!!t&&"arrayValue"in t}function Kp(t){return!!t&&"nullValue"in t}function Wp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function M1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Qi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Pa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){li(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Yt(Qi(this.value))}}function mv(t){const e=[];return li(t.fields,(n,r)=>{const s=new dt([n]);if(Pa(r)){const i=mv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,me.min(),me.min(),me.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,me.min(),me.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,me.min(),me.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rc{constructor(e,n){this.position=e,this.inclusive=n}}function Gp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function L1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _v{}class et extends _v{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F1(e,n,r):n==="array-contains"?new $1(e,r):n==="in"?new j1(e,r):n==="not-in"?new q1(e,r):n==="array-contains-any"?new H1(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U1(e,r):new B1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends _v{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return yv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yv(t){return t.op==="and"}function vv(t){return x1(t)&&yv(t)}function x1(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Tu(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(vv(t))return t.filters.map(e=>Tu(e)).join(",");{const e=t.filters.map(n=>Tu(n)).join(",");return`${t.op}(${e})`}}function Ev(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&An(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Ev(o,s.filters[c]),!0):!1}(t,e):void ge()}function Tv(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Tv).join(" ,")+"}"}(t):"Filter"}class F1 extends et{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class U1 extends et{constructor(e,n){super(e,"in",n),this.keys=wv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class B1 extends et{constructor(e,n){super(e,"not-in",n),this.keys=wv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class $1 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Oh(n)&&_o(n.arrayValue,this.value)}}class j1 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class q1 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class H1 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_o(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Qp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new K1(t,e,n,r,s,i,o)}function Nh(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.ue=n}return e.ue}function Dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!L1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ev(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zp(t.startAt,e.startAt)&&zp(t.endAt,e.endAt)}function wu(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function W1(t,e,n,r,s,i,o,c){return new xo(t,e,n,r,s,i,o,c)}function Vh(t){return new xo(t)}function Yp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Iv(t){return t.collectionGroup!==null}function Yi(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ft(dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new sc(i,r))}),n.has(dt.keyField().canonicalString())||e.ce.push(new sc(dt.keyField(),r))}return e.ce}function vn(t){const e=_e(t);return e.le||(e.le=G1(e,Yi(t))),e.le}function G1(t,e){if(t.limitType==="F")return Qp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new sc(s.field,i)});const n=t.endAt?new rc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new rc(t.startAt.position,t.startAt.inclusive):null;return Qp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Iu(t,e){const n=t.filters.concat([e]);return new xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Au(t,e,n){return new xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return Dh(vn(t),vn(e))&&t.limitType===e.limitType}function Av(t){return`${Nh(vn(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Tv(s)).join(", ")}]`),Fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zs(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function Bc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Gp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Yi(r),s)||r.endAt&&!function(o,c,l){const u=Gp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Yi(r),s))}(t,e)}function z1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bv(t){return(e,n)=>{let r=!1;for(const s of Yi(t)){const i=Q1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Q1(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Xs(l,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new Ge(ue.comparator);function qn(){return Y1}const Rv=new Ge(ue.comparator);function xi(...t){let e=Rv;for(const n of t)e=e.insert(n.key,n);return e}function Sv(t){let e=Rv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return Ji()}function Cv(){return Ji()}function Ji(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const J1=new Ge(ue.comparator),X1=new ft(ue.comparator);function ve(...t){let e=X1;for(const n of t)e=e.add(n);return e}const Z1=new ft(Ce);function ek(){return Z1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function kv(t){return{integerValue:""+t}}function tk(t,e){return N1(e)?kv(e):Pv(t,e)}/**
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
 */class $c{constructor(){this._=void 0}}function nk(t,e,n){return t instanceof ic?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ph(i)&&(i=kh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof yo?Nv(t,e):t instanceof vo?Dv(t,e):function(s,i){const o=Ov(s,i),c=Jp(o)+Jp(s.Pe);return Eu(o)&&Eu(s.Pe)?kv(c):Pv(s.serializer,c)}(t,e)}function rk(t,e,n){return t instanceof yo?Nv(t,e):t instanceof vo?Dv(t,e):n}function Ov(t,e){return t instanceof oc?function(r){return Eu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ic extends $c{}class yo extends $c{constructor(e){super(),this.elements=e}}function Nv(t,e){const n=Vv(e);for(const r of t.elements)n.some(s=>An(s,r))||n.push(r);return{arrayValue:{values:n}}}class vo extends $c{constructor(e){super(),this.elements=e}}function Dv(t,e){let n=Vv(e);for(const r of t.elements)n=n.filter(s=>!An(s,r));return{arrayValue:{values:n}}}class oc extends $c{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jp(t){return Ze(t.integerValue||t.doubleValue)}function Vv(t){return Oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yo&&s instanceof yo||r instanceof vo&&s instanceof vo?Js(r.elements,s.elements,An):r instanceof oc&&s instanceof oc?An(r.Pe,s.Pe):r instanceof ic&&s instanceof ic}(t.transform,e.transform)}class ik{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ka(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mh(t.key,En.none()):new Fo(t.key,t.data,En.none());{const n=t.data,r=Yt.empty();let s=new ft(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hs(t.key,r,new on(s.toArray()),En.none())}}function ok(t,e,n){t instanceof Fo?function(s,i,o){const c=s.value.clone(),l=Zp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof hs?function(s,i,o){if(!ka(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Zp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Lv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xi(t,e,n,r){return t instanceof Fo?function(i,o,c,l){if(!ka(i.precondition,o))return c;const u=i.value.clone(),d=eg(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof hs?function(i,o,c,l){if(!ka(i.precondition,o))return c;const u=eg(i.fieldTransforms,l,o),d=o.data;return d.setAll(Lv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return ka(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function ak(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ov(r.transform,s||null);i!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,i))}return n||null}function Xp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Js(r,s,(i,o)=>sk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends jc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hs extends jc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zp(t,e,n){const r=new Map;Le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,rk(o,c,n[s]))}return r}function eg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,nk(i,o,e))}return r}class Mh extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ck extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ok(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Cv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Mv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,r)=>Xp(n,r))&&Js(this.baseMutations,e.baseMutations,(n,r)=>Xp(n,r))}}class Lh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Le(e.mutations.length===r.length);let s=function(){return J1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lh(e,n,r,s)}}/**
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
 */class uk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,we;function dk(t){switch(t){default:return ge();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function xv(t){if(t===void 0)return jn("GRPC error has no .code"),q.UNKNOWN;switch(t){case Xe.OK:return q.OK;case Xe.CANCELLED:return q.CANCELLED;case Xe.UNKNOWN:return q.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return q.INTERNAL;case Xe.UNAVAILABLE:return q.UNAVAILABLE;case Xe.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Xe.NOT_FOUND:return q.NOT_FOUND;case Xe.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Xe.ABORTED:return q.ABORTED;case Xe.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Xe.DATA_LOSS:return q.DATA_LOSS;default:return ge()}}(we=Xe||(Xe={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fk(){return new TextEncoder}/**
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
 */const pk=new Gr([4294967295,4294967295],0);function tg(t){const e=fk().encode(t),n=new iv;return n.update(e),new Uint8Array(n.digest())}function ng(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class xh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fi(`Invalid padding: ${n}`);if(r<0)throw new Fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Gr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Gr.fromNumber(r)));return s.compare(pk)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tg(e),[r,s]=ng(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=tg(e),[r,s]=ng(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qc(me.min(),s,new Ge(Ce),qn(),ve())}}class Uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Fv{constructor(e,n){this.targetId=e,this.me=n}}class Uv{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rg{constructor(){this.fe=0,this.ge=ig(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new Uo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=ig()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gk{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=sg(),this.Qe=new Ge(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(wu(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,Et.newNoDocument(o,me.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=rs(r).toUint8Array()}catch(l){if(l instanceof gv)return Ys("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new xh(o,s,i)}catch(l){return Ys(l instanceof Fi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&wu(c.target)){const l=new ue(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Et.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ve();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new qc(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=sg(),this.Qe=new Ge(Ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sg(){return new Ge(ue.comparator)}function ig(){return new Ge(ue.comparator)}const mk={asc:"ASCENDING",desc:"DESCENDING"},_k={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yk={and:"AND",or:"OR"};class vk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bu(t,e){return t.useProto3Json||Fc(e)?e:{value:e}}function ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ek(t,e){return ac(t,e.toTimestamp())}function Tn(t){return Le(!!t),me.fromTimestamp(function(n){const r=Ar(n);return new st(r.seconds,r.nanos)}(t))}function Fh(t,e){return Ru(t,e).canonicalString()}function Ru(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $v(t){const e=Fe.fromString(t);return Le(Wv(e)),e}function Su(t,e){return Fh(t.databaseId,e.path)}function Vl(t,e){const n=$v(e);if(n.get(1)!==t.databaseId.projectId)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(qv(n))}function jv(t,e){return Fh(t.databaseId,e)}function Tk(t){const e=$v(t);return e.length===4?Fe.emptyPath():qv(e)}function Cu(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qv(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function og(t,e,n){return{name:Su(t,e),fields:n.value.mapValue.fields}}function wk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Le(d===void 0||typeof d=="string"),It.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),It.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?q.UNKNOWN:xv(u.code);return new re(d,u.message||"")}(o);n=new Uv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vl(t,r.document.name),i=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):me.min(),c=new Yt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Oa(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vl(t,r.document),i=r.readTime?Tn(r.readTime):me.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Oa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vl(t,r.document),i=r.removedTargetIds||[];n=new Oa([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hk(s,i),c=r.targetId;n=new Fv(c,o)}}return n}function Ik(t,e){let n;if(e instanceof Fo)n={update:og(t,e.key,e.value)};else if(e instanceof Mh)n={delete:Su(t,e.key)};else if(e instanceof hs)n={update:og(t,e.key,e.data),updateMask:Nk(e.fieldMask)};else{if(!(e instanceof ck))return ge();n={verify:Su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ic)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof oc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ek(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function Ak(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Tn(s.updateTime):Tn(i);return o.isEqual(me.min())&&(o=Tn(i)),new ik(o,s.transformResults||[])}(n,e))):[]}function bk(t,e){return{documents:[jv(t,e.path)]}}function Rk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jv(t,s);const i=function(u){if(u.length!==0)return Kv(hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Is(g.field),direction:Pk(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=bu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function Sk(t){let e=Tk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Le(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Hv(p);return g instanceof hn&&vv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new sc(As(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Fc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,T=p.values||[];return new rc(T,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,T=p.values||[];return new rc(T,g)}(n.endAt)),W1(e,s,o,i,c,"F",l,u)}function Ck(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=As(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return et.create(As(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>Hv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function Pk(t){return mk[t]}function kk(t){return _k[t]}function Ok(t){return yk[t]}function Is(t){return{fieldPath:t.canonicalString()}}function As(t){return dt.fromServerFormat(t.fieldPath)}function Kv(t){return t instanceof et?function(n){if(n.op==="=="){if(Wp(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(Kp(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wp(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(Kp(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:kk(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>Kv(s));return r.length===1?r[0]:{compositeFilter:{op:Ok(n.op),filters:r}}}(t):ge()}function Nk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,s,i=me.min(),o=me.min(),c=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.ct=e}}function Vk(t){const e=Sk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Au(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this._n=new Lk}addToCollectionParentIndex(e,n){return this._n.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Ir.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class Lk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ei(0)}static Ln(){return new ei(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.changes=new ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xi(r.mutation,s,on.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=$r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=qn();const o=Ji(),c=function(){return Ji()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof hs)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Xi(d.mutation,u,d.mutation.getFieldMask(),st.now())):o.set(u.key,on.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new Fk(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ji();let s=new Ge((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||on.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Cv();d.forEach(g=>{if(!i.has(g)){const T=Mv(n.get(g),r.get(g));T!==null&&p.set(g,T),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Iv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve($r());let c=-1,l=i;return o.next(u=>K.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?K.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(d=>({batchId:c,changes:Sv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xi();return this.indexManager.getCollectionParents(e,i).next(c=>K.forEach(c,l=>{const u=function(p,g){return new xo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let c=xi();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Xi(d.mutation,u,on.empty(),st.now()),Bc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return K.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Vk(s.bundledQuery),readTime:Tn(s.readTime)}}(n)),K.resolve()}}/**
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
 */class $k{constructor(){this.overlays=new Ge(ue.comparator),this.hr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=$r(),i=n.length+1,o=new ue(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=$r(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=$r(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return K.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uk(n,r));let i=this.hr.get(n);i===void 0&&(i=ve(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.Pr=new ft(at.Ir),this.Tr=new ft(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new at(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ue(new Fe([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ue(new Fe([])),r=new at(n,e),s=new at(n,e+1);let i=ve();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ue.comparator(e.key,n.key)||Ce(e.pr,n.pr)}static Er(e,n){return Ce(e.pr,n.pr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ft(at.Ir)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new at(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(Ce);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),K.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new at(new ue(i),0);let c=new ft(Ce);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),K.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return K.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new at(n,0),s=this.wr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.vr=e,this.docs=function(){return new Ge(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,c=new ue(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||C1(S1(d),r)<=0||(s.has(d.key)||Bc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Fr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Hk(this)}getSize(e){return K.resolve(this.size)}}class Hk extends xk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.persistence=e,this.Mr=new ui(n=>Nh(n),Dh),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Uh,this.targetCount=0,this.Lr=ei.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),K.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ei(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.qn(n),K.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ch(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Kk(this),this.indexManager=new Mk,this.remoteDocumentCache=function(s){return new qk(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Dk(n),this.$r=new Bk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $k,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new jk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){oe("MemoryPersistence","Starting transaction:",e);const s=new Gk(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Gk extends k1{constructor(e){super(),this.currentSequenceNumber=e}}class Bh{constructor(e){this.persistence=e,this.zr=new Uh,this.jr=null}static Hr(e){return new Bh(e)}get Jr(){if(this.jr)return this.jr;throw ge()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),K.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Jr,r=>{const s=ue.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return K.or([()=>K.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $h(e,n.fromCache,r,s)}}/**
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
 */class Qk{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Fb()?8:O1(pt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zk;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Oi()<=Te.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),K.resolve()):(Oi()<=Te.DEBUG&&oe("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Oi()<=Te.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):K.resolve())}ji(e,n){if(Yp(n))return K.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Au(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Au(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return Yp(n)||s.isEqual(me.min())?K.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?K.resolve(null):(Oi()<=Te.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ws(n)),this.es(e,o,n,R1(s,-1)).next(c=>c))})}Zi(e,n){let r=new ft(bv(e));return n.forEach((s,i)=>{Bc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Oi()<=Te.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",ws(n)),this.zi.getDocumentsMatchingQuery(e,n,Ir.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Ge(Ce),this.rs=new ui(i=>Nh(i),Dh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function Jk(t,e,n,r){return new Yk(t,e,n,r)}async function Gv(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function Xk(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,g=p.keys();let T=K.resolve();return g.forEach(R=>{T=T.next(()=>d.getEntry(l,R)).next(P=>{const D=u.docVersions.get(R);Le(D!==null),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function zv(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Zk(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(It.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(p,T),function(P,D,F){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,T,d)&&c.push(n.Qr.updateTargetData(i,T))});let l=qn(),u=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(eO(i,o,e.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!r.isEqual(me.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return K.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function eO(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(me.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):oe("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function tO(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nO(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Pu(t,e,n){const r=_e(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Lo(o))throw o;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function ag(t,e,n){const r=_e(t);let s=me.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=_e(l),g=p.rs.get(d);return g!==void 0?K.resolve(p.ns.get(g)):p.Qr.getTargetData(u,d)}(r,o,vn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:ve())).next(c=>(rO(r,z1(e),c),{documents:c,hs:i})))}function rO(t,e,n){let r=t.ss.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class cg{constructor(){this.activeTargetIds=ek()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sO{constructor(){this.no=new cg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ea=null;function Ml(){return Ea===null?Ea=function(){return 268435456+Math.round(2147483648*Math.random())}():Ea++,"0x"+Ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class cO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=Ml(),l=this.vo(n,r.toUriEncodedString());oe("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(d=>(oe("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Ys("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=oO[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Ml();return new Promise((o,c)=>{const l=new ov;l.setWithCredentials(!0),l.listenOnce(cv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ca.NO_ERROR:const d=l.getResponseJson();oe(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ca.TIMEOUT:oe(yt,`RPC '${e}' ${i} timed out`),c(new re(q.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const p=l.getStatus();if(oe(yt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const R=function(D){const F=D.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(F)>=0?F:q.UNKNOWN}(T.status);c(new re(R,T.message))}else c(new re(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new re(q.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{oe(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);oe(yt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=Ml(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hv(),c=uv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new av({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");oe(yt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,T=!1;const R=new aO({lo:D=>{T?oe(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(oe(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),oe(yt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},ho:()=>p.close()}),P=(D,F,k)=>{D.listen(F,C=>{try{k(C)}catch(N){setTimeout(()=>{throw N},0)}})};return P(p,Li.EventType.OPEN,()=>{T||(oe(yt,`RPC '${e}' stream ${s} transport opened.`),R.mo())}),P(p,Li.EventType.CLOSE,()=>{T||(T=!0,oe(yt,`RPC '${e}' stream ${s} transport closed`),R.po())}),P(p,Li.EventType.ERROR,D=>{T||(T=!0,Ys(yt,`RPC '${e}' stream ${s} transport errored:`,D),R.po(new re(q.UNAVAILABLE,"The operation could not be completed")))}),P(p,Li.EventType.MESSAGE,D=>{var F;if(!T){const k=D.data[0];Le(!!k);const C=k,N=C.error||((F=C[0])===null||F===void 0?void 0:F.error);if(N){oe(yt,`RPC '${e}' stream ${s} received error:`,N);const x=N.status;let V=function(m){const y=Xe[m];if(y!==void 0)return xv(y)}(x),b=N.message;V===void 0&&(V=q.INTERNAL,b="Unknown error status: "+x+" with message "+N.message),T=!0,R.po(new re(V,b)),p.close()}else oe(yt,`RPC '${e}' stream ${s} received:`,k),R.yo(k)}}),P(c,lv.STAT_EVENT,D=>{D.stat===yu.PROXY?oe(yt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===yu.NOPROXY&&oe(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}function Ll(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return new vk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&oe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Qv(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new re(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lO extends Yv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=wk(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?Tn(o.readTime):me.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Cu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=wu(l)?{documents:bk(i,l)}:{query:Rk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Bv(i,o.resumeToken);const u=bu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){c.readTime=ac(i,o.snapshotVersion.toTimestamp());const u=bu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Ck(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Cu(this.serializer),n.removeTarget=e,this.i_(n)}}class uO extends Yv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Ak(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.A_(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Cu(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ik(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,Ru(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(q.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Ru(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(q.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class dO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(jn(n),this.y_=!1):oe("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{ds(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.M_.add(4),await Bo(u),u.N_.set("Unknown"),u.M_.delete(4),await Kc(u)}(this))})}),this.N_=new dO(r,s)}}async function Kc(t){if(ds(t))for(const e of t.x_)await e(!0)}async function Bo(t){for(const e of t.x_)await e(!1)}function Jv(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Kh(n)?Hh(n):hi(n).Xo()&&qh(n,e))}function jh(t,e){const n=_e(t),r=hi(n);n.F_.delete(e),r.Xo()&&Xv(n,e),n.F_.size===0&&(r.Xo()?r.n_():ds(n)&&n.N_.set("Unknown"))}function qh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hi(t).P_(e)}function Xv(t,e){t.L_.xe(e),hi(t).I_(e)}function Hh(t){t.L_=new gk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),hi(t).start(),t.N_.w_()}function Kh(t){return ds(t)&&!hi(t).Zo()&&t.F_.size>0}function ds(t){return _e(t).M_.size===0}function Zv(t){t.L_=void 0}async function pO(t){t.N_.set("Online")}async function gO(t){t.F_.forEach((e,n)=>{qh(t,e)})}async function mO(t,e){Zv(t),Kh(t)?(t.N_.D_(e),Hh(t)):t.N_.set("Unknown")}async function _O(t,e,n){if(t.N_.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cc(t,r)}else if(e instanceof Oa?t.L_.Ke(e):e instanceof Fv?t.L_.He(e):t.L_.We(e),!n.isEqual(me.min()))try{const r=await zv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(u);d&&i.F_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(It.EMPTY_BYTE_STRING,d.snapshotVersion)),Xv(i,l);const p=new fr(d.target,l,u,d.sequenceNumber);qh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){oe("RemoteStore","Failed to raise snapshot:",r),await cc(t,r)}}async function cc(t,e,n){if(!Lo(e))throw e;t.M_.add(1),await Bo(t),t.N_.set("Offline"),n||(n=()=>zv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Kc(t)})}function eE(t,e){return e().catch(n=>cc(t,n,e))}async function Wc(t){const e=_e(t),n=br(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;yO(e);)try{const s=await tO(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,vO(e,s)}catch(s){await cc(e,s)}tE(e)&&nE(e)}function yO(t){return ds(t)&&t.v_.length<10}function vO(t,e){t.v_.push(e);const n=br(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function tE(t){return ds(t)&&!br(t).Zo()&&t.v_.length>0}function nE(t){br(t).start()}async function EO(t){br(t).V_()}async function TO(t){const e=br(t);for(const n of t.v_)e.d_(n.mutations)}async function wO(t,e,n){const r=t.v_.shift(),s=Lh.from(r,e,n);await eE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wc(t)}async function IO(t,e){e&&br(t).E_&&await async function(r,s){if(function(o){return dk(o)&&o!==q.ABORTED}(s.code)){const i=r.v_.shift();br(r).t_(),await eE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wc(r)}}(t,e),tE(t)&&nE(t)}async function ug(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.M_.add(3),await Bo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Kc(n)}async function AO(t,e){const n=_e(t);e?(n.M_.delete(2),await Kc(n)):e||(n.M_.add(2),await Bo(n),n.N_.set("Unknown"))}function hi(t){return t.B_||(t.B_=function(n,r,s){const i=_e(n);return i.f_(),new lO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:pO.bind(null,t),To:gO.bind(null,t),Ao:mO.bind(null,t),h_:_O.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Kh(t)?Hh(t):t.N_.set("Unknown")):(await t.B_.stop(),Zv(t))})),t.B_}function br(t){return t.k_||(t.k_=function(n,r,s){const i=_e(n);return i.f_(),new uO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:EO.bind(null,t),Ao:IO.bind(null,t),R_:TO.bind(null,t),A_:wO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Wc(t)):(await t.k_.stop(),t.v_.length>0&&(oe("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Wh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gh(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Lo(t))return new re(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=xi(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.q_=new Ge(ue.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ge():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ti{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ti(e,n,js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class RO{constructor(){this.queries=new ui(e=>Av(e),Uc),this.onlineState="Unknown",this.z_=new Set}}async function rE(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new bO,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Gh(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&zh(n)}async function sE(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SO(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&zh(n)}function CO(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function zh(t){t.z_.forEach(e=>{e.next()})}var ku,dg;(dg=ku||(ku={})).J_="default",dg.Cache="cache";class iE{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==ku.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.key=e}}class aE{constructor(e){this.key=e}}class PO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ve(),this.mutatedKeys=ve(),this.Ia=bv(e),this.Ta=new js(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new hg,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),T=Bc(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let D=!1;g&&T?g.data.isEqual(T.data)?R!==P&&(r.track({type:3,doc:T}),D=!0):this.Ra(g,T)||(r.track({type:2,doc:T}),D=!0,(l&&this.Ia(T,l)>0||u&&this.Ia(T,u)<0)&&(c=!0)):!g&&T?(r.track({type:0,doc:T}),D=!0):g&&!T&&(r.track({type:1,doc:g}),D=!0,(l||u)&&(c=!0)),D&&(T?(o=o.add(T),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(T,R){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return P(T)-P(R)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new ti(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new hg,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ve(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new aE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new oE(r))}),n}pa(e){this.la=e.hs,this.Pa=ve();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ti.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class kO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OO{constructor(e){this.key=e,this.wa=!1}}class NO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ui(c=>Av(c),Uc),this.Da=new Map,this.Ca=new Set,this.va=new Ge(ue.comparator),this.Fa=new Map,this.Ma=new Uh,this.xa={},this.Oa=new Map,this.Na=ei.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function DO(t,e,n=!0){const r=fE(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await cE(r,e,n,!0),s}async function VO(t,e){const n=fE(t);await cE(n,e,!0,!1)}async function cE(t,e,n,r){const s=await nO(t.localStore,vn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await MO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Jv(t.remoteStore,s),c}async function MO(t,e,n,r,s){t.Ba=(p,g,T)=>async function(P,D,F,k){let C=D.view.da(F);C.Xi&&(C=await ag(P.localStore,D.query,!1).then(({documents:b})=>D.view.da(b,C)));const N=k&&k.targetChanges.get(D.targetId),x=k&&k.targetMismatches.get(D.targetId)!=null,V=D.view.applyChanges(C,P.isPrimaryClient,N,x);return pg(P,D.targetId,V.fa),V.snapshot}(t,p,g,T);const i=await ag(t.localStore,e,!0),o=new PO(e,i.hs),c=o.da(i.documents),l=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);pg(t,n,u.fa);const d=new kO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function LO(t,e,n){const r=_e(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Uc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&jh(r.remoteStore,s.targetId),Ou(r,s.targetId)}).catch(Mo)):(Ou(r,s.targetId),await Pu(r.localStore,s.targetId,!0))}async function xO(t,e){const n=_e(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jh(n.remoteStore,r.targetId))}async function FO(t,e,n){const r=KO(t);try{const s=await function(o,c){const l=_e(o),u=st.now(),d=c.reduce((T,R)=>T.add(R.key),ve());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=qn(),P=ve();return l.os.getEntries(T,d).next(D=>{R=D,R.forEach((F,k)=>{k.isValidDocument()||(P=P.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,R)).next(D=>{p=D;const F=[];for(const k of c){const C=ak(k,p.get(k.key).overlayedDocument);C!=null&&F.push(new hs(k.key,C,mv(C.value.mapValue),En.exists(!0)))}return l.mutationQueue.addMutationBatch(T,u,F,c)}).next(D=>{g=D;const F=D.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(T,D.batchId,F)})}).then(()=>({batchId:g.batchId,changes:Sv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Ge(Ce)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await $o(r,s.changes),await Wc(r.remoteStore)}catch(s){const i=Gh(s,"Failed to persist write");n.reject(i)}}async function lE(t,e){const n=_e(t);try{const r=await Zk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Le(o.wa):s.removedDocuments.size>0&&(Le(o.wa),o.wa=!1))}),await $o(n,r,e)}catch(r){await Mo(r)}}function fg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(c)&&(u=!0)}),u&&zh(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UO(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Ge(ue.comparator);o=o.insert(i,Et.newNoDocument(i,me.min()));const c=ve().add(i),l=new qc(me.min(),new Map,new Ge(Ce),o,c);await lE(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Qh(r)}else await Pu(r.localStore,e,!1).then(()=>Ou(r,e,n)).catch(Mo)}async function BO(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await Xk(n.localStore,e);hE(n,r,null),uE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $o(n,s)}catch(s){await Mo(s)}}async function $O(t,e,n){const r=_e(t);try{const s=await function(o,c){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Le(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);hE(r,e,n),uE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $o(r,s)}catch(s){await Mo(s)}}function uE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function hE(t,e,n){const r=_e(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||dE(t,r)})}function dE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(jh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Qh(t))}function pg(t,e,n){for(const r of n)r instanceof oE?(t.Ma.addReference(r.key,e),jO(t,r)):r instanceof aE?(oe("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||dE(t,r.key)):ge()}function jO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(oe("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Qh(t))}function Qh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ue(Fe.fromString(e)),r=t.Na.next();t.Fa.set(r,new OO(n)),t.va=t.va.insert(n,r),Jv(t.remoteStore,new fr(vn(Vh(n.path)),r,"TargetPurposeLimboResolution",Ch.oe))}}async function $o(t,e,n){const r=_e(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const d=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=$h.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const d=_e(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(u,g=>K.forEach(g.qi,T=>d.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>K.forEach(g.Qi,T=>d.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!Lo(p))throw p;oe("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const T=d.ns.get(g),R=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(g,P)}}}(r.localStore,i))}async function qO(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const r=await Gv(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new re(q.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $o(n,r.us)}}function HO(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return ve().add(r.key);{let s=ve();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function fE(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UO.bind(null,e),e.Sa.h_=SO.bind(null,e.eventManager),e.Sa.ka=CO.bind(null,e.eventManager),e}function KO(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$O.bind(null,e),e}class gg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Jk(this.persistence,new Qk,e.initialUser,this.serializer)}createPersistence(e){return new Wk(Bh.Hr,this.serializer)}createSharedClientState(e){return new sO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qO.bind(null,this.syncEngine),await AO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RO}()}createDatastore(e){const n=Hc(e.databaseInfo.databaseId),r=function(i){return new cO(i)}(e.databaseInfo);return function(i,o,c,l){return new hO(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new fO(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>fg(this.syncEngine,n,0),function(){return lg.D()?new lg:new iO}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new NO(s,i,o,c,l,u);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=_e(r);oe("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Bo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=fv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{oe("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(oe("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xl(t,e){t.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QO(t);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ug(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ug(e.remoteStore,s)),t._onlineComponents=e}function zO(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function QO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await xl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!zO(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await xl(t,new gg)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await xl(t,new gg);return t._offlineComponents}async function gE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await mg(t,t._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await mg(t,new WO))),t._onlineComponents}function YO(t){return gE(t).then(e=>e.syncEngine)}async function mE(t){const e=await gE(t),n=e.eventManager;return n.onListen=DO.bind(null,e.syncEngine),n.onUnlisten=LO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xO.bind(null,e.syncEngine),n}function JO(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new pE({next:g=>{o.enqueueAndForget(()=>sE(i,p));const T=g.docs.has(c);!T&&g.fromCache?u.reject(new re(q.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&l&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new iE(Vh(c.path),d,{includeMetadataChanges:!0,ra:!0});return rE(i,p)}(await mE(t),t.asyncQueue,e,n,r)),r.promise}function XO(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new pE({next:g=>{o.enqueueAndForget(()=>sE(i,p)),g.fromCache&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new iE(c,d,{includeMetadataChanges:!0,ra:!0});return rE(i,p)}(await mE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function _E(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e,n){if(!n)throw new re(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZO(t,e,n,r){if(e===!0&&r===!0)throw new re(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yg(t){if(!ue.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if(ue.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new re(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_E((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _1;switch(r.type){case"firstParty":return new T1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_g.get(n);r&&(oe("ComponentProvider","Removing Datastore"),_g.delete(n),r.terminate())}(this),Promise.resolve()}}function eN(t,e,n,r={}){var s;const i=(t=is(t,zc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=vt.MOCK_USER;else{c=Db(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(u)}t._authCredentials=new y1(new dv(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class yr extends di{constructor(e,n,r){super(e,n,Vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new ue(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function Fr(t,e,...n){if(t=gt(t),yE("collection","path",e),t instanceof zc){const r=Fe.fromString(e,...n);return vg(r),new yr(t,null,r)}{if(!(t instanceof qt||t instanceof yr))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return vg(r),new yr(t.firestore,null,r)}}function Na(t,e,...n){if(t=gt(t),arguments.length===1&&(e=fv.newId()),yE("doc","path",e),t instanceof zc){const r=Fe.fromString(e,...n);return yg(r),new qt(t,null,new ue(r))}{if(!(t instanceof qt||t instanceof yr))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return yg(r),new qt(t.firestore,t instanceof yr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Qv(this,"async_queue_retry"),this.hu=()=>{const n=Ll();n&&oe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Un;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Lo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Wh.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ge()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class jo extends zc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new tN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vE(this),this._firestoreClient.terminate()}}function nN(t,e){const n=typeof t=="object"?t:lh(),r=typeof t=="string"?t:"(default)",s=ls(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ob("firestore");i&&eN(s,...i)}return s}function Yh(t){return t._firestoreClient||vE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vE(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new V1(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_E(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new GO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ni(It.fromBase64String(e))}catch(n){throw new re(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ni(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=/^__.*__$/;class sN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}function TE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Zh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return lc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(TE(this.fu)&&rN.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class iN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hc(e)}Fu(e,n,r,s=!1){return new Zh({fu:e,methodName:n,vu:r,path:dt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wE(t){const e=t._freezeSettings(),n=Hc(t._databaseId);return new iN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oN(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);bE("Data must be an object, but it was:",o,r);const c=IE(r,o);let l,u;if(i.merge)l=new on(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=cN(e,p,n);if(!o.contains(g))throw new re(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);uN(d,g)||d.push(g)}l=new on(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new sN(new Yt(c),l,u)}function aN(t,e,n,r=!1){return ed(n,t.Fu(r?4:3,e))}function ed(t,e){if(AE(t=gt(t)))return bE("Unsupported field value:",e,t),IE(t,e);if(t instanceof EE)return function(r,s){if(!TE(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ed(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:ac(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ac(s.serializer,i)}}if(r instanceof Xh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ni)return{bytesValue:Bv(s.serializer,r._byteString)};if(r instanceof qt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Gc(r)}`)}(t,e)}function IE(t,e){const n={};return pv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,s)=>{const i=ed(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function AE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Xh||t instanceof ni||t instanceof qt||t instanceof EE)}function bE(t,e,n){if(!AE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Gc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function cN(t,e,n){if((e=gt(e))instanceof Jh)return e._internalPath;if(typeof e=="string")return RE(t,e);throw lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const lN=new RegExp("[~\\*/\\[\\]]");function RE(t,e,n){if(e.search(lN)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jh(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new re(q.INVALID_ARGUMENT,c+t+l)}function uN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hN extends SE{data(){return super.data()}}function td(t,e){return typeof e=="string"?RE(t,e):e instanceof Jh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nd{}class fN extends nd{}function bs(t,e,...n){let r=[];e instanceof nd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof rd).length,c=i.filter(l=>l instanceof Qc).length;if(o>1||o>0&&c>0)throw new re(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Qc extends fN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qc(e,n,r)}_apply(e){const n=this._parse(e);return CE(e._query,n),new di(e.firestore,e.converter,Iu(e._query,n))}_parse(e){const n=wE(e.firestore);return function(i,o,c,l,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){wg(p,d);const T=[];for(const R of p)T.push(Tg(l,i,R));g={arrayValue:{values:T}}}else g=Tg(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||wg(p,d),g=aN(c,o,p,d==="in"||d==="not-in");return et.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zt(t,e,n){const r=e,s=td("where",t);return Qc._create(s,r,n)}class rd extends nd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)CE(o,l),o=Iu(o,l)}(e._query,n),new di(e.firestore,e.converter,Iu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Tg(t,e,n){if(typeof(n=gt(n))=="string"){if(n==="")throw new re(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iv(e)&&n.indexOf("/")!==-1)throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!ue.isDocumentKey(r))throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hp(t,new ue(r))}if(n instanceof qt)return Hp(t,n._key);throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function wg(t,e){if(!Array.isArray(t)||t.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CE(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class pN{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Xh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Le(Wv(r));const s=new mo(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PE extends SE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(td("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Da extends PE{data(e={}){return super.data(e)}}class mN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ui(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Da(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Da(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Da(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:_N(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _N(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){t=is(t,qt);const e=is(t.firestore,jo);return JO(Yh(e),t._key).then(n=>vN(e,t,n))}class kE extends pN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ni(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function Rs(t){t=is(t,di);const e=is(t.firestore,jo),n=Yh(e),r=new kE(e);return dN(t._query),XO(n,t._query).then(s=>new mN(e,r,t,s))}function yN(t){return OE(is(t.firestore,jo),[new Mh(t._key,En.none())])}function Ag(t,e){const n=is(t.firestore,jo),r=Na(t),s=gN(t.converter,e);return OE(n,[oN(wE(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,En.exists(!1))]).then(()=>r)}function OE(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>FO(await YO(r),s,i)),i.promise}(Yh(t),e)}function vN(t,e,n){const r=n.docs.get(e._key),s=new kE(t);return new PE(t,s,e._key,r,new Ui(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ci=s})(ii),In(new un("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new jo(new v1(r.getProvider("auth-internal")),new I1(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mo(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Zt(Bp,"4.6.3",e),Zt(Bp,"4.6.3","esm2017")})();const EN={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},Yc=Y_(EN);f1(Yc);const Zi=ai(Yc),pn=nN(Yc),TN=t=>(Cr("data-v-ccbacbf8"),t=t(),Pr(),t),wN={class:"container"},IN={class:"loginWindow"},AN=TN(()=>B("h1",null,"WELCOME",-1)),bN={class:"buttonBox"},RN={__name:"Login",setup(t){function e(){rS(Zi,o,c).then(l=>{i.push({name:"findcostudent"}),Ke("success","Successfully logged in!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/invalid-credential).":Ke("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":Ke("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":Ke("error","Our servers are currently overloaded :(");break;default:Ke("error",l.message);break}})}function n(){tS(Zi,o).then(()=>{Ke("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(l=>{l.message=="Firebase: Error (auth/missing-email)."&&Ke("error","Enter your email adress in the 'Email' field first!")})}function r(){Oy(Zi,s).then(l=>{Ke("success","Successfully logged in!"),Pt.credentialFromResult(l).accessToken,l.user,i.push("/")}).catch(l=>{Ke("error",l.message),l.code,l.message,l.customData.email,Pt.credentialFromError(l)})}const s=new Pt,i=Pc();x_();let o,c="";return(l,u)=>(Se(),Be("div",wN,[B("div",IN,[AN,xn(B("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=d=>Ye(o)?o.value=d:o=d)},null,512),[[Xt,wt(o)]]),xn(B("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=d=>Ye(c)?c.value=d:c=d),onKeydown:u[2]||(u[2]=ih(d=>e(),["enter"]))},null,544),[[Xt,wt(c)]]),B("div",bN,[B("button",{class:"button_white",onClick:u[3]||(u[3]=d=>e())},"Login"),B("div",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=d=>r())},"Log in with Google")]),B("a",{onClick:u[5]||(u[5]=d=>n())},"Forgot password?")])]))}},SN=us(RN,[["__scopeId","data-v-ccbacbf8"]]),CN=t=>(Cr("data-v-091ef394"),t=t(),Pr(),t),PN={class:"container"},kN={class:"loginWindow"},ON=CN(()=>B("h1",null,"CREATE ACCOUNT",-1)),NN={__name:"Register",setup(t){function e(){nS(Zi,o,c).then(u=>{u.user,i.push("/FindCostudent"),Ke("success","Successfully registered!")}).catch(u=>{switch(u.message){case"Firebase: Error (auth/email-already-in-use).":Ke("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":Ke("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":Ke("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":Ke("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":Ke("error","Our servers are currently overloaded :(");break;default:Ke("error",u.message);break}})}function n(){i.push("/login")}function r(){Oy(Zi,s).then(u=>{Ke("success","Successfully logged in!"),Pt.credentialFromResult(u).accessToken,u.user,i.push("/")}).catch(u=>{Ke("error",u.message),u.code,u.message,u.customData.email,Pt.credentialFromError(u)})}const s=new Pt,i=Pc();x_();let o,c,l="";return(u,d)=>(Se(),Be("div",PN,[B("div",kN,[ON,xn(B("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":d[0]||(d[0]=p=>Ye(o)?o.value=p:o=p)},null,512),[[Xt,wt(o)]]),xn(B("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":d[1]||(d[1]=p=>Ye(c)?c.value=p:c=p)},null,512),[[Xt,wt(c)]]),xn(B("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":d[2]||(d[2]=p=>Ye(l)?l.value=p:l=p),onKeydown:d[3]||(d[3]=ih(p=>e(),["enter"]))},null,544),[[Xt,wt(l)]]),B("button",{class:"button_white",onClick:e},"Create account"),B("button",{id:"googleLogin",class:"button_white",onClick:d[4]||(d[4]=p=>r())},"Login with Google"),B("p",null,[gr("Already have an account? "),B("a",{onClick:n},"Login here!")])])]))}},DN=us(NN,[["__scopeId","data-v-091ef394"]]),lt=t=>(Cr("data-v-ec6a2b33"),t=t(),Pr(),t),VN={class:"container"},MN={class:"formBox"},LN={class:"progressBar"},xN={key:0,class:"entry"},FN={class:"itemBox"},UN=lt(()=>B("p",null,"Subject",-1)),BN={class:"itemBox"},$N=lt(()=>B("p",null,"Location",-1)),jN={class:"itemBox",id:"date"},qN=lt(()=>B("p",null,"Date",-1)),HN=["min"],KN={class:"itemBox",id:"time"},WN={key:1,class:"searching"},GN=lt(()=>B("p",null,"SEARCHING",-1)),zN=lt(()=>B("div",{class:"loader"},null,-1)),QN=[GN,zN],YN={key:2,class:"noneFound"},JN={class:"message"},XN=lt(()=>B("p",null,"No costudents were found yet to study ",-1)),ZN={class:"button"},eD=lt(()=>B("p",null," in ",-1)),tD={class:"button"},nD=lt(()=>B("p",null," in the ",-1)),rD={class:"button"},sD=lt(()=>B("p",null," of the ",-1)),iD={class:"button"},oD=lt(()=>B("p",null,".",-1)),aD=lt(()=>B("div",{class:"finalMessage"},[B("p",null,"We'll keep on searching for other costudents."),B("p",null,"You can check in on the progress on your dashboard.")],-1)),cD={class:"buttonBox"},lD={key:3,class:"found"},uD=lt(()=>B("div",{class:"finalMessage"},[B("p",null,"We found costudents!")],-1)),hD={class:"message"},dD=lt(()=>B("p",null,"You can study ",-1)),fD={class:"button"},pD=lt(()=>B("p",null," in ",-1)),gD={class:"button"},mD=lt(()=>B("p",null," in the ",-1)),_D={class:"button"},yD=lt(()=>B("p",null," of the ",-1)),vD={class:"button"},ED=lt(()=>B("p",null," . ",-1)),TD={class:"groupDisplay"},wD=lt(()=>B("p",null,"Your group:",-1)),ID={class:"costudentNames"},AD={id:"subjects"},bD=["value"],RD={id:"locations"},SD=["value"],CD={__name:"FindCostudent",setup(t){function e(){const z=new Date,Q=z.getFullYear(),W=String(z.getMonth()+1).padStart(2,"0"),je=String(z.getDate()).padStart(2,"0");return`${Q}-${W}-${je}`}function n(z){switch(V.value=!1,b.value=!1,v.value=!1,C.value=z,z){case"morning":V.value=!0,k.value=0;break;case"afternoon":b.value=!0,k.value=1;break;case"evening":v.value=!0,k.value=2;break}}async function r(){const z=bs(I,zt("UID","==",m));return!(await Rs(z)).empty}async function s(){await r()?ye.value.includes(P.value)?de.value.includes(D.value)?o():(Ke("error","Select a location from the list!"),i()):(Ke("error","Select a subject from the list!"),i()):Ke("error","Set your username in the dashboard first!")}function i(){P.value="",D.value="",F.value=""}async function o(){R.value=1;const z=bs(y,zt("SUBJ","==",P.value),zt("LOCATION","==",D.value),zt("DATE","==",F.value),zt("TOD","==",k.value)),Q=await Rs(z);if(Q.empty)c();else{const W=[];Q.docs[0].data().MEMBERS;for(let je=0;je<=Q.docs.length;je++)W.push(Q.docs[0].data().MEMBERS[je]);d(W),R.value=3}}async function c(){const z=bs(w,zt("SUBJ","==",P.value),zt("LOCATION","==",D.value),zt("DATE","==",F.value),zt("TOD","==",k.value)),Q=await Rs(z);Q.empty?(l(),R.value=2):u(Q.docs[0].data().UID,Q.docs[0].id)}async function l(){await Ag(Fr(pn,"posts"),{SUBJ:P.value,LOCATION:D.value,DATE:F.value,UID:m,TOD:k.value,POSTDATE:x.value})}async function u(z,Q){await yN(Na(pn,"posts",Q));const W=[m,z];await Ag(Fr(pn,"groups"),{DATE:F.value,LOCATION:D.value,MEMBERS:W,SUBJ:P.value,TOD:k.value}),d(W),R.value=3}async function d(z){for(let Q=0;Q<z.length;Q++){const W=bs(I,zt("UID","==",z[Q])),je=await Rs(W);E.value.push(je.docs[0].data().NAME)}}async function p(){const z=Na(pn,"dataLists","locationData"),Q=await Ig(z);de.value=Q.data().locations}async function g(){const z=Na(pn,"dataLists","subjectData"),Q=await Ig(z);ye.value=Q.data().subjects}const T=ai(),R=Qe(0),P=Qe(""),D=Qe(""),F=Qe(""),k=Qe(0),C=Qe("");let N=e(),x=Qe(N);const V=Qe(!1),b=Qe(!1),v=Qe(!1),m=T.currentUser.uid,y=Fr(pn,"groups"),w=Fr(pn,"posts"),I=Fr(pn,"users"),E=Qe([]),de=Qe([]),ye=Qe([]);return p(),g(),(z,Q)=>(Se(),Be("div",VN,[B("div",MN,[B("div",LN,[B("p",{class:xt({active:R.value===0})},"1",2),B("div",{class:xt(["line",{completed:R.value>=1}])},null,2),B("p",{class:xt({active:R.value===1})},"2",2),B("div",{class:xt(["line",{completed:R.value>=2}])},null,2),B("p",{class:xt({active:R.value===2})},"3",2)]),R.value==0?(Se(),Be("div",xN,[B("div",FN,[UN,xn(B("input",{list:"subjects","onUpdate:modelValue":Q[0]||(Q[0]=W=>P.value=W)},null,512),[[Xt,P.value]])]),B("div",BN,[$N,xn(B("input",{list:"locations","onUpdate:modelValue":Q[1]||(Q[1]=W=>D.value=W)},null,512),[[Xt,D.value]])]),B("div",jN,[qN,xn(B("input",{type:"date",id:"date",min:wt(x),"onUpdate:modelValue":Q[2]||(Q[2]=W=>F.value=W)},null,8,HN),[[Xt,F.value]])]),B("div",KN,[B("div",{class:xt(["button",{selected:V.value}]),onClick:Q[3]||(Q[3]=W=>n("morning"))}," Morning ",2),B("div",{class:xt(["button",{selected:b.value}]),onClick:Q[4]||(Q[4]=W=>n("afternoon"))}," Afternoon ",2),B("div",{class:xt(["button",{selected:v.value}]),onClick:Q[5]||(Q[5]=W=>n("evening"))}," Evening ",2)]),B("div",{class:"button",onClick:Q[6]||(Q[6]=W=>s())}," Submit ")])):On("",!0),R.value==1?(Se(),Be("div",WN,QN)):On("",!0),R.value==2?(Se(),Be("div",YN,[B("div",JN,[XN,B("div",ZN,tt(P.value),1),eD,B("div",tD,tt(D.value),1),nD,B("div",rD,tt(C.value),1),sD,B("div",iD,tt(F.value),1),oD]),aD,B("div",cD,[Pe(wt(M_),{to:"/dashboard",class:"button"},{default:_n(()=>[gr("Dashboard")]),_:1})])])):On("",!0),R.value==3?(Se(),Be("div",lD,[uD,B("div",hD,[dD,B("div",fD,tt(P.value),1),pD,B("div",gD,tt(D.value),1),mD,B("div",_D,tt(C.value),1),yD,B("div",vD,tt(F.value),1),ED,B("div",TD,[wD,B("div",ID,[(Se(!0),Be(We,null,Ms(E.value,W=>(Se(),Be("div",{class:"button",key:E.value},[B("p",null,tt(W),1)]))),128))])])])])):On("",!0)]),B("datalist",AD,[(Se(!0),Be(We,null,Ms(ye.value,W=>(Se(),Be("option",{key:W,value:W},null,8,bD))),128))]),B("datalist",RD,[(Se(!0),Be(We,null,Ms(de.value,W=>(Se(),Be("option",{key:W,value:W},null,8,SD))),128))])]))}},PD=us(CD,[["__scopeId","data-v-ec6a2b33"]]),fi=t=>(Cr("data-v-1020a878"),t=t(),Pr(),t),kD={class:"titleContainter"},OD={class:"title"},ND=fi(()=>B("p",null,"Here you can find all your requested study sessions and groups that you're a part of.",-1)),DD={class:"itemBox"},VD=fi(()=>B("h1",null,"YOUR GROUPS",-1)),MD={class:"itemsContainer"},LD={class:"groupBox"},xD={class:"button_white"},FD={class:"button_white"},UD={class:"button_white"},BD={class:"button_white"},$D={class:"button_white"},jD={class:"commandButtons"},qD=fi(()=>B("div",{class:"button_white"}," Chat ",-1)),HD=["onClick"],KD=fi(()=>B("div",{class:"whiteSpace"},null,-1)),WD={class:"itemBox"},GD=fi(()=>B("h1",null,"YOUR STUDY REQUESTS",-1)),zD={class:"itemsContainer"},QD={class:"groupBox"},YD={class:"button_white"},JD={class:"button_white"},XD={class:"button_white"},ZD={class:"button_white"},eV=fi(()=>B("div",{class:"commandButtons"},[B("div",{class:"button_white"}," Remove ")],-1)),tV={__name:"Dashboard",setup(t){async function e(){const T=bs(u,zt("MEMBERS","array-contains",l)),R=await Rs(T);if(R.empty)console.log("No groups");else for(let P=0;P<R.docs.length;P++)n(R.docs[P].data(),P)}function n(T,R){const P={SUBJ:T.SUBJ,LOCATION:T.LOCATION,TOD:T.TOD,DATE:T.DATE,MEMBERS:T.MEMBERS,ID:R};p.value.push(P)}function r(T){switch(T){case 0:return"Morning";case 1:return"Afternoon";case 2:return"Evening"}}async function s(){const T=bs(d,zt("UID","==",l)),R=await Rs(T);if(R.empty)console.log("No posts");else for(let P=0;P<R.docs.length;P++)i(R.docs[P].data())}function i(T){const R={SUBJ:T.SUBJ,LOCATION:T.LOCATION,TOD:T.TOD,DATE:T.DATE};g.value.push(R)}function o(T){}const l=ai().currentUser.uid,u=Fr(pn,"groups"),d=Fr(pn,"posts"),p=Qe([]),g=Qe([]);return e(),s(),(T,R)=>(Se(),Be("div",kD,[B("div",OD,[B("h1",{onClick:R[0]||(R[0]=P=>e())},"DASHBOARD"),ND]),B("div",DD,[VD,(Se(!0),Be(We,null,Ms(p.value,P=>(Se(),Be("div",MD,[B("div",LD,[B("div",xD,tt(P.DATE),1),B("div",FD,tt(P.SUBJ),1),B("div",UD,tt(P.LOCATION),1),B("div",BD,tt(r(P.TOD)),1),B("div",$D,tt(P.MEMBERS.length)+" students ",1),B("div",jD,[qD,B("div",{class:"button_white",onClick:D=>(P.ID,void 0)}," Remove ",8,HD)])])]))),256))]),KD,B("div",WD,[GD,(Se(!0),Be(We,null,Ms(g.value,P=>(Se(),Be("div",zD,[B("div",QD,[B("div",YD,tt(P.DATE),1),B("div",JD,tt(P.SUBJ),1),B("div",XD,tt(P.LOCATION),1),B("div",ZD,tt(r(P.TOD)),1),eV])]))),256))])]))}},nV=us(tV,[["__scopeId","data-v-1020a878"]]),NE=wb({history:XA("/costudent-demo/"),routes:[{path:"/",name:"home",component:QC},{path:"/findcostudent",name:"findcostudent",component:PD,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:SN},{path:"/register",name:"register",component:DN},{path:"/dashboard",name:"dashboard",component:nV}]});let bg=!1,Fl=!1;NE.beforeEach((t,e,n)=>{const r=ai(),s=t.matched.some(i=>i.meta.requiresAuth);bg?s&&!Fl?(alert("No access! You need to be logged in."),n("/login")):n():Ey(r,i=>{Fl=!!i,bg=!0,s&&!Fl?(alert("No access! You need to be logged in."),n("/login")):n()})});const Jc=T_(FC);Jc.config.globalProperties.$firebase=Yc;Jc.use(NE);Jc.use(wC,{position:"bottom-right",duration:5e3,pauseOnHover:!0});Jc.mount("#app");
