parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"T3lW":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function a(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(a){return n(r,t,e,u,a)}}}}})}function i(n){return r(6,n,function(r){return function(t){return function(e){return function(u){return function(a){return function(i){return n(r,t,e,u,a,i)}}}}}})}function o(n){return r(7,n,function(r){return function(t){return function(e){return function(u){return function(a){return function(i){return function(o){return n(r,t,e,u,a,i,o)}}}}}}})}function f(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function c(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function v(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function s(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function d(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function b(n,r,t,e,u,a,i,o){return 7===n.a?n.f(r,t,e,u,a,i,o):n(r)(t)(e)(u)(a)(i)(o)}var l={$:0};function h(n,r){return{$:1,a:n,b:r}}var $=t(h);function g(n){for(var r=l,t=n.length;t--;)r=h(n[t],r);return r}var p=e(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(f(n,r.a,t.a));return g(e)});function m(n,r){for(var t,e=[],u=y(n,r,0,e);u&&(t=e.pop());u=y(t.a,t.b,0,e));return u}function y(n,r,t,e){if(t>100)return e.push(k(n,r)),!0;if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&x(5),!1;for(var u in 0>n.$&&(n=kr(n),r=kr(r)),n)if(!y(n[u],r[u],t+1,e))return!1;return!0}function j(n,r,t){if("object"!=typeof n)return n===r?0:r>n?-1:1;if(void 0===n.$)return(t=j(n.a,r.a))?t:(t=j(n.b,r.b))?t:j(n.c,r.c);for(;n.b&&r.b&&!(t=j(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var w=t(function(n,r){var t=j(n,r);return 0>t?jr:t?yr:mr}),A=0;function k(n,r){return{a:n,b:r}}function L(n){return n}function T(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function _(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=h(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=h(n.a,r);return t}var E=e(function(n,r,t){for(var e=[],u=0;n>u;u++)e[u]=t(r+u);return e}),N=t(function(n,r){for(var t=[],e=0;n>e&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,k(t,r)});function x(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var O=Math.ceil,P=Math.floor,C=Math.log,R=t(function(n,r){return r.split(n)}),S=t(function(n,r){return r.join(n)}),q=e(function(n,r,t){return t.slice(n,r)}),F=t(function(n,r){for(var t=r.length;t--;){var e=r[t],u=r.charCodeAt(t);if(56320>u||u>57343||(e=r[--t]+e),!n(L(e)))return!1}return!0}),M=t(function(n,r){return r.indexOf(n)>-1}),J=t(function(n,r){return 0===r.indexOf(n)}),z=t(function(n,r){var t=n.length;if(1>t)return l;for(var e=0,u=[];(e=r.indexOf(n,e))>-1;)u.push(e),e+=t;return g(u)});function D(n){return{$:2,b:n}}D(function(n){return"number"!=typeof n?Z("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Kr(n):!isFinite(n)||n%1?Z("an INT",n):Kr(n)});var B=D(function(n){return"boolean"==typeof n?Kr(n):Z("a BOOL",n)}),H=(D(function(n){return"number"==typeof n?Kr(n):Z("a FLOAT",n)}),D(function(n){return Kr(en(n))}),D(function(n){return"string"==typeof n?Kr(n):n instanceof String?Kr(n+""):Z("a STRING",n)})),I=t(function(n,r){return{$:6,d:n,b:r}});var K=t(function(n,r){return{$:10,b:r,h:n}}),U=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),V=t(function(n,r){try{return Q(n,JSON.parse(r))}catch(n){return Ir(f(Vr,"This is not valid JSON! "+n.message,en(r)))}}),G=t(function(n,r){return Q(n,un(r))});function Q(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Kr(n.c):Z("null",r);case 3:return Y(r)?W(n.b,r,g):Z("a LIST",r);case 4:return Y(r)?W(n.b,r,X):Z("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return Z("an OBJECT with a field named `"+t+"`",r);var e=Q(n.b,r[t]);return Ur(e)?e:Ir(f(Gr,t,e.a));case 7:var u=n.e;return Y(r)?r.length>u?(e=Q(n.b,r[u]),Ur(e)?e:Ir(f(Qr,u,e.a))):Z("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):Z("an ARRAY",r);case 8:if("object"!=typeof r||null===r||Y(r))return Z("an OBJECT",r);var a=l;for(var i in r)if(r.hasOwnProperty(i)){if(e=Q(n.b,r[i]),!Ur(e))return Ir(f(Gr,i,e.a));a=h(k(i,e.a),a)}return Kr(Pr(a));case 9:for(var o=n.f,c=n.g,v=0;c.length>v;v++){if(e=Q(c[v],r),!Ur(e))return e;o=o(e.a)}return Kr(o);case 10:return e=Q(n.b,r),Ur(e)?Q(n.h(e.a),r):e;case 11:for(var s=l,d=n.g;d.b;d=d.b){if(e=Q(d.a,r),Ur(e))return e;s=h(e.a,s)}return Ir(Wr(Pr(s)));case 1:return Ir(f(Vr,n.a,en(r)));case 0:return Kr(n.a)}}function W(n,r,t){for(var e=r.length,u=[],a=0;e>a;a++){var i=Q(n,r[a]);if(!Ur(i))return Ir(f(Qr,a,i.a));u[a]=i.a}return Kr(t(u))}function Y(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function X(n){return f(Dr,n.length,function(r){return n[r]})}function Z(n,r){return Ir(f(Vr,"Expecting "+n,en(r)))}function nn(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return nn(n.b,r.b);case 6:return n.d===r.d&&nn(n.b,r.b);case 7:return n.e===r.e&&nn(n.b,r.b);case 9:return n.f===r.f&&rn(n.g,r.g);case 10:return n.h===r.h&&nn(n.b,r.b);case 11:return rn(n.g,r.g)}}function rn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;t>e;e++)if(!nn(n[e],r[e]))return!1;return!0}var tn=t(function(n,r){return JSON.stringify(un(r),null,n)+""});function en(n){return n}function un(n){return n}var an=e(function(n,r,t){return t[n]=un(r),t});function on(n){return{$:0,a:n}}function fn(n){return{$:2,b:n,c:null}}en(null);var cn=t(function(n,r){return{$:3,b:n,d:r}}),vn=0;function sn(n){var r={$:0,e:vn++,f:n,g:null,h:[]};return gn(r),r}function dn(n){return fn(function(r){r(on(sn(n)))})}function bn(n,r){n.h.push(r),gn(n)}var ln=t(function(n,r){return fn(function(t){bn(n,r),t(on(A))})}),hn=!1,$n=[];function gn(n){if($n.push(n),!hn){for(hn=!0;n=$n.shift();)pn(n);hn=!1}}function pn(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,gn(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var mn={};function yn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function jn(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,a=n.e,i=n.f;function o(n){return f(cn,o,{$:5,b:function(r){var o=r.a;return 0===r.$?c(u,t,o,n):a&&i?v(e,t,o.i,o.j,n):c(e,t,a?o.i:o.j,n)}})}return t.h=sn(f(cn,o,n.b))}var wn=t(function(n,r){return fn(function(t){n.g(r),t(on(A))})}),An=t(function(n,r){return f(ln,n.h,{$:0,a:r})});function kn(n){return function(r){return{$:1,k:n,l:r}}}function Ln(n){return{$:2,m:n}}function Tn(n,r,t){var e={};for(var u in _n(!0,r,e,null),_n(!1,t,e,null),n)bn(n[u],{$:"fx",a:e[u]||{i:l,j:l}})}function _n(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,t,e){function u(n){for(var r=e;r;r=r.q)n=r.p(n);return n}return f(n?mn[t].e:mn[t].f,u,r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:l,j:l},n?t.i=h(r,t.i):t.j=h(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)_n(n,i.a,t,e);return;case 3:return void _n(n,r.o,t,{p:r.n,q:e})}}var En=t(function(n,r){return r});var Nn=e(function(n,r,t){return fn(function(e){function u(n){e(r(t.ah.a(n)))}var a=new XMLHttpRequest;a.addEventListener("error",function(){u(Gt)}),a.addEventListener("timeout",function(){u(Yt)}),a.addEventListener("load",function(){u(function(n,r){return f(r.status>=200&&300>r.status?Vt:Kt,function(n){return{y:n.responseURL,ax:n.status,aS:n.statusText,e:xn(n.getAllResponseHeaders())}}(r),n(r.response))}(t.ah.b,a))}),Bt(t.j)&&function(n,r,t){r.upload.addEventListener("progress",function(e){r.c||sn(f(It,n,k(t,Wt({aR:e.loaded,_:e.total}))))}),r.addEventListener("progress",function(e){r.c||sn(f(It,n,k(t,Qt({aP:e.loaded,_:e.lengthComputable?Br(e.total):Hr}))))})}(n,a,t.j.a);try{a.open(t.h,t.y,!0)}catch(n){return u(Ut(t.y))}return function(n,r){for(var t=r.e;t.b;t=t.b)n.setRequestHeader(t.a.a,t.a.b);n.timeout=r.i.a||0,n.responseType=r.ah.d,n.withCredentials=r.A}(a,t),t.P.a&&a.setRequestHeader("Content-Type",t.P.a),a.send(t.P.b),function(){a.c=!0,a.abort()}})});function xn(n){if(!n)return mt;for(var r=mt,t=n.split("\r\n"),e=t.length;e--;){var u=t[e],a=u.indexOf(": ");if(a>0){var i=u.substring(0,a),o=u.substring(a+2);r=c(Dt,i,function(n){return Br(Bt(n)?o+", "+n.a:o)},r)}}return r}var On,Pn=e(function(n,r,t){return{$:0,d:n,b:r,a:t}}),Cn=t(function(n,r){return{$:0,d:r.d,b:r.b,a:function(t){return n(r.a(t))}}}),Rn="undefined"!=typeof document?document:{};function Sn(n,r){n.appendChild(r)}function qn(n){return{$:0,a:n}}var Fn=t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b||0,u.push(i)}return a+=u.length,{$:1,c:r,d:Bn(t),e:u,f:n,b:a}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b.b||0,u.push(i)}return a+=u.length,{$:2,c:r,d:Bn(t),e:u,f:n,b:a}})})(void 0);var Mn,Jn=t(function(n,r){return{$:"a0",n:n,o:r}}),zn=t(function(n,r){return{$:"a2",n:n,o:r}}),Dn=t(function(n,r){return{$:"a3",n:n,o:r}});function Bn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?Hn(i,u,a):i[u]=a}else"className"===u?Hn(r,u,un(a)):r[u]=un(a)}return r}function Hn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function In(n,r){var t=n.$;if(5===t)return In(n.k||(n.k=n.m()),r);if(0===t)return Rn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=In(e,a)).elm_event_node_ref=a,i}if(3===t)return Kn(i=n.h(n.g),r,n.d),i;var i=n.f?Rn.createElementNS(n.f,n.c):Rn.createElement(n.c);On&&"a"==n.c&&i.addEventListener("click",On(i)),Kn(i,r,n.d);for(var o=n.e,f=0;o.length>f;f++)Sn(i,In(1===t?o[f]:o[f].b,r));return i}function Kn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Un(n,u):"a0"===e?Qn(n,r,u):"a3"===e?Vn(n,u):"a4"===e?Gn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Un(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Vn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function Gn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;void 0!==a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function Qn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=Wn(r,a),n.addEventListener(u,i,Mn&&{passive:2>Ze(a)}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Mn=!0}}))}catch(n){}function Wn(n,r){function t(r){var e=t.q,u=Q(e.a,r);if(Ur(u)){for(var a,i=Ze(e),o=u.a,f=i?3>i?o.a:o.q:o,c=1==i?o.b:3==i&&o.ab,v=(c&&r.stopPropagation(),(2==i?o.b:3==i&&o.Z)&&r.preventDefault(),n);a=v.j;){if("function"==typeof a)f=a(f);else for(var s=a.length;s--;)f=a[s](f);v=v.p}v(f,c)}}return t.q=r,t}function Yn(n,r){return n.$==r.$&&nn(n.a,r.a)}function Xn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Zn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Xn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=[],u=0;t>u;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Zn(n.k,r.k,v,0),void(v.length>0&&Xn(t,1,e,v));case 4:for(var s=n.j,d=r.j,b=!1,l=n.k;4===l.$;)b=!0,"object"!=typeof s?s=[s,l.j]:s.push(l.j),l=l.k;for(var h=r.k;4===h.$;)b=!0,"object"!=typeof d?d=[d,h.j]:d.push(h.j),h=h.k;return b&&s.length!==d.length?void Xn(t,0,e,r):((b?function(n,r){for(var t=0;n.length>t;t++)if(n[t]!==r[t])return!1;return!0}(s,d):s===d)||Xn(t,2,e,d),void Zn(l,h,t,e+1));case 0:return void(n.a!==r.a&&Xn(t,3,e,r.a));case 1:return void nr(n,r,t,e,tr);case 2:return void nr(n,r,t,e,er);case 3:if(n.h!==r.h)return void Xn(t,0,e,r);var $=rr(n.d,r.d);$&&Xn(t,4,e,$);var g=r.i(n.g,r.g);return void(g&&Xn(t,5,e,g))}}}function nr(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=rr(n.d,r.d);a&&Xn(t,4,e,a),u(n,r,t,e)}else Xn(t,0,e,r)}function rr(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Yn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=rr(n[u],r[u]||{},u);o&&((e=e||{})[u]=o)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function tr(n,r,t,e){var u=n.e,a=r.e,i=u.length,o=a.length;i>o?Xn(t,6,e,{v:o,i:i-o}):o>i&&Xn(t,7,e,{v:i,e:a});for(var f=o>i?i:o,c=0;f>c;c++){var v=u[c];Zn(v,a[c],t,++e),e+=v.b||0}}function er(n,r,t,e){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,v=f.length,s=0,d=0,b=e;c>s&&v>d;){var l=(T=o[s]).a,h=(_=f[d]).a,$=T.b,g=_.b,p=void 0,m=void 0;if(l!==h){var y=o[s+1],j=f[d+1];if(y){var w=y.a,A=y.b;m=h===w}if(j){var k=j.a,L=j.b;p=l===k}if(p&&m)Zn($,L,u,++b),ar(a,u,l,g,d,i),b+=$.b||0,ir(a,u,l,A,++b),b+=A.b||0,s+=2,d+=2;else if(p)b++,ar(a,u,h,g,d,i),Zn($,L,u,b),b+=$.b||0,s+=1,d+=2;else if(m)ir(a,u,l,$,++b),b+=$.b||0,Zn(A,g,u,++b),b+=A.b||0,s+=2,d+=1;else{if(!y||w!==k)break;ir(a,u,l,$,++b),ar(a,u,h,g,d,i),b+=$.b||0,Zn(A,L,u,++b),b+=A.b||0,s+=2,d+=2}}else Zn($,g,u,++b),b+=$.b||0,s++,d++}for(;c>s;){var T;ir(a,u,(T=o[s]).a,$=T.b,++b),b+=$.b||0,s++}for(;v>d;){var _,E=E||[];ar(a,u,(_=f[d]).a,_.b,void 0,E),d++}(u.length>0||i.length>0||E)&&Xn(t,8,e,{w:u,x:i,y:E})}var ur="_elmW6BL";function ar(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var o=[];return Zn(i.z,e,o,i.r),i.r=u,void(i.s.s={w:o,A:i})}ar(n,r,t+ur,e,u,a)}function ir(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Zn(e,a.z,i,u),void Xn(r,9,u,{w:i,A:a})}ir(n,r,t+ur,e,u)}else{var o=Xn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:o}}}function or(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,a,i,o,f){for(var c=u[a],v=c.r;v===i;){var s=c.$;if(1===s)n(t,e.k,c.s,f);else if(8===s)c.t=t,c.u=f,(d=c.s.w).length>0&&r(t,e,d,0,i,o,f);else if(9===s){c.t=t,c.u=f;var d,b=c.s;b&&(b.A.s=t,(d=b.w).length>0&&r(t,e,d,0,i,o,f))}else c.t=t,c.u=f;if(!(c=u[++a])||(v=c.r)>o)return a}var l=e.$;if(4===l){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,a,i+1,o,t.elm_event_node_ref)}for(var $=e.e,g=t.childNodes,p=0;$.length>p;p++){var m=1===l?$[p]:$[p].b,y=++i+(m.b||0);if(!(i>v||v>y||(c=u[a=r(g[p],m,u,a,i,y,f)])&&(v=c.r)<=o))return a;i=y}return a}(r,t,e,0,0,t.b,u)}(n,r,t,e),fr(n,t))}function fr(n,r){for(var t=0;r.length>t;t++){var e=r[t],u=e.t,a=cr(u,e);u===n&&(n=a)}return n}function cr(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=In(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return Kn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return fr(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;t.i>e;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];u.length>e;e++)n.insertBefore(In(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=fr(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=Rn.createDocumentFragment(),e=0;n.length>e;e++){var u=n[e].A;Sn(t,2===u.c?u.s:In(u.z,r.u))}return t}}(t.y,r);n=fr(n,t.w);for(var u=t.x,a=0;u.length>a;a++){var i=u[a],o=i.A,f=2===o.c?o.s:In(o.z,r.u);n.insertBefore(f,n.childNodes[i.r])}return e&&Sn(n,e),n}(n,r);case 5:return r.s(n);default:x(10)}}var vr=u(function(n,r,t,e){return function(n,r,t,e,u,a){var i=f(G,n,en(r?r.flags:void 0));Ur(i)||x(2);var o={},c=(i=t(i.a)).a,v=a(d,c),s=function(n,r){var t;for(var e in mn){var u=mn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=jn(u,r)}return t}(o,d);function d(n,r){v(c=(i=f(e,n,c)).a,r),Tn(o,i.b,u(c))}return Tn(o,i.b,u(c)),s?{ports:s}:{}}(r,e,n.aJ,n.aU,n.aT,function(r,t){var e=n.K&&n.K(r),u=n.aV,a=Rn.title,i=Rn.body,o=function n(r){if(3===r.nodeType)return qn(r.textContent);if(1!==r.nodeType)return qn("");for(var t=l,e=r.attributes,u=e.length;u--;){var a=e[u];t=h(f(Dn,a.name,a.value),t)}var i=r.tagName.toLowerCase(),o=l,v=r.childNodes;for(u=v.length;u--;)o=h(n(v[u]),o);return c(Fn,i,t,o)}(i);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(sr(e),r(n),1)}return function(u,a){n=u,a?(r(n),2===t&&(t=1)):(0===t&&sr(e),t=2)}}(t,function(n){On=e;var t=u(n),f=Fn("body")(l)(t.P),c=function(n,r){var t=[];return Zn(n,r,t,0),t}(o,f);i=or(i,o,c,r),o=f,On=0,a!==t.s&&(Rn.title=a=t.s)})})}),sr=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function dr(){return du(Rn.location.href).a||x(1)}var br=t(function(n,r){return f(Ye,Fe,fn(function(){history.pushState({},"",r),n()}))}),lr=("undefined"!=typeof document&&document,"undefined"!=typeof window?window:{addEventListener:function(){},removeEventListener:function(){}}),hr={$:1},$r={$:1},gr=function(n){switch(n){case 0:return"en";case 1:return"ru";default:return"uk"}},pr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),mr=1,yr=2,jr=0,wr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=c(n,t.b,t.c,c(wr,n,r,t.e));n=u,r=a,t=e}}),Ar=$,kr=function(n){return c(wr,e(function(n,r,t){return f(Ar,k(n,r),t)}),l,n)},Lr=O,Tr=t(function(n,r){return C(r)/C(n)}),_r=Lr(f(Tr,2,32)),Er=[],Nr=v(pr,0,_r,Er,Er),xr=N,Or=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=f(n,t.a,r);n=u,r=a,t=e}}),Pr=function(n){return c(Or,Ar,l,n)},Cr=t(function(n,r){for(;;){var t=f(xr,32,n),e=t.b,u=f(Ar,{$:0,a:t.a},r);if(!e.b)return Pr(u);n=e,r=u}}),Rr=t(function(n,r){for(;;){var t=Lr(r/32);if(1===t)return f(xr,32,n).a;n=f(Cr,n,l),r=t}}),Sr=P,qr=t(function(n,r){return j(n,r)>0?n:r}),Fr=function(n){return n.length},Mr=t(function(n,r){if(r.a){var t=32*r.a,e=Sr(f(Tr,32,t-1)),u=n?Pr(r.d):r.d,a=f(Rr,u,r.a);return v(pr,Fr(r.c)+t,f(qr,5,e*_r),a,r.c)}return v(pr,Fr(r.c),_r,Er,r.c)}),Jr=E,zr=a(function(n,r,t,e,u){for(;;){if(0>r)return f(Mr,!1,{d:e,a:t/32|0,c:u});var a={$:1,a:c(Jr,32,r,n)};n=n,r-=32,t=t,e=f(Ar,a,e),u=u}}),Dr=t(function(n,r){if(n>0){var t=n%32;return s(zr,r,n-t-32,n,l,c(Jr,t,n-t,r))}return Nr}),Br=function(n){return{$:0,a:n}},Hr={$:1},Ir=function(n){return{$:1,a:n}},Kr=function(n){return{$:0,a:n}},Ur=function(n){return!n.$},Vr=t(function(n,r){return{$:3,a:n,b:r}}),Gr=t(function(n,r){return{$:0,a:n,b:r}}),Qr=t(function(n,r){return{$:1,a:n,b:r}}),Wr=function(n){return{$:2,a:n}},Yr=function(n){var r=n.charCodeAt(0);return 55296>r||r>56319?r:1024*(r-55296)+n.charCodeAt(1)-56320+65536},Xr=function(n){var r=Yr(n);return r>=97&&122>=r},Zr=function(n){var r=Yr(n);return 90>=r&&r>=65},nt=function(n){return Xr(n)||Zr(n)},rt=function(n){return Xr(n)||Zr(n)||function(n){var r=Yr(n);return 57>=r&&r>=48}(n)},tt=function(n){return c(Or,t(function(n,r){return r+1}),0,n)},et=p,ut=e(function(n,r,t){for(;;){if(j(n,r)>=1)return t;var e=n,u=r-1,a=f(Ar,r,t);n=e,r=u,t=a}}),at=t(function(n,r){return c(ut,n,r,l)}),it=t(function(n,r){return c(et,n,f(at,0,tt(r)-1),r)}),ot=F,ft=function(n){return n+""},ct=t(function(n,r){return f(S,n,function(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}(r))}),vt=t(function(n,r){return g(f(R,n,r))}),st=function(n){return f(ct,"\n    ",f(vt,"\n",n))},dt=tn,bt=t(function(n,r){return"\n\n("+ft(n+1)+") "+st(lt(r))}),lt=function(n){return f(ht,n,l)},ht=t(function(n,r){n:for(;;)switch(n.$){case 0:var t=n.a,e=n.b,u=function(){var n,r,e=(r=(n=t).charCodeAt(0))?Br(55296>r||r>56319?k(L(n[0]),n.slice(1)):k(L(n[0]+n[1]),n.slice(2))):Hr;if(1===e.$)return!1;var u=e.a,a=u.b;return nt(u.a)&&f(ot,rt,a)}();n=e,r=f(Ar,u?"."+t:"['"+t+"']",r);continue n;case 1:e=n.b;var a="["+ft(n.a)+"]";n=e,r=f(Ar,a,r);continue n;case 2:var i=n.a;if(i.b){if(i.b.b){var o=(r.b?"The Json.Decode.oneOf at json"+f(ct,"",Pr(r)):"Json.Decode.oneOf")+" failed in the following "+ft(tt(i))+" ways:";return f(ct,"\n\n",f(Ar,o,f(it,bt,i)))}n=e=i.a,r=r;continue n}return"Ran into a Json.Decode.oneOf with no possibilities"+(r.b?" at json"+f(ct,"",Pr(r)):"!");default:var c=n.a,v=n.b;return(o=r.b?"Problem with the value at json"+f(ct,"",Pr(r))+":\n\n    ":"Problem with the given value:\n\n")+st(f(dt,4,v))+"\n\n"+c}}),$t=H,gt={$:3,b:$t},pt={$:-2},mt=pt,yt=a(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),jt=w,wt=a(function(n,r,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return s(yt,n,r,t,e,u);var a=e.d;return i=e.e,s(yt,0,e.b,e.c,s(yt,1,a.b,a.c,a.d,a.e),s(yt,1,r,t,i,u))}var i,o=u.b,f=u.c,c=u.d,v=u.e;return-1!==e.$||e.a?s(yt,n,o,f,s(yt,0,r,t,e,c),v):s(yt,0,r,t,s(yt,1,e.b,e.c,e.d,i=e.e),s(yt,1,o,f,c,v))}),At=e(function(n,r,t){if(-2===t.$)return s(yt,0,n,r,pt,pt);var e=t.a,u=t.b,a=t.c,i=t.d,o=t.e;switch(f(jt,n,u)){case 0:return s(wt,e,u,a,c(At,n,r,i),o);case 1:return s(yt,e,u,r,i,o);default:return s(wt,e,u,a,i,c(At,n,r,o))}}),kt=e(function(n,r,t){var e=c(At,n,r,t);return-1!==e.$||e.a?e:s(yt,1,e.b,e.c,e.d,e.e)}),Lt=U,Tt=f(Lt,function(n){return c(Or,t(function(n,r){return c(kt,n.a,n.b,r)}),mt,n)},{$:8,b:$t}),_t=function(n){return{$:3,a:n}},Et=function(n){return{$:2,a:n}},Nt=Ln,xt=t(function(n,r){return r.$?Ir(n(r.a)):Kr(r.a)}),Ot=e(function(n,r,t){return r(n(t))}),Pt=function(n){return n},Ct=t(function(n,r){n:for(;;){if(-2===r.$)return Hr;var t=r.c,e=r.d,u=r.e;switch(f(jt,n,r.b)){case 0:n=n,r=e;continue n;case 1:return Br(t);default:n=n,r=u;continue n}}}),Rt=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.e.d.$||n.e.d.a){var r=n.d,t=n.e;return i=t.b,o=t.c,e=t.d,v=t.e,s(yt,1,n.b,n.c,s(yt,0,r.b,r.c,r.d,r.e),s(yt,0,i,o,e,v))}var e,u=n.d,a=n.e,i=a.b,o=a.c,f=(e=a.d).d,c=e.e,v=a.e;return s(yt,0,e.b,e.c,s(yt,1,n.b,n.c,s(yt,0,u.b,u.c,u.d,u.e),f),s(yt,1,i,o,c,v))}return n},St=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.d.d.$||n.d.d.a){var r=n.d,t=n.e;return c=t.b,v=t.c,d=t.d,b=t.e,s(yt,1,e=n.b,u=n.c,s(yt,0,r.b,r.c,r.d,o=r.e),s(yt,0,c,v,d,b))}var e=n.b,u=n.c,a=n.d,i=a.d,o=a.e,f=n.e,c=f.b,v=f.c,d=f.d,b=f.e;return s(yt,0,a.b,a.c,s(yt,1,i.b,i.c,i.d,i.e),s(yt,1,e,u,o,s(yt,0,c,v,d,b)))}return n},qt=o(function(n,r,t,e,u,a,i){if(-1!==a.$||a.a){n:for(;;){if(-1===i.$&&1===i.a){if(-1===i.d.$){if(1===i.d.a)return St(r);break n}return St(r)}break n}return r}return s(yt,t,a.b,a.c,a.d,s(yt,0,e,u,a.e,i))}),Ft=function(n){if(-1===n.$&&-1===n.d.$){var r=n.a,t=n.b,e=n.c,u=n.d,a=u.d,i=n.e;if(1===u.a){if(-1!==a.$||a.a){var o=Rt(n);if(-1===o.$){var f=o.e;return s(wt,o.a,o.b,o.c,Ft(o.d),f)}return pt}return s(yt,r,t,e,Ft(u),i)}return s(yt,r,t,e,Ft(u),i)}return pt},Mt=t(function(n,r){if(-2===r.$)return pt;var t=r.a,e=r.b,u=r.c,a=r.d,i=r.e;if(0>j(n,e)){if(-1===a.$&&1===a.a){var o=a.d;if(-1!==o.$||o.a){var c=Rt(r);if(-1===c.$){var v=c.e;return s(wt,c.a,c.b,c.c,f(Mt,n,c.d),v)}return pt}return s(yt,t,e,u,f(Mt,n,a),i)}return s(yt,t,e,u,f(Mt,n,a),i)}return f(Jt,n,b(qt,n,r,t,e,u,a,i))}),Jt=t(function(n,r){if(-1===r.$){var t=r.a,e=r.b,u=r.c,a=r.d,i=r.e;if(m(n,e)){var o=function(n){for(;;){if(-1!==n.$||-1!==n.d.$)return n;n=n.d}}(i);return-1===o.$?s(wt,t,o.b,o.c,a,Ft(i)):pt}return s(wt,t,e,u,a,f(Mt,n,i))}return pt}),zt=t(function(n,r){var t=f(Mt,n,r);return-1!==t.$||t.a?t:s(yt,1,t.b,t.c,t.d,t.e)}),Dt=e(function(n,r,t){var e=r(f(Ct,n,t));return e.$?f(zt,n,t):c(kt,n,e.a,t)}),Bt=function(n){return!n.$},Ht=wn,It=An,Kt=t(function(n,r){return{$:3,a:n,b:r}}),Ut=function(n){return{$:0,a:n}},Vt=t(function(n,r){return{$:4,a:n,b:r}}),Gt={$:2},Qt=function(n){return{$:1,a:n}},Wt=function(n){return{$:0,a:n}},Yt={$:1},Xt=t(function(n,r){return c(Pn,"",Pt,f(Ot,r,n))}),Zt=function(n){return{$:4,a:n}},ne={$:2},re={$:1},te=t(function(n,r){switch(r.$){case 0:return Ir({$:0,a:r.a});case 1:return Ir(re);case 2:return Ir(ne);case 3:return Ir({$:3,a:r.a.ax});default:return f(xt,Zt,n(r.b))}}),ee=V,ue=t(function(n,r){return f(Xt,n,te(function(n){return f(xt,lt,f(ee,r,n))}))}),ae={$:0},ie=function(n){return{$:1,a:n}},oe=on,fe=t(function(n,r){return{at:n,ay:r}}),ce=oe(f(fe,mt,l)),ve=cn,se=function(n){return fn(function(r){var t=n.f;2===t.$&&t.c&&t.c(),n.f=null,r(on(A))})},de=dn,be=e(function(n,r,t){n:for(;;){if(r.b){var e=r.a,u=r.b;if(e.$){var a=e.a;return f(ve,function(r){var e=a.j;return c(be,n,u,1===e.$?t:c(kt,e.a,r,t))},de(c(Nn,n,Ht(n),a)))}var i=e.a,o=f(Ct,i,t);if(1===o.$){n=n,r=u,t=t;continue n}return f(ve,function(){return c(be,n,u,f(zt,i,t))},se(o.a))}return oe(t)}}),le=u(function(n,r,t,e){return f(ve,function(n){return oe(f(fe,n,t))},c(be,n,r,e.at))}),he=u(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,o=a.b;if(o.b){var s=o.a,d=o.b;if(d.b){var b=d.b;return f(n,u,f(n,i,f(n,s,f(n,d.a,t>500?c(Or,n,r,Pr(b)):v(he,n,r,t+1,b)))))}return f(n,u,f(n,i,f(n,s,r)))}return f(n,u,f(n,i,r))}return f(n,u,r)}return r}),$e=e(function(n,r,t){return v(he,n,r,0,t)}),ge=e(function(n,r,t){var e=n(r);return e.$?t:f(Ar,e.a,t)}),pe=t(function(n,r){return c($e,ge(n),l,r)}),me=e(function(n,r,t){return f(ve,function(r){return f(ve,function(t){return oe(f(n,r,t))},t)},r)}),ye=function(n){return c($e,me(Ar),oe(l),n)},je=u(function(n,r,t,e){var u=e.b;return m(r,e.a)?Br(f(Ht,n,u(t))):Hr}),we=e(function(n,r,t){return f(ve,function(){return oe(t)},ye(f(pe,c(je,n,r.a,r.b),t.ay)))}),Ae=t(function(n,r){if(r.$){var t=r.a;return ie({A:t.A,P:t.P,ah:f(Cn,n,t.ah),e:t.e,h:t.h,i:t.i,j:t.j,y:t.y})}return{$:0,a:r.a}}),ke=t(function(n,r){return{$:0,a:n,b:r}});mn.Http=yn(ce,le,we,Ae,t(function(n,r){return f(ke,r.a,f(Ot,r.b,n))}));var Le,Te=kn("Http"),_e=(kn("Http"),function(n){return function(n){return Te(ie({A:!1,P:n.P,ah:n.ah,e:n.e,h:n.h,i:n.i,j:n.j,y:n.y}))}({P:ae,ah:n.ah,e:l,h:"GET",i:Hr,j:Hr,y:n.y})}),Ee=Nt(g([_e({ah:f(ue,Et,Tt),y:"/translations/en.json"}),_e({ah:f(ue,_t,gt),y:"/content/tags.json"})])),Ne=t(function(n,r){return r.$?n:r.a}),xe=e(function(n,r,t){return k({v:{S:"",T:$r},W:t,l:f(Ne,{p:!1,R:gr(0)},n.l),M:hr,y:r},Ee)}),Oe=Ln(l),Pe={$:0},Ce=function(n){return{$:2,a:n}},Re=(Le=Pt,function(n){mn[n]&&x(3)}("settings"),mn.settings={e:En,r:Le,a:function(n){var r=[],t=mn[n].r,u=fn(function(n){var r=setTimeout(function(){n(on(A))},0);return function(){clearTimeout(r)}});return mn[n].b=u,mn[n].c=e(function(n,e){for(;e.b;e=e.b)for(var a=r,i=un(t(e.a)),o=0;a.length>o;o++)a[o](i);return u}),{subscribe:function(n){r.push(n)},unsubscribe:function(n){var t=(r=r.slice()).indexOf(n);0>t||r.splice(t,1)}}}},kn("settings")),Se=en,qe=en,Fe=function(n){for(;;)n=n},Me=oe(0),Je=t(function(n,r){return c($e,t(function(r,t){return f(Ar,n(r),t)}),l,r)}),ze=t(function(n,r){return f(ve,function(r){return oe(n(r))},r)}),De=t(function(n,r){var t=r;return dn(f(ve,Ht(n),t))});mn.Task=yn(Me,e(function(n,r){return f(ze,function(){return 0},ye(f(Je,De(n),r)))}),e(function(){return oe(0)}),t(function(n,r){return f(ze,n,r)}));var Be,He,Ie,Ke,Ue,Ve,Ge,Qe,We=kn("Task"),Ye=t(function(n,r){return We(f(ze,n,r))}),Xe=function(n){return{$:0,a:n}},Ze=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},nu=q,ru=t(function(n,r){return 1>n?r:c(nu,n,r.length,r)}),tu=J,eu=z,uu=function(n){return""===n},au=t(function(n,r){return 1>n?"":c(nu,0,n,r)}),iu=M,ou=i(function(n,r,t,e,u,a){return{ai:a,aj:r,aO:e,an:t,aq:n,ar:u}}),fu=a(function(n,r,t,e,u){if(uu(u)||f(iu,"@",u))return Hr;var a=f(eu,":",u);if(a.b){if(a.b.b)return Hr;var i=a.a,o=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;n.length>u;++u){var a=n.charCodeAt(u);if(48>a||a>57)return Hr;r=10*r+a-48}return u==e?Hr:Br(45==t?-r:r)}(f(ru,i+1,u));if(1===o.$)return Hr;var c=o;return Br(d(ou,n,f(au,i,u),c,r,t,e))}return Br(d(ou,n,u,Hr,r,t,e))}),cu=u(function(n,r,t,e){if(uu(e))return Hr;var u=f(eu,"/",e);if(u.b){var a=u.a;return s(fu,n,f(ru,a,e),r,t,f(au,a,e))}return s(fu,n,"/",r,t,e)}),vu=e(function(n,r,t){if(uu(t))return Hr;var e=f(eu,"?",t);if(e.b){var u=e.a;return v(cu,n,Br(f(ru,u+1,t)),r,f(au,u,t))}return v(cu,n,Hr,r,t)}),su=t(function(n,r){if(uu(r))return Hr;var t=f(eu,"#",r);if(t.b){var e=t.a;return c(vu,n,Br(f(ru,e+1,r)),f(au,e,r))}return c(vu,n,Hr,r)}),du=function(n){return f(tu,"http://",n)?f(su,0,f(ru,7,n)):f(tu,"https://",n)?f(su,1,f(ru,8,n)):Hr},bu=br,lu=Nt(l),hu=t(function(n,r){return 1===n.$?r:r+":"+ft(n.a)}),$u=e(function(n,r,t){return 1===r.$?t:_(t,_(n,r.a))}),gu=t(function(n,r){switch(n.$){case 0:var e=n.a;return k(r,e.$?function(n){return f(Ye,Fe,fn(function(){try{lr.location=n}catch(n){Rn.location.reload(!1)}}))}(e.a):f(bu,r.W,function(n){return c($u,"#",n.ai,c($u,"?",n.ar,_(f(hu,n.an,_(n.aq?"https://":"http://",n.aj)),n.aO)))}(e.a)));case 1:return k(T(r,{y:n.a}),lu);case 2:return k(T(r,(u=n.a).$?{M:Pe}:{M:(o=u.a,{$:2,a:o})}),lu);case 3:var u;if((u=n.a).$)return k(r,lu);var a=T(r.v,{T:Ce(u.a)});return k(T(r,{v:a}),lu);case 4:var i=T(r.l,{p:!r.l.p});return k(T(r,{l:i}),function(n){var r,e=(r=g([k("darkMode",Se(n.p)),k("language",qe(n.R))]),en(c(Or,t(function(n,r){return c(an,n.a,n.b,r)}),{},r)));return Re(e)}(i));default:return a=T(r.v,{S:n.a}),k(T(r,{v:a}),lu)}var o}),pu=a(function(n,r,t,e,u){return{u:e,x:t,t:r,n:u,z:n}}),mu=t(function(n,r){return s(pu,r.z,r.t,r.x,r.u,n(r.n))}),yu=t(function(n,r){var t=r;return function(r){var e=r.z,u=r.t,a=r.x,i=r.u;return f(Je,mu(r.n),t(s(pu,e,u,a,i,n)))}}),ju=t(function(n,r){return r.b?c($e,Ar,r,n):n}),wu=t(function(n,r){return c($e,ju,l,f(Je,n,r))}),Au=function(n){return function(r){var t=r.z,e=r.t,u=r.x,a=r.u,i=r.n;if(e.b){var o=e.a,c=e.b;return m(o,n)?g([s(pu,f(Ar,o,t),c,u,a,i)]):l}return l}},ku=function(n){return g([n])},Lu=(Be=g([f(yu,0,ku),f(yu,1,Au("settings")),f(yu,2,Au("404"))]),function(n){return f(wu,function(r){return r(n)},Be)}),Tu=function(n){return n.b&&(""!==n.a||n.b.b)?f(Ar,n.a,Tu(n.b)):l},_u=function(n){try{return Br(decodeURIComponent(n))}catch(n){return Hr}},Eu=t(function(n,r){return Br(1===r.$?g([n]):f(Ar,n,r.a))}),Nu=t(function(n,r){var t=f(vt,"=",n);if(t.b&&t.b.b&&!t.b.b.b){var e=t.b.a,u=_u(t.a);if(1===u.$)return r;var a=u.a,i=_u(e);return 1===i.$?r:c(Dt,a,Eu(i.a),r)}return r}),xu=t(function(n,r){var t;return function(n){n:for(;;){if(n.b){var r=n.a,t=r.t;if(t.b){if(""!==t.a||t.b.b){n=n.b;continue n}return Br(r.n)}return Br(r.n)}return Hr}}(n(s(pu,l,function(){var n=f(vt,"/",r.aO);return Tu(n.b&&""===n.a?n.b:n)}(),1===(t=r.ar).$?mt:c($e,Nu,mt,f(vt,"&",t.a)),r.ai,Pt)))}),Ou=function(n){return""===n.aO?2:f(Ne,2,f(xu,Lu,n))},Pu=Fn("a"),Cu=Fn("footer"),Ru=Fn("li"),Su=Fn("nav"),qu=Fn("small"),Fu=qn,Mu=Fn("ul"),Ju=t(function(n,r){return f(zn,n,qe(r))}),zu=Ju("className"),Du=function(n){return f(Ju,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},Bu=function(n){return{$:5,a:n}},Hu=function(n){return f(Ru,l,g([Fu(n)]))},Iu=function(n){switch(n.$){case 2:return f(Je,Hu,n.a);case 1:return g([f(Ru,l,g([Fu("Loading")]))]);default:return g([f(Ru,l,g([Fu("Failure")]))])}},Ku=Fn("div"),Uu=Fn("h3"),Vu=Fn("input"),Gu=Fn("main"),Qu=Ju("id"),Wu=Ju("placeholder"),Yu=function(n){return f(Dn,"tabIndex",ft(n))},Xu=Ju("value"),Zu=function(n){return k(n,!0)},na=Jn,ra=t(function(n,r){return f(na,n,{$:1,a:r})}),ta=I,ea=f(t(function(n,r){return c($e,ta,r,n)}),g(["target","value"]),$t),ua=function(n){var r,t=n.v,e=t.S,u=t.T;return{Q:f(Gu,g([Qu("content"),zu("container"),Yu(-1)]),g([f(Vu,g([Wu("Search: "),Xu(e),(r=Bu,f(ra,"input",f(Lt,Zu,f(Lt,r,ea))))]),l),f(Ku,g([zu("row")]),g([f(Uu,l,g([Fu("Modules:")])),f(Mu,l,Iu(u))]))])),s:"Home Page"}},aa=t(function(n,r){return 1===Ou(r.y)?f(ct," ",g([n,"collapse"])):n}),ia=Fn("header"),oa=function(n){return f(ia,l,g([f(Su,g([zu(f(aa,"navbar",n)),Qu("myNavBar")]),g([f(Mu,g([zu("nav")]),g([f(Ru,l,g([f(Pu,g([Du("/")]),g([Fu("Docs")]))])),f(Ru,l,g([f(Pu,g([Du("/settings")]),g([Fu("Settings")]))]))]))]))]))},fa=Fn("h1"),ca={$:4},va=Fn("label"),sa=t(function(n,r){return f(Dn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),da=t(function(n,r){return f(zn,n,Se(r))})("checked"),ba=Ju("htmlFor"),la=Ju("name"),ha=Ju("type"),$a=t(function(n,r){return f(na,n,{$:0,a:r})}),ga=function(n){var r;return{Q:f(Gu,g([Qu("content"),zu("container"),Yu(-1)]),g([f(Ku,g([zu("row")]),g([f(Ku,g([zu("toggle-list")]),g([f(Vu,g([f(sa,"checked",""),zu("ios-toggle"),Qu("red"),la("test"),ha("checkbox"),da(n.l.p),(r=ca,f($a,"click",Xe(r)))]),l),f(va,g([zu("checkbox-label"),f(sa,"data-off","Light theme"),f(sa,"data-on","Dark theme"),ba("red")]),l)]))]))])),s:"Settings"}},pa=K,ma=B;He={Main:{init:(Ke=(Ie={aJ:xe,aL:function(n){return{$:1,a:n}},aM:function(n){return{$:0,a:n}},aT:function(){return Oe},aU:gu,aV:function(n){switch(n.M.$){case 1:return{P:g([Fu("Loading")]),s:"Loading"};case 2:var r=function(r){var t=r(n),e=t.s,u=t.Q;return{P:g([oa(n),u,f(Cu,g([zu("container")]),g([f(Su,l,g([f(Mu,l,g([f(Ru,l,g([f(Pu,g([Du("/about")]),g([Fu("About")]))])),f(Ru,l,g([f(Pu,g([Du("/contact")]),g([Fu("Contact")]))]))]))])),f(qu,l,g([Fu("Copyright © 2019")]))]))]),s:e}};switch(Ou(n.y)){case 0:return r(ua);case 1:return r(ga);default:return{P:g([f(Gu,g([Qu("content"),zu("container page404"),Yu(-1)]),g([f(Ku,g([zu("row")]),g([f(fa,g([zu("title")]),g([Fu("Page not found")]))])),f(Ku,g([zu("row")]),g([f(Ku,g([zu("image404")]),l)])),f(Ku,g([zu("row")]),g([f(Pu,g([zu("back"),Du("/")]),g([Fu("Back to Docs")]))]))]))]),s:"Page Not Found"}}default:return{P:g([Fu("The application failed to initialize. ")]),s:"Failure"}}}}).aL,Ue=Ie.aM,Ve=function(){Ve.a(Ke(dr()))},vr({K:function(n){return Ve.a=n,lr.addEventListener("popstate",Ve),0>lr.navigator.userAgent.indexOf("Trident")||lr.addEventListener("hashchange",Ve),t(function(r,t){if(!(t.ctrlKey||t.metaKey||t.shiftKey||t.button>=1||r.target||r.hasAttribute("download"))){t.preventDefault();var e=r.href,u=dr(),a=du(e).a;n(Ue(a&&u.aq===a.aq&&u.aj===a.aj&&u.an.a===a.an.a?{$:0,a:a}:function(n){return{$:1,a:n}}(e)))}})},aJ:function(n){return c(Ie.aJ,n,dr(),Ve)},aV:Ie.aV,aU:Ie.aU,aT:Ie.aT}))(f(pa,function(n){return Xe({l:n})},f(ta,"settings",(Ge=g([(Qe=Hr,{$:5,c:Qe}),f(Lt,Br,f(pa,function(n){return f(pa,function(r){return Xe({p:r,R:n})},f(ta,"darkMode",ma))},f(ta,"language",$t)))]),{$:11,g:Ge}))))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?x(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,He):n.Elm=He}(this);
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=require("./App/Main.elm");function t(e){var t=document.documentElement;e?t.classList.add("dark"):t.classList.remove("dark")}var s=JSON.parse(localStorage.getItem("settings"))||{darkMode:!1,language:"en"},a=e.Elm.Main.init({node:document.getElementById("app"),flags:{settings:s}});t(s.darkMode),a.ports.settings.subscribe(function(e){t(e.darkMode),localStorage.setItem("settings",JSON.stringify(e))});
},{"./App/Main.elm":"T3lW"}]},{},["epB2"], null)
//# sourceMappingURL=/main.f2c6defe.js.map