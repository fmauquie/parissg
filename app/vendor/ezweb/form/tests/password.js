define(["ngMocks","ezweb/form/directives/password"],function(){var a,b={};describe("** ez-form-password Directive test **",function(){function c(a){b=a.$new(),b.info={password:null}}function d(){var c=a(e())(b);return b.$digest(),c}function e(){var a=angular.element('<form name="password_form">'),b=angular.element('<ez-form-password ng-model="info.password" ng-required="true" ez-autocomplete>');return a.append(b),a}beforeEach(module("ezweb.form.directives.password")),beforeEach(inject(function(b,d){c(b),a=d})),it("Should bind the content from controller to view",function(){var a=d(),c=a.find("input");expect(c.val()).toEqual(""),b.$apply(function(){b.info.password="test"}),expect(c.val()).toEqual("test")}),it("Should hide the text by default",function(){var a=d(),b=a.children().children();expect(b.hasClass("hidden")).toBeTruthy()})})});