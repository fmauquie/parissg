"use strict";define(["angular"],function(a){return a.module("ezweb.core.services.responsive",["ezweb.core.services.scope"]).factory("ezweb.core.services.responsive",["ezweb.core.services.scope",function(a){return a.ensure("responsive",{part:"",orientation:!1,portrait:!1,landscape:!1,breakpoint:!1})}])});