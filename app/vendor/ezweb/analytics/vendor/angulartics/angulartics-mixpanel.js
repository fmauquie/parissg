!function(a){"use strict";a.module("angulartics.mixpanel",["angulartics"]).config(["$analyticsProvider",function(a){angulartics.waitForVendorApi("mixpanel",500,"__loaded",function(b){a.registerSetUsername(function(a){b.identify(a)})}),angulartics.waitForVendorApi("mixpanel",500,"__loaded",function(b){a.registerSetSuperPropertiesOnce(function(a){b.register_once(a)})}),angulartics.waitForVendorApi("mixpanel",500,"__loaded",function(b){a.registerSetSuperProperties(function(a){b.register(a)})}),angulartics.waitForVendorApi("mixpanel",500,"__loaded",function(b){a.registerSetUserPropertiesOnce(function(a){b.people.set_once(a)})}),angulartics.waitForVendorApi("mixpanel",500,"__loaded",function(b){a.registerSetUserProperties(function(a){b.people.set(a)})}),angulartics.waitForVendorApi("mixpanel",500,"__loaded",function(b){a.registerPageTrack(function(a){b.track("Page Viewed",{page:a})})}),angulartics.waitForVendorApi("mixpanel",500,"__loaded",function(b){a.registerEventTrack(function(a,c){b.track(a,c)})})}])}(angular);