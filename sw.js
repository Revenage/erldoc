parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NqYy":[function(require,module,exports) {
var n="cache-and-update-v1";function t(t){return caches.open(n).then(function(n){return n.match(t).then(function(n){return n||fetch(t)})}).catch(function(){return fetch(t)})}function e(t){return caches.open(n).then(function(n){return fetch(t).then(function(e){return n.put(t,e)})}).catch(function(n){return console.log(n)})}self.addEventListener("install",function(t){t.waitUntil(caches.open(n).then(function(n){return n.addAll(["/erldoc/","/erldoc/index.html","/erldoc/*.png","/erldoc/*.svg","/erldoc/content/tags.json","/erldoc/content/**/*.json","/erldoc/translations/**/*.json"])}))}),self.addEventListener("fetch",function(n){n.respondWith(t(n.request)),n.waitUntil(e(n.request))}),self.addEventListener("activate",function(n){console.log("activated")});
},{}]},{},["NqYy"], null)
//# sourceMappingURL=/erldoc/sw.js.map