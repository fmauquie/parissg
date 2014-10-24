define(["jquery"],function(){function a(a,b){if(!b||"function"==typeof b)return a;for(var c in b)a[c]=b[c];return a}function b(a,c){for(var d in c)d in a?b(a[d],c[d]):a[d]=c[d];return a}function c(a,b,c){var d,e=0,f=a.length,g=void 0===f||"[object Array]"!==Object.prototype.toString.apply(a)||"function"==typeof a;if(c)if(g){for(d in a)if(b.apply(a[d],c)===!1)break}else for(;f>e&&b.apply(a[e++],c)!==!1;);else if(g){for(d in a)if(b.call(a[d],d,a[d])===!1)break}else for(;f>e&&b.call(a[e],e,a[e++])!==!1;);return a}function d(a){return"string"==typeof a?a.replace(/[&<>"'\/]/g,function(a){return O[a]}):a}function e(a){var b=function(a){if(window.XMLHttpRequest)return a(null,new XMLHttpRequest);if(window.ActiveXObject)try{return a(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(b){return a(null,new ActiveXObject("Microsoft.XMLHTTP"))}return a(new Error)},c=function(a){if("string"==typeof a)return a;var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},d=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},e=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=d(a);var c,e,f,g,h,i,j,k="",l=0;do c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c>>2,h=(3&c)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k+=b.charAt(g)+b.charAt(h)+b.charAt(i)+b.charAt(j),c=e=f="",g=h=i=j="";while(l<a.length);return k},f=function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}return a},g=function(a,d,e,h){"function"==typeof e&&(h=e,e={}),e.cache=e.cache||!1,e.data=e.data||{},e.headers=e.headers||{},e.jsonp=e.jsonp||!1,e.async=void 0===e.async?!0:e.async;var i,j=f({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},g.headers,e.headers);if(i="application/json"===j["content-type"]?JSON.stringify(e.data):c(e.data),"GET"===a){var k=[];if(i&&(k.push(i),i=null),e.cache||k.push("_="+(new Date).getTime()),e.jsonp&&(k.push("callback="+e.jsonp),k.push("jsonp="+e.jsonp)),k=k.join("&"),k.length>1&&(d+=d.indexOf("?")>-1?"&"+k:"?"+k),e.jsonp){var l=document.getElementsByTagName("head")[0],m=document.createElement("script");return m.type="text/javascript",m.src=d,void l.appendChild(m)}}b(function(b,c){if(b)return h(b);c.open(a,d,e.async);for(var f in j)j.hasOwnProperty(f)&&c.setRequestHeader(f,j[f]);c.onreadystatechange=function(){if(4===c.readyState){var a=c.responseText||"";if(!h)return;h(c.status,{text:function(){return a},json:function(){return JSON.parse(a)}})}},c.send(i)})},h={authBasic:function(a,b){g.headers.Authorization="Basic "+e(a+":"+b)},connect:function(a,b,c){return g("CONNECT",a,b,c)},del:function(a,b,c){return g("DELETE",a,b,c)},get:function(a,b,c){return g("GET",a,b,c)},head:function(a,b,c){return g("HEAD",a,b,c)},headers:function(a){g.headers=a||{}},isAllowed:function(a,b,c){this.options(a,function(a,d){c(-1!==d.text().indexOf(b))})},options:function(a,b,c){return g("OPTIONS",a,b,c)},patch:function(a,b,c){return g("PATCH",a,b,c)},post:function(a,b,c){return g("POST",a,b,c)},put:function(a,b,c){return g("PUT",a,b,c)},trace:function(a,b,c){return g("TRACE",a,b,c)}},i=a.type?a.type.toLowerCase():"get";h[i](a.url,a,function(b,c){200===b||0===b&&c.text()?a.success(c.json(),b,null):a.error(c.text(),b,null)})}function f(a,b){"function"==typeof a&&(b=a,a={}),a=a||{},R.extend(N,a),delete N.fixLng,"string"==typeof N.ns&&(N.ns={namespaces:[N.ns],defaultNs:N.ns}),"string"==typeof N.fallbackNS&&(N.fallbackNS=[N.fallbackNS]),("string"==typeof N.fallbackLng||"boolean"==typeof N.fallbackLng)&&(N.fallbackLng=[N.fallbackLng]),N.interpolationPrefixEscaped=R.regexEscape(N.interpolationPrefix),N.interpolationSuffixEscaped=R.regexEscape(N.interpolationSuffix),N.lng||(N.lng=R.detectLanguage()),J=R.toLanguages(N.lng),D=J[0],R.log("currentLng set to: "+D),N.useCookie&&R.cookie.read(N.cookieName)!==D&&R.cookie.create(N.cookieName,D,N.cookieExpirationTime,N.cookieDomain),N.detectLngFromLocalStorage&&"undefined"!=typeof document&&window.localstorage&&window.localStorage.setItem("i18next_lng",D);var c=x;a.fixLng&&(c=function(a,b){return b=b||{},b.lng=b.lng||c.lng,x(a,b)},c.lng=D),S.setCurrentLng(D),F&&N.setJqueryExt&&q();var d;if(F&&F.Deferred&&(d=F.Deferred()),!N.resStore){var e=R.toLanguages(N.lng);"string"==typeof N.preload&&(N.preload=[N.preload]);for(var f=0,g=N.preload.length;g>f;f++)for(var h=R.toLanguages(N.preload[f]),i=0,j=h.length;j>i;i++)e.indexOf(h[i])<0&&e.push(h[i]);return G.sync.load(e,N,function(a,e){H=e,K=!0,b&&b(c),d&&d.resolve(c)}),d?d.promise():void 0}return H=N.resStore,K=!0,b&&b(c),d&&d.resolve(c),d?d.promise():void 0}function g(a,b){"string"==typeof a&&(a=[a]);for(var c=0,d=a.length;d>c;c++)N.preload.indexOf(a[c])<0&&N.preload.push(a[c]);return f(b)}function h(a,b,c,d){"string"!=typeof b?(c=b,b=N.ns.defaultNs):N.ns.namespaces.indexOf(b)<0&&N.ns.namespaces.push(b),H[a]=H[a]||{},H[a][b]=H[a][b]||{},d?R.deepExtend(H[a][b],c):R.extend(H[a][b],c)}function i(a,b){"string"!=typeof b&&(b=N.ns.defaultNs),H[a]=H[a]||{},H[a][b]={}}function j(a,b,c,d){"string"!=typeof b?(resource=b,b=N.ns.defaultNs):N.ns.namespaces.indexOf(b)<0&&N.ns.namespaces.push(b),H[a]=H[a]||{},H[a][b]=H[a][b]||{};for(var e=c.split(N.keyseparator),f=0,g=H[N.lng][b];e[f];)f==e.length-1?g[e[f]]=d:(null==g[e[f]]&&(g[e[f]]={}),g=g[e[f]]),f++}function k(a,b,c){"string"!=typeof b?(resource=b,b=N.ns.defaultNs):N.ns.namespaces.indexOf(b)<0&&N.ns.namespaces.push(b);for(var d in c)"string"==typeof c[d]&&j(a,b,d,c[d])}function l(a){N.ns.defaultNs=a}function m(a,b){n([a],b)}function n(a,b){var c={dynamicLoad:N.dynamicLoad,resGetPath:N.resGetPath,getAsync:N.getAsync,customLoad:N.customLoad,ns:{namespaces:a,defaultNs:""}},d=R.toLanguages(N.lng);"string"==typeof N.preload&&(N.preload=[N.preload]);for(var e=0,f=N.preload.length;f>e;e++)for(var g=R.toLanguages(N.preload[e]),h=0,i=g.length;i>h;h++)d.indexOf(g[h])<0&&d.push(g[h]);for(var j=[],k=0,l=d.length;l>k;k++){var m=!1,n=H[d[k]];if(n)for(var o=0,p=a.length;p>o;o++)n[a[o]]||(m=!0);else m=!0;m&&j.push(d[k])}j.length?G.sync._fetch(j,c,function(c,d){var e=a.length*j.length;R.each(a,function(a,c){N.ns.namespaces.indexOf(c)<0&&N.ns.namespaces.push(c),R.each(j,function(a,f){H[f]=H[f]||{},H[f][c]=d[f][c],e--,0===e&&b&&(N.useLocalStorage&&G.sync._storeLocal(H),b())})})}):b&&b()}function o(a,b,c){return"function"==typeof b?(c=b,b={}):b||(b={}),b.lng=a,f(b,c)}function p(){return D}function q(){function a(a,b,c){if(0!==b.length){var d="text";if(0===b.indexOf("[")){var e=b.split("]");b=e[1],d=e[0].substr(1,e[0].length-1)}b.indexOf(";")===b.length-1&&(b=b.substr(0,b.length-2));var f;if("html"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.html()},c):c,a.html(F.t(b,f));else if("text"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.text()},c):c,a.text(F.t(b,f));else if("prepend"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.html()},c):c,a.prepend(F.t(b,f));else if("append"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.html()},c):c,a.append(F.t(b,f));else if(0===d.indexOf("data-")){var g=d.substr("data-".length);f=N.defaultValueFromContent?F.extend({defaultValue:a.data(g)},c):c;var h=F.t(b,f);a.data(g,h),a.attr(d,h)}else f=N.defaultValueFromContent?F.extend({defaultValue:a.attr(d)},c):c,a.attr(d,F.t(b,f))}}function b(b,c){var d=b.attr(N.selectorAttr);if(d||"undefined"==typeof d||d===!1||(d=b.text()||b.val()),d){var e=b,f=b.data("i18n-target");if(f&&(e=b.find(f)||b),c||N.useDataAttrOptions!==!0||(c=b.data("i18n-options")),c=c||{},d.indexOf(";")>=0){var g=d.split(";");F.each(g,function(b,d){""!==d&&a(e,d,c)})}else a(e,d,c);N.useDataAttrOptions===!0&&b.data("i18n-options",c)}}F.t=F.t||x,F.fn.i18n=function(a){return this.each(function(){b(F(this),a);var c=F(this).find("["+N.selectorAttr+"]");c.each(function(){b(F(this),a)})})}}function r(a,b,c,d){if(!a)return a;if(d=d||b,a.indexOf(d.interpolationPrefix||N.interpolationPrefix)<0)return a;var e=d.interpolationPrefix?R.regexEscape(d.interpolationPrefix):N.interpolationPrefixEscaped,f=d.interpolationSuffix?R.regexEscape(d.interpolationSuffix):N.interpolationSuffixEscaped,g="HTML"+f,h=b.replace&&"object"==typeof b.replace?b.replace:b;return R.each(h,function(b,h){var i=c?c+N.keyseparator+b:b;"object"==typeof h&&null!==h?a=r(a,h,i,d):d.escapeInterpolation||N.escapeInterpolation?(a=a.replace(new RegExp([e,i,g].join(""),"g"),R.regexReplacementEscape(h)),a=a.replace(new RegExp([e,i,f].join(""),"g"),R.regexReplacementEscape(R.escape(h)))):a=a.replace(new RegExp([e,i,f].join(""),"g"),R.regexReplacementEscape(h))}),a}function s(a,b){var c=",",d="{",e="}",f=R.extend({},b);for(delete f.postProcess;-1!=a.indexOf(N.reusePrefix)&&(I++,!(I>N.maxRecursion));){var g=a.lastIndexOf(N.reusePrefix),h=a.indexOf(N.reuseSuffix,g)+N.reuseSuffix.length,i=a.substring(g,h),j=i.replace(N.reusePrefix,"").replace(N.reuseSuffix,"");if(g>=h)return R.error("there is an missing closing in following translation value",a),"";if(-1!=j.indexOf(c)){var k=j.indexOf(c);if(-1!=j.indexOf(d,k)&&-1!=j.indexOf(e,k)){var l=j.indexOf(d,k),m=j.indexOf(e,l)+e.length;try{f=R.extend(f,JSON.parse(j.substring(l,m))),j=j.substring(0,k)}catch(n){}}}var o=A(j,f);a=a.replace(i,R.regexReplacementEscape(o))}return a}function t(a){return a.context&&("string"==typeof a.context||"number"==typeof a.context)}function u(a,b){return void 0!==a.count&&"string"!=typeof a.count&&S.needsPlural(b,a.count)}function v(a){return void 0!==a.indefinite_article&&"string"!=typeof a.indefinite_article&&a.indefinite_article}function w(a,b){b=b||{};var c=y(a,b),d=B(a,b);return void 0!==d||d===c}function x(a,b){return b=b||{},K?(I=0,A.apply(null,arguments)):(R.log("i18next not finished initialization. you might have called t function before loading resources finished."),b.defaultValue||"")}function y(a,b){return void 0!==b.defaultValue?b.defaultValue:a}function z(){for(var a=[],b=1;b<arguments.length;b++)a.push(arguments[b]);return{postProcess:"sprintf",sprintf:a}}function A(a,b){if(b&&"object"!=typeof b?"sprintf"===N.shortcutFunction?b=z.apply(null,arguments):"defaultValue"===N.shortcutFunction&&(b={defaultValue:b}):b=b||{},void 0===a||null===a||""===a)return"";"string"==typeof a&&(a=[a]);var c=a[0];if(a.length>1)for(var d=0;d<a.length&&(c=a[d],!w(c,b));d++);var e,f=y(c,b),g=B(c,b),h=b.lng?R.toLanguages(b.lng,b.fallbackLng):J,i=b.ns||N.ns.defaultNs;c.indexOf(N.nsseparator)>-1&&(e=c.split(N.nsseparator),i=e[0],c=e[1]),void 0===g&&N.sendMissing&&"function"==typeof N.missingKeyHandler&&(b.lng?N.missingKeyHandler(h[0],i,c,f,h):N.missingKeyHandler(N.lng,i,c,f,h));var j=b.postProcess||N.postProcess;void 0!==g&&j&&T[j]&&(g=T[j](g,c,b));var k=f;if(f.indexOf(N.nsseparator)>-1&&(e=f.split(N.nsseparator),k=e[1]),k===c&&N.parseMissingKey&&(f=N.parseMissingKey(f)),void 0===g&&(f=r(f,b),f=s(f,b),j&&T[j])){var l=y(c,b);g=T[j](l,c,b)}return void 0!==g?g:f}function B(a,b){b=b||{};var c,d,e=y(a,b),f=J;if(!H)return e;if("cimode"===f[0].toLowerCase())return e;if(b.lng&&(f=R.toLanguages(b.lng,b.fallbackLng),!H[f[0]])){var g=N.getAsync;N.getAsync=!1,G.sync.load(f,N,function(a,b){R.extend(H,b),N.getAsync=g})}var h=b.ns||N.ns.defaultNs;if(a.indexOf(N.nsseparator)>-1){var i=a.split(N.nsseparator);h=i[0],a=i[1]}if(t(b)){c=R.extend({},b),delete c.context,c.defaultValue=N.contextNotFound;var j=h+N.nsseparator+a+"_"+b.context;if(d=x(j,c),d!=N.contextNotFound)return r(d,{context:b.context})}if(u(b,f[0])){c=R.extend({},b),delete c.count,c.defaultValue=N.pluralNotFound;var k=h+N.nsseparator+a+N.pluralSuffix,l=S.get(f[0],b.count);if(l>=0?k=k+"_"+l:1===l&&(k=h+N.nsseparator+a),d=x(k,c),d!=N.pluralNotFound)return r(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix})}if(v(b)){var m=R.extend({},b);delete m.indefinite_article,m.defaultValue=N.indefiniteNotFound;var n=h+N.nsseparator+a+(b.count&&!u(b,f[0])||!b.count?N.indefiniteSuffix:"");if(d=x(n,m),d!=N.indefiniteNotFound)return d}for(var o,p=a.split(N.keyseparator),q=0,w=f.length;w>q&&void 0===o;q++){for(var z=f[q],C=0,D=H[z]&&H[z][h];p[C];)D=D&&D[p[C]],C++;if(void 0!==D){var E=Object.prototype.toString.apply(D);if("string"==typeof D)D=r(D,b),D=s(D,b);else if("[object Array]"!==E||N.returnObjectTrees||b.returnObjectTrees){if(null===D&&N.fallbackOnNull===!0)D=void 0;else if(null!==D)if(N.returnObjectTrees||b.returnObjectTrees){if("[object Number]"!==E&&"[object Function]"!==E&&"[object RegExp]"!==E){var F="[object Array]"===E?[]:{};R.each(D,function(c){F[c]=A(h+N.nsseparator+a+N.keyseparator+c,b)}),D=F}}else N.objectTreeKeyHandler&&"function"==typeof N.objectTreeKeyHandler?D=N.objectTreeKeyHandler(a,D,z,h,b):(D="key '"+h+":"+a+" ("+z+")' returned an object instead of string.",R.log(D))}else D=D.join("\n"),D=r(D,b),D=s(D,b);"string"==typeof D&&""===D.trim()&&N.fallbackOnEmpty===!0&&(D=void 0),o=D}}if(void 0===o&&!b.isFallbackLookup&&(N.fallbackToDefaultNS===!0||N.fallbackNS&&N.fallbackNS.length>0)){if(b.isFallbackLookup=!0,N.fallbackNS.length){for(var I=0,K=N.fallbackNS.length;K>I;I++)if(o=B(N.fallbackNS[I]+N.nsseparator+a,b)){var L=o.indexOf(N.nsseparator)>-1?o.split(N.nsseparator)[1]:o,M=e.indexOf(N.nsseparator)>-1?e.split(N.nsseparator)[1]:e;if(L!==M)break}}else o=B(a,b);b.isFallbackLookup=!1}return o}function C(){var a,b=[];if("undefined"!=typeof window&&(!function(){for(var a=window.location.search.substring(1),c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("=");if(e>0){var f=c[d].substring(0,e),g=c[d].substring(e+1);b[f]=g}}}(),b[N.detectLngQS]&&(a=b[N.detectLngQS])),!a&&"undefined"!=typeof document&&N.useCookie){var c=R.cookie.read(N.cookieName);c&&(a=c)}return!a&&"undefined"!=typeof document&&window.localstorage&&N.detectLngFromLocalStorage&&(a=window.localStorage.getItem("i18next_lng")),a||"undefined"==typeof navigator||(a=navigator.language?navigator.language:navigator.userLanguage),a||(a=N.fallbackLng[0]),a}Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&1/0!=d&&d!=-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=c;arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d))));for(var e=d>=0?Math.min(d,c-1):c-Math.abs(d);e>=0;e--)if(e in b&&b[e]===a)return e;return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var D,E=this,F=E.jQuery||E.Zepto,G={},H={},I=0,J=[],K=!1,L={};if("undefined"!=typeof module&&module.exports){if(!F)try{F=require("jquery")}catch(M){}F&&(F.i18n=F.i18n||G),module.exports=G}else F&&(F.i18n=F.i18n||G),E.i18n=E.i18n||G;L={load:function(a,b,c){b.useLocalStorage?L._loadLocal(a,b,function(d,e){for(var f=[],g=0,h=a.length;h>g;g++)e[a[g]]||f.push(a[g]);f.length>0?L._fetch(f,b,function(a,b){R.extend(e,b),L._storeLocal(b),c(null,e)}):c(null,e)}):L._fetch(a,b,function(a,b){c(null,b)})},_loadLocal:function(a,b,c){var d={},e=(new Date).getTime();if(window.localStorage){var f=a.length;R.each(a,function(a,g){var h=window.localStorage.getItem("res_"+g);h&&(h=JSON.parse(h),h.i18nStamp&&h.i18nStamp+b.localStorageExpirationTime>e&&(d[g]=h)),f--,0===f&&c(null,d)})}},_storeLocal:function(a){if(window.localStorage)for(var b in a)a[b].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+b,JSON.stringify(a[b]))},_fetch:function(a,b,c){var d=b.ns,e={};if(b.dynamicLoad){var f=function(a,b){c(null,b)};if("function"==typeof b.customLoad)b.customLoad(a,d.namespaces,b,f);else{var g=r(b.resGetPath,{lng:a.join("+"),ns:d.namespaces.join("+")});R.ajax({url:g,success:function(a){R.log("loaded: "+g),f(null,a)},error:function(a,b,c){R.log("failed loading: "+g),f("failed loading resource.json error: "+c)},dataType:"json",async:b.getAsync})}}else{var h,i=d.namespaces.length*a.length;R.each(d.namespaces,function(d,f){R.each(a,function(a,d){var g=function(a,b){a&&(h=h||[],h.push(a)),e[d]=e[d]||{},e[d][f]=b,i--,0===i&&c(h,e)};"function"==typeof b.customLoad?b.customLoad(d,f,b,g):L._fetchOne(d,f,b,g)})})}},_fetchOne:function(a,b,c,d){var e=r(c.resGetPath,{lng:a,ns:b});R.ajax({url:e,success:function(a){R.log("loaded: "+e),d(null,a)},error:function(a,b,c){if(b&&200==b||a&&a.status&&200==a.status)R.error("There is a typo in: "+e);else if(b&&404==b||a&&a.status&&404==a.status)R.log("Does not exist: "+e);else{var f=b?b:a&&a.status?a.status:null;R.log(f+" when loading "+e)}d(c,{})},dataType:"json",async:c.getAsync})},postMissing:function(a,b,c,d,e){var f={};f[c]=d;var g=[];if("fallback"===N.sendMissingTo&&N.fallbackLng[0]!==!1)for(var h=0;h<N.fallbackLng.length;h++)g.push({lng:N.fallbackLng[h],url:r(N.resPostPath,{lng:N.fallbackLng[h],ns:b})});else if("current"===N.sendMissingTo||"fallback"===N.sendMissingTo&&N.fallbackLng[0]===!1)g.push({lng:a,url:r(N.resPostPath,{lng:a,ns:b})});else if("all"===N.sendMissingTo)for(var h=0,i=e.length;i>h;h++)g.push({lng:e[h],url:r(N.resPostPath,{lng:e[h],ns:b})});for(var j=0,k=g.length;k>j;j++){var l=g[j];R.ajax({url:l.url,type:N.sendType,data:f,success:function(){R.log("posted missing key '"+c+"' to: "+l.url);for(var a=c.split("."),e=0,f=H[l.lng][b];a[e];)f=f[a[e]]=e===a.length-1?d:f[a[e]]||{},e++},error:function(){R.log("failed posting missing key '"+c+"' to: "+l.url)},dataType:"json",async:N.postAsync})}}};var N={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:"translation",fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:L.postMissing,shortcutFunction:"sprintf"},O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},P={create:function(a,b,c,d){var e;if(c){var f=new Date;f.setTime(f.getTime()+60*c*1e3),e="; expires="+f.toGMTString()}else e="";d=d?"domain="+d+";":"",document.cookie=a+"="+b+e+";"+d+"path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},remove:function(a){this.create(a,"",-1)}},Q={create:function(){},read:function(){return null},remove:function(){}},R={extend:F?F.extend:a,deepExtend:b,each:F?F.each:c,ajax:F?F.ajax:"undefined"!=typeof document?e:function(){},cookie:"undefined"!=typeof document?P:Q,detectLanguage:C,escape:d,log:function(a){N.debug&&"undefined"!=typeof console&&console.log(a)},error:function(a){"undefined"!=typeof console&&console.error(a)},getCountyIndexOfLng:function(a){var b=0;return("nb-NO"===a||"nn-NO"===a)&&(b=1),b},toLanguages:function(a){var b=this.log,c=[],d=N.lngWhitelist||!1,e=function(a){!d||d.indexOf(a)>-1?c.push(a):b("rejecting non-whitelisted language: "+a)};if("string"==typeof a&&a.indexOf("-")>-1){var f=a.split("-");a=N.lowerCaseLng?f[0].toLowerCase()+"-"+f[1].toLowerCase():f[0].toLowerCase()+"-"+f[1].toUpperCase(),"unspecific"!==N.load&&e(a),"current"!==N.load&&e(f[this.getCountyIndexOfLng(a)])}else e(a);for(var g=0;g<N.fallbackLng.length;g++)-1===c.indexOf(N.fallbackLng[g])&&N.fallbackLng[g]&&c.push(N.fallbackLng[g]);return c},regexEscape:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(a){return"string"==typeof a?a.replace(/\$/g,"$$$$"):a}};R.applyReplacement=r;var S={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(a){return Number(a>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ak:{name:"Akan",numbers:[1,2],plurals:function(a){return Number(a>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(a){return Number(a>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(a){return Number(0===a?0:1==a?1:2==a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ay:{name:"Aymará",numbers:[1],plurals:function(){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(a){return Number(1!=a)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bo:{name:"Tibetan",numbers:[1],plurals:function(){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(a){return Number(a>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},cgg:{name:"Chiga",numbers:[1],plurals:function(){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(a){return Number(1==a?0:2==a?1:8!=a&&11!=a?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},de:{name:"German",numbers:[1,2],plurals:function(a){return Number(1!=a)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(a){return Number(1!=a)}},en:{name:"English",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es:{name:"Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},et:{name:"Estonian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eu:{name:"Basque",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fa:{name:"Persian",numbers:[1],plurals:function(){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(a){return Number(a>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fr:{name:"French",numbers:[1,2],plurals:function(a){return Number(a>=2)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(a){return Number(1==a?0:2==a?1:7>a?2:11>a?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(a){return Number(1==a||11==a?0:2==a||12==a?1:a>2&&20>a?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gun:{name:"Gun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(a){return Number(1!=a)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(a){return Number(1!=a)}},id:{name:"Indonesian",numbers:[1],plurals:function(){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(a){return Number(a%10!=1||a%100==11)}},it:{name:"Italian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ja:{name:"Japanese",numbers:[1],plurals:function(){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(a){return Number(0!==a)}},ka:{name:"Georgian",numbers:[1],plurals:function(){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ko:{name:"Korean",numbers:[1],plurals:function(){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(a){return Number(1==a?0:2==a?1:3==a?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(a){return Number(a>1)}},lo:{name:"Lao",numbers:[1],plurals:function(){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&(10>a%100||a%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[1,2,0],plurals:function(a){return Number(a%10==1&&a%100!=11?0:0!==a?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(a){return Number(a>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(a){return Number(a>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(a){return Number(a>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(a){return Number(1==a||a%10==1?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(a){return Number(1==a?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ms:{name:"Malay",numbers:[1],plurals:function(){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(a){return Number(1==a?0:0===a||a%100>1&&11>a%100?1:a%100>10&&20>a%100?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(a){return Number(1!=a)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(a){return Number(1!=a)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(a){return Number(a>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(a){return Number(1!=a)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(a){return Number(1==a?0:0===a||a%100>0&&20>a%100?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(a){return Number(1!=a)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(a){return Number(1!=a)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(a){return Number(a%100==1?1:a%100==2?2:a%100==3||a%100==4?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},son:{name:"Songhay",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(a){return Number(1!=a)}},te:{name:"Telugu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(a){return Number(a>1)}},th:{name:"Thai",numbers:[1],plurals:function(){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(a){return Number(a>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(a){return Number(a>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(a){return Number(a>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(a){return Number(a>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(a){return Number(1!=a)}},zh:{name:"Chinese",numbers:[1],plurals:function(){return 0}}},addRule:function(a,b){S.rules[a]=b},setCurrentLng:function(a){if(!S.currentRule||S.currentRule.lng!==a){var b=a.split("-");S.currentRule={lng:a,rule:S.rules[b[0]]}}},needsPlural:function(a,b){var c,d=a.split("-");return c=S.currentRule&&S.currentRule.lng===a?S.currentRule.rule:S.rules[d[R.getCountyIndexOfLng(a)]],c&&c.numbers.length<=1?!1:1!==this.get(a,b)},get:function(a,b){function c(b,c){var d;if(d=S.currentRule&&S.currentRule.lng===a?S.currentRule.rule:S.rules[b]){var e;e=d.plurals(d.noAbs?c:Math.abs(c));var f=d.numbers[e];return 2===d.numbers.length&&1===d.numbers[0]&&(2===f?f=-1:1===f&&(f=1)),f}return 1===c?"1":"-1"}var d=a.split("-");
return c(d[R.getCountyIndexOfLng(a)],b)}},T={},U=function(a,b){T[a]=b},V=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function b(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")}var c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e,f,g,h,i,j,k,l=1,m=c.length,n="",o=[];for(f=0;m>f;f++)if(n=a(c[f]),"string"===n)o.push(c[f]);else if("array"===n){if(h=c[f],h[2])for(e=d[l],g=0;g<h[2].length;g++){if(!e.hasOwnProperty(h[2][g]))throw V('[sprintf] property "%s" does not exist',h[2][g]);e=e[h[2][g]]}else e=h[1]?d[h[1]]:d[l++];if(/[^s]/.test(h[8])&&"number"!=a(e))throw V("[sprintf] expecting number but found %s",a(e));switch(h[8]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e,10);break;case"e":e=h[7]?e.toExponential(h[7]):e.toExponential();break;case"f":e=h[7]?parseFloat(e).toFixed(h[7]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&h[7]?e.substring(0,h[7]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(h[8])&&h[3]&&e>=0?"+"+e:e,j=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ",k=h[6]-String(e).length,i=h[6]?b(j,k):"",o.push(h[5]?e+i:i+e)}return o.join("")},c.cache={},c.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),W=function(a,b){return b.unshift(a),V.apply(null,b)};U("sprintf",function(a,b,c){return c.sprintf?"[object Array]"===Object.prototype.toString.apply(c.sprintf)?W(a,c.sprintf):"object"==typeof c.sprintf?V(a,c.sprintf):a:a}),G.init=f,G.setLng=o,G.preload=g,G.addResourceBundle=h,G.addResource=j,G.addResources=k,G.removeResourceBundle=i,G.loadNamespace=m,G.loadNamespaces=n,G.setDefaultNamespace=l,G.t=x,G.translate=x,G.exists=w,G.detectLanguage=R.detectLanguage,G.pluralExtensions=S,G.sync=L,G.functions=R,G.lng=p,G.addPostProcessor=U,G.options=N});