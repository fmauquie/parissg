define(["angular"],function(a){"use strict";return a.module("ezweb.portal.services.data",[]).service("ezweb.portal.services.data",["$q",function(b){function c(){this.empty=!0}function d(b,c){var d={};if(a.isUndefined(b))throw"The default row size can't be undefined";if(a.isUndefined(c))return b;var e=0;return a.forEach(f,function(b){a.isDefined(c[b])&&c[b]>0&&(e=c[b]),d[b]=e}),d}var e=12,f=["xs","sm","md","lg"],g={item:"item",cubeRatio:1,readOnly:!1,rowSize:{xs:0,md:0,sm:3,lg:0},slots:void 0};return{evaluateData:function(c,d){if(a.isDefined(c)){var e;if(a.isFunction(c.then))e=c;else if(a.isDefined(c.$promise))e=c.$promise;else if(a.isArray(c)||a.isObject(c)){var f=b.defer();e=f.promise,f.resolve(c)}e.then(d)}},formatData:function(b,d){var e=[];if(a.isUndefined(b))throw"The data should not be null.";if(a.isUndefined(d))return b;if(0>d)throw"The expected length can't be lesser then 0";if(d<b.length)e=b.slice(0,d);else if(d===b.length)e=b;else{e=b;for(var f=0;f<d-b.length;f++)e.push(new c)}return e},classes:function(b){var c=[];return a.forEach(f,function(d){var f=b[d];a.isDefined(f)&&f>0&&c.push("col-"+d+"-"+e/f)}),c.join(" ")},getScopeConfig:function(b){var c={};return a.forEach(g,function(a,e){c[e]="rowSize"===e?d(a,b[e]):b[e]?b[e]:a}),c},extendRowSize:d}}])});