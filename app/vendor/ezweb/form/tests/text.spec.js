define(['ngMocks', 'ezweb/form/directives/text'], function(){

    var $scope = {};
    var $compile;

    describe('** ez-form-text directive test **', function(){
        beforeEach(module('ezweb.form.directives.text'));

        /*--------------------------
         ----- INIT MOCK SCOPE -----
         --------------------------- */

        beforeEach(inject(function ($rootScope, _$compile_) {
            initMockScope($rootScope);
            $compile = _$compile_;
        }));

        function initMockScope($rootScope) {
            $scope = $rootScope.$new();
            $scope.user = {name: 'John'};
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
            var form = angular.element('<form name="form_text_demo">');
            var text = angular.element('<ez-form-text ' +
                'ez-label="Name" ' +
                'ng-model="user.name">');
            form.append(text);
            return form;
        }

        /*---------------
         ----- TESTS ----
         ---------------- */

        it('Should bind the content from controller to view', function(){
            var element = compile();
            var text = element.find('input');
            expect(text.val()).toEqual('John');

            $scope.$apply(function(){
                $scope.user.name = 'Piers';
            });

            expect(text.val()).toEqual('Piers');
        });

        it('Should display a label', function(){
            var element = compile();
            var label = element.find('label');
            expect(label).toBeDefined();
            expect(label.text()).toEqual('Name');
        });

    });

});
