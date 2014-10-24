define(["angular"],function(a){"use strict";var b=window.angulartics||(window.angulartics={});b.waitForVendorCount=0,b.waitForVendorApi=function(a,c,d,e,f){f||b.waitForVendorCount++,e||(e=d,d=void 0),!Object.prototype.hasOwnProperty.call(window,a)||void 0!==d&&void 0===window[a][d]?setTimeout(function(){b.waitForVendorApi(a,c,d,e,!0)},c):(b.waitForVendorCount--,e(window[a]))},a.module("angulartics",[]).provider("$analytics",function(){var c={pageTracking:{autoTrackFirstPage:!0,autoTrackVirtualPages:!0,trackRelativePath:!1,autoBasePath:!1,basePath:""},eventTracking:{},bufferFlushDelay:1e3},d=["pageTrack","eventTrack","setUsername","setUserProperties","setUserPropertiesOnce","setSuperProperties","setSuperPropertiesOnce"],e={},f={},g=function(a){return function(){b.waitForVendorCount&&(e[a]||(e[a]=[]),e[a].push(arguments))}},h=function(b,c){return f[b]||(f[b]=[]),f[b].push(c),function(){var c=arguments;a.forEach(f[b],function(a){a.apply(this,c)},this)}},i={settings:c},j=function(a,b){b?setTimeout(a,b):a()},k={$get:function(){return i},api:i,settings:c,virtualPageviews:function(a){this.settings.pageTracking.autoTrackVirtualPages=a},firstPageview:function(a){this.settings.pageTracking.autoTrackFirstPage=a},withBase:function(b){this.settings.pageTracking.basePath=b?a.element("base").attr("href").slice(0,-1):""},withAutoBase:function(a){this.settings.pageTracking.autoBasePath=a}},l=function(b,d){i[b]=h(b,d);var f=c[b],g=f?f.bufferFlushDelay:null,k=null!==g?g:c.bufferFlushDelay;a.forEach(e[b],function(a,b){j(function(){d.apply(this,a)},b*k)})},m=function(a){return a.replace(/^./,function(a){return a.toUpperCase()})},n=function(a){var b="register"+m(a);k[b]=function(b){l(a,b)},i[a]=h(a,g(a))};return a.forEach(d,n),k}).run(["$rootScope","$location","$window","$analytics","$injector",function(a,b,c,d,e){if(d.settings.pageTracking.autoTrackFirstPage){var f=!0;if(e.has("$route")){var g=e.get("$route");for(var h in g.routes){f=!1;break}}else if(e.has("$state")){var i=e.get("$state");for(var j in i.get()){f=!1;break}}else f=!1;if(f)if(d.settings.pageTracking.autoBasePath&&(d.settings.pageTracking.basePath=c.location.pathname),d.settings.trackRelativePath){var k=d.settings.pageTracking.basePath+b.url();d.pageTrack(k)}else d.pageTrack(b.absUrl())}d.settings.pageTracking.autoTrackVirtualPages&&(d.settings.pageTracking.autoBasePath&&(d.settings.pageTracking.basePath=c.location.pathname+"#"),e.has("$route")&&a.$on("$routeChangeSuccess",function(a,c){if(!c||!(c.$$route||c).redirectTo){var e=d.settings.pageTracking.basePath+b.url();d.pageTrack(e)}}),e.has("$state")&&a.$on("$stateChangeSuccess",function(){var a=d.settings.pageTracking.basePath+b.url();d.pageTrack(a)}))}]).directive("analyticsOn",["$analytics","$timeout",function(b){function c(a){return["a:","button:","button:button","button:submit","input:button","input:submit"].indexOf(a.tagName.toLowerCase()+":"+(a.type||""))>=0}function d(a){return c(a)?"click":"click"}function e(a){return c(a)?a.innerText||a.value:a.id||a.name||a.tagName}function f(a){return"analytics"===a.substr(0,9)&&-1===["On","Event","If","Properties","EventType"].indexOf(a.substr(9))}function g(a){var b=a.slice(9);return"undefined"!=typeof b&&null!==b&&b.length>0?b.substring(0,1).toLowerCase()+b.substring(1):b}return{restrict:"A",scope:!0,link:function(c,h,i){var j=i.analyticsOn||d(h[0]);c.$analytics={},a.forEach(i.$attr,function(a,b){f(b)&&(c.$analytics[g(b)]=i[b],i.$observe(b,function(a){c.$analytics[g(b)]=a}))}),a.element(h[0]).bind(j,function(d){var f=i.analyticsEvent||e(h[0]);c.$analytics.eventType=d.type,(!i.analyticsIf||c.$eval(i.analyticsIf))&&(i.analyticsProperties&&a.extend(c.$analytics,c.$eval(i.analyticsProperties)),b.eventTrack(f,c.$analytics))})}}}])});