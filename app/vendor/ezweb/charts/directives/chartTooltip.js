define(["angular","jquery","../../core/utilities"],function(a,b,c){"use strict";return a.module("ezweb.chart.directives.chartTooltip",[]).directive("ezChartTooltip",function(){return{require:["ezChartTooltip","^ezChart"],restrict:"E",scope:{},controller:["$scope",function(){this.id=null,this.chartController=null,this.config=null,this.initConfig=function(a){var c=b.extend(!0,{},a,{id:this.id});this.config=c},this.init=function(a){this.initConfig(a),this.chartController.setTooltipConfig(this.config)}}],link:function(a,b,d,e){var f=e[0];f.chartController=e[1];var g={};c.evaluateAndApply(a.$parent,d,g,["animation","crosshairs","dateTimeLabelFormats","enabled","followPointer","followTouchMove","formatter","headerFormat","positioner","shadow","shared","style","useHTML"],{opposite:!1,reversed:!1,showEmpty:!0}),c.copyIfDefined(d,g,["backgroundColor","borderColor","borderRadius","borderWidth","changeDecimals","pointFormat","shape","snap","valueDecimals","valuePrefix","valueSuffix","xDateFormat"]),f.init(g)}}})});