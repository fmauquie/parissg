"use strict";define(["angular"],function(a){return a.module("ezweb.form.directives.behavior",[]).directive("ezFormName",[function(){var b=0;return{priority:1e3,compile:function(c,d){b++;var e=""+d.ezFormName+b;return d.name=e,c.attr("name",e),{pre:function(b,c,d){console.log("ezFormName is deprecated. Please use the native name attribute on form elements."),a.isDefined(d.bindTo)&&(b[d.bindTo]=e)}}}}}]).directive("ezSubmitButton",["$timeout",function(b){return{restrict:"A",template:'<button class="btn btn-primary" ng-click="submit()" ng-transclude></button>',replace:!0,transclude:!0,scope:{ezSubmitButton:"&ezSubmitButton"},link:function(c,d){var e=d.closest("form, ng-form").controller("form");if(a.isUndefined(e))throw"No form found controller found for ezSubmitButton.";c.submit=function(){a.forEach(e.ezwebForm.checkAutocomplete,function(a){a()}),b(function(){return e.$invalid?void(e.ezwebForm.attempted=!0):void c.ezSubmitButton()},0)}}}}]).directive("ezValidatorSetup",[function(){return{restrict:"A",require:"form",link:function(a,b,c,d){a[c.ezValidatorSetup](d)}}}]).directive("ezError",["$q",function(b){var c=0;return{restrict:"E",require:"^formDirective",transclude:!0,template:'<p class="help-block" ng-show="isInvalid()" ng-transclude></p>',scope:{key:"@",validator:"&",watches:"&"},link:function(d,e,f,g){var h=d.key;if(a.isUndefined(f.key)||""===d.key){if(a.isUndefined(f.validator)||""===f.validator)throw'ezError: You need to specify the key to watch to display error "'+e.html()+'".';h="error-"+c++}d.isInvalid=function(){return g.ngModelController.$error[h]},g.addPlugin(function(){if(a.isDefined(f.validator)&&""!==f.validator){var c=function(){var c,e,f=d.validator();a.isUndefined(f)?(e=b.defer(),c=e.promise,e.resolve(!1)):a.isDefined(f.then)?c=f:a.isDefined(f.$promise)?c=f.$promise:(e=b.defer(),c=e.promise,e.resolve(f)),c.then(function(a){g.ngModelController.$setValidity(h,a)})};g.ngModelController.$viewChangeListeners.push(c),d.$watch(d.watches,c)}var i=e.closest("[ez-control-body]").find(".ez-errors-placeholder");0===i.size()&&(i=g.$element.find(".ez-errors-placeholder")),i.append(e)})}}}]).directive("ezErrors",[function(){return{restrict:"A",link:function(a,b,c){console.log('The ez-errors attribute of form controls is deprecated. It does not work any more. Please replace ez-errors="'+c.ezErrors+'" with corresponding <ez-error key="...">message</ez-error> elements.')}}}])});