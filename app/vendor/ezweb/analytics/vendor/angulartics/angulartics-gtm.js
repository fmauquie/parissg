!function(a){"use strict";a.module("angulartics.google.tagmanager",["angulartics"]).config(["$analyticsProvider",function(a){a.registerPageTrack(function(a){var b=window.dataLayer=window.dataLayer||[];b.push({event:"content-view","content-name":a})}),a.registerEventTrack(function(a,b){var c=window.dataLayer=window.dataLayer||[];c.push({event:"interaction",target:b.category,action:a,"target-properties":b.label,value:b.value,"interaction-type":b.noninteraction})})}])}(angular);