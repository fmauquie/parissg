define(['ngMocks', 'ezweb/form/directives/password'], function () {

    var $scope = {};
    var $compile;

    describe('** ez-form-password Directive test **', function () {

        beforeEach(module('ezweb.form.directives.password'));

        /*--------------------------
         ----- INIT MOCK SCOPE -----
         --------------------------- */

        beforeEach(inject(function ($rootScope, _$compile_) {
            initMockScope($rootScope);
            $compile = _$compile_;
        }));

        function initMockScope($rootScope) {
            $scope = $rootScope.$new();
            $scope.info = {password: null};
        }

        /*---------------------------
         ----- COMPILE DIRECTIVE ----
         ---------------------------- */

        function compile() {
            var el = $compile(getDirectiveHtml())($scope);
            $scope.$digest();
            return el;
        }

        function getDirectiveHtml() {
            var form = angular.element('<form name="password_form">');
            var password = angular.element('<ez-form-password ng-model="info.password" ng-required="true" ez-autocomplete>');
            form.append(password);
            return form;
        }

        /*---------------
         ----- TESTS ----
         ---------------- */

        it('Should bind the content from controller to view', function(){
            var element = compile();
            var input = element.find('input');

            expect(input.val()).toEqual('');

            $scope.$apply(function(){
                $scope.info.password = 'test';
            });

            expect(input.val()).toEqual('test');
        });

        it('Should hide the text by default', function () {
            var element = compile();
            var div = element.children().children();
            expect(div.hasClass('hidden')).toBeTruthy();
        });

    });

});
