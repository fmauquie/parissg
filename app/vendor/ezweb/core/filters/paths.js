define(["angular","../services/pathsServices"],function(a){"use strict";return a.module("ezweb.core.filters.paths",["ezweb.core.services.paths"]).filter("ezFeaturePath",["ezweb.core.services.paths",function(a){return function(b,c){return a.feature(c,b)}}]).filter("ezDirectivePath",["ezweb.core.services.paths",function(a){return function(b,c){return a.directive(c,b)}}]).filter("ezLayoutPath",["ezweb.core.services.paths",function(a){return function(b,c){return a.layout(c,b)}}])});