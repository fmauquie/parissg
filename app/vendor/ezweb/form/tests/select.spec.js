define(['ngMocks', 'ezweb/form/directives/select'], function () {

    var $scope = {};
    var $compile;

    describe('**Testing select directive**', function () {

        beforeEach(module('ezweb.form.directives.select'));

        /*--------------------------
         ----- INIT MOCK SCOPE -----
         --------------------------- */

        beforeEach(inject(function ($rootScope, _$compile_) {
            initMockScope($rootScope);
            $compile = _$compile_;
        }));

        function initMockScope($rootScope) {
            $scope = $rootScope.$new();
            $scope.genders = [new Gender('M'), new Gender('F')];
            $scope.user = {gender: $scope.genders[1]};
        }

        function Gender(name) {
            this.name = name;
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
            var formSelect = angular.element('<ez-form-select ' +
                'ez-label="Your Gender" ' +
                'ng-model="user.gender" ' +
                'ng-required="true" ' +
                'ez-options="g.name for g in genders">');
            var pre = angular.element('<pre>').html('{{user | json}}');

            form.append(formSelect);
            form.append(pre);

            return form;
        }

        /*---------------
         ----- TESTS ----
         ---------------- */

        it('Should generate the right number of options', function () {
            var element = compile();
            var options = element.find('option');
            expect(options.length).toEqual(2);
        });

        it('Should bind the content', function () {
            var element = compile();
            var options = element.find('option');
            var selectedAttribute = options.eq(1).attr('selected');

            expect(selectedAttribute).toBeDefined();
            expect(selectedAttribute).toEqual('selected');

        });

    });

});
