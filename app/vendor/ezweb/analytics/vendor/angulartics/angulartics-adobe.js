!function(a){"use strict";a.module("angulartics.adobe.analytics",["angulartics"]).config(["$analyticsProvider",function(a){a.settings.trackRelativePath=!0,a.registerPageTrack(function(a){window.s&&s.t([a])}),a.registerEventTrack(function(a){window.s&&(a?"DOWNLOAD"===a.toUpperCase()?s.tl(this,"d",a):"EXIT"===a.toUpperCase()&&s.tl(this,"e",a):s.tl(this,"o",a))})}])}(angular);