define(["angular"],function(a){function b(a,b,c,d){var e=c.startsWith(a),f=d.startsWith(a);return e&&f?c.localeCompare(d):e&&!f?b:!e&&f?-1*b:void 0}return"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(a){return this.slice(0,a.length)==a}),{start:function(c){if(a.isUndefined(a.__ezweb)||a.isUndefined(a.__ezweb.definedModules))throw'EZWeb can not automatically determine the modules to load. Make sure in your scripts/requirejs.conf.json your "angular" vendor is not overridden. If you want to override the angular library used by EZWeb, redefine the path to "angular-internal" instead.';var d=Object.keys(a.__ezweb.definedModules);d.sort(function(d,e){var f=b("ng",-1,d,e);return a.isUndefined(f)&&(f=b("ezweb",-1,d,e),a.isUndefined(f)&&(f=b(c||"app",1,d,e),a.isUndefined(f)&&(f=d.localeCompare(e)))),f});var e=a.module(c||"app",d);return require(["domReady!"],function(b){a.bootstrap(b,["app"])}),e}}});