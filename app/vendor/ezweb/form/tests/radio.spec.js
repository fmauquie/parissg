define(['ngMocks', 'ezweb/form/directives/radio'], function(){

    var $scope = {};
    var $compile;

    describe('** Radio directive test **', function(){
        beforeEach(module('ezweb.form.directives.radio'));

        /*--------------------------
         ----- INIT MOCK SCOPE -----
         --------------------------- */

        beforeEach(inject(function ($rootScope, _$compile_) {
            initMockScope($rootScope);
            $compile = _$compile_;
        }));

        function initMockScope($rootScope) {
            $scope = $rootScope.$new();
            $scope.colors = [new Color('Green', 'green'), new Color('Blue', 'blue'), new Color('Red', 'red')];
            $scope.user = {
                favoriteColor: 'blue'
            };
        }

        function Color(label, value){
            this.label = label;
            this.value = value;
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
            var formSelect = angular.element('<ez-form-radio ' +
                'ez-label="What is your favorite color ?" ' +
                'ng-model="user.favoriteColor" ' +
                'ez-options="colors" ' +
                'ez-option-label="colorNames[item]">');

            var pre = angular.element('<pre>').html('{{user | json}}');

            form.append(formSelect);
            form.append(pre);

            return form;
        }

        /*---------------
         ----- TESTS ----
         ---------------- */

        it('Should display the right number of radios', function(){
            var element = compile();
            var radios = element.find('input');
            expect(radios.length).toEqual(3);
        });

    });

});
