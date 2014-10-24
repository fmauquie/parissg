"use strict";define(["angular","./sg/sg"],function(a){return a.module("ezweb.themes",[]).directive("ezTheme",["ezweb.themes.service",function(b){return{restrict:"A",scope:{ezTheme:"@"},link:function(c,d){c.$watch("ezTheme",function(c){a.isDefined(c)&&b.changeTo(c,d)})}}}]).provider("ezweb.themes.service",[function(){var b={triggerClass:void 0,css:void 0,init:a.noop,destroy:a.noop},c={};this.register=function(d,e){var f=a.copy(b);a.extend(f,e),c[d]=f},this.$get=["$window","$document",function(b,d){var e={};return{changeTo:function(f,g){if(a.isUndefined(c[f]))throw"No theme named "+f+" has been registered. Register the theme first.";var h=g.data("currentThemeName");if(a.isDefined(h)&&(a.isDefined(c[h].triggerClass)&&g.removeClass(c[h].triggerClass),c[h].destroy.call(c[h],g,h)),a.isDefined(c[f].triggerClass)&&g.addClass(c[f].triggerClass),c[f].init.call(c[f],g,f),a.isUndefined(e[f])&&a.isDefined(c[f].css)){if(d[0].createStyleSheet)d[0].createStyleSheet(c[f].css);else{var i=a.element('<link rel="stylesheet" type="text/css" media="screen" />');i.attr("href",c[f].css),a.element("head").append(i)}e[f]=!0,a.isDefined(b.respond)&&b.respond.mediaQueriesSupported===!1&&a.element("head").find('link[rel="stylesheet"][href="'+c[f].css+'"]').one("load",function(){b.respond.update()})}g.data("currentThemeName",f)}}}]}])});