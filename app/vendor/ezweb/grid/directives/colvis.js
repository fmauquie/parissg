define(["angular","jquery","../utilities","../vendor/dataTables.colVis","less!../styles/colvis"],function(a,b,c){"use strict";return a.module("ezweb.grid.colvis",["ezweb.grid"]).provider("ezweb.grid.colvis",[function(){b.fn.dataTable.ColVis.defaults.buttonText='<i class="fa fa-columns"></i>',this.changeButtonText=function(a){b.fn.dataTable.ColVis.defaults.buttonText=a},this.$get=function(){}}]).service("ezweb.internal.grid.colvis.holder",[function(){var a=0,b={};this.template=function(a){return b[a]},this.addTitleTemplate=function(c){var d="id"+ ++a;return b[d]=c,d},this.removeTitleTemplate=function(a){delete b[a]}}]).directive("ezGridColVis",["$compile","ezweb.internal.grid.colvis.holder",function(d,e){return{restrict:"E",require:"^ezGrid",terminal:!0,scope:{api:"=?",activate:"@",exclude:"&",buttonText:"@",restore:"@",showAll:"@",stateChange:"&",overlayFade:"&",align:"@",order:"@",groups:"&",cssPosition:"&",ezAppendTo:"@",ezPrependTo:"@",ezInsertBefore:"@",ezInsertAfter:"@"},link:function(f,g,h,i){var j=c.createConfigFromScope(f,["exclude","overlayFade","groups","cssPosition"]);delete j.ezAppendTo,delete j.ezPrependTo,delete j.ezInsertBefore,delete j.ezInsertAfter;var k,l,m;if(a.isDefined(h.ezAppendTo)?(k=!1,l="append",m=f.ezAppendTo):a.isDefined(h.ezPrependTo)?(k=!1,l="prepend",m=f.ezPrependTo):a.isDefined(h.ezInsertBefore)?(k=!0,l="insertBefore",m=f.ezInsertBefore):a.isDefined(h.ezInsertAfter)?(k=!0,l="insertAfter",m=f.ezInsertAfter):(k=!1,l="append",m=".dataTables_filter"),a.isUndefined(h.buttonText)){var n=g.find("[ez-button-label]");if(n.size()>0){var o=a.element("<div></div>");o.append(n),j.buttonText=o.html()}}var p=g.find("[ez-column-label]");j.label=p.size()>0?function(b,c){p.attr("ez-internal-colvis-label",e.addTitleTemplate(c)),p.attr("ez-column-index",b);var d=a.element("<div></div>");return d.append(p),d.html()}:function(a,b){return"<span>"+b+"</span>"};var q=f.$parent.$new();q.gridController=i,j.ezOnDisplay=function(a){q.$apply(function(){d(a)(q)})},j.stateChange=function(b,e){e===!0&&i.api.rows().eq(0).each(function(e){var f=i.api.row(e),g=f.node();if(null!==g){var h=c.initRowScope(f.data(),null,i).scope,j=a.element(i.api.cell(e,b).node());j.addClass("ez-grid-cloak"),d(j)(h),h.$evalAsync(function(){j.removeClass("ez-grid-cloak")})}}),a.isDefined(h.stateChange)&&f.stateChange.call(this,arguments)},i.addPlugin(function(c){f.api=new b.fn.dataTable.ColVis(c,j);var e=a.element(i.api.table().node()).closest(".dataTables_wrapper"),g=a.element(f.api.button()),h=k===!0?g:e.find(m),n=k===!0?e.find(m):g;h[l](n),d(g)(q)})}}}]).directive("ezInternalColvisLabel",["ezweb.internal.grid.colvis.holder",function(b){return{scope:!0,controller:["$scope","$attrs",function(a,b){this.titleIndex=b.ezInternalColvisLabel;var c=parseInt(b.ezColumnIndex);a.index=c,a.column=a.gridController.api.settings()[0].aoColumns[c]}],link:function(c,d,e,f){if(a.isUndefined(c.gridController)||a.isUndefined(c.gridController.api))throw"This directive is internal and is intended to be used only in the context of the EZWeb Grid ColVis plugin. Keep your hands out of it.";c.$on("$destroy",function(){b.removeTitleTemplate(f.titleIndex)})}}}]).directive("ezGridColVisTitle",["$compile","ezweb.internal.grid.colvis.holder",function(a,b){return{require:"^ezInternalColvisLabel",link:function(c,d,e,f){var g=b.template(f.titleIndex);d.html(g),a(d.children())(c)}}}])});