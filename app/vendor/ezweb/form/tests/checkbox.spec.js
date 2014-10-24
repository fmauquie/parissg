define(['ngMocks',
    'ezweb/i18n/main',
    'ezweb/form/directives/checkbox',
    'ezweb/form/directives/layout'], function () {

    'use strict';

    var $scope = {};
    var $compile;

    describe('** Directive multi-checkbox test **', function () {

        beforeEach(module('ezweb.i18n'));
        beforeEach(module('ezweb.form.directives.layout'));
        beforeEach(module('ezweb.form.directives.checkbox'));

        /*--------------------------
         ----- INIT MOCK SCOPE -----
         --------------------------- */

        beforeEach(inject(function ($rootScope, _$compile_) {
            initMockScope($rootScope);
            $compile = _$compile_;
        }));

        function initMockScope($rootScope) {
            $scope = $rootScope.$new();
            $scope.fruits = ['banana', 'apple', 'grape', 'pear'];
            $scope.user = {
                likedFruits: {'banana': true}
            };

        }

        /*---------------------------
         ----- COMPILE DIRECTIVE ----
         ---------------------------- */

        function compile(options) {
            var el = $compile(getDirectiveHtml(options))($scope);
            $scope.$digest();
            return el;
        }

        function getDirectiveHtml(options) {
            var form = angular.element('<form name="form_radio_demo">');
            var checkboxes = angular.element('<ez-form-checkboxes ' +
                'ez-label="Which fruits do you like ?" ' +
                'ez-options="fruits" ' +
                'ng-model="user.likedFruits" ' +
                'ez-option-label="item" ' + (angular.isDefined(options) ? options : '') + '>');
            var pre = angular.element('<pre>').html('{{user | json}}');

            form.append(checkboxes);
            form.append(pre);

            return form;
        }

        /*---------------
         ----- TESTS ----
         ---------------- */

        it('Should generate the right number of checkboxes', function () {
            var element = compile();
            var checkBoxes = element.find('input');
            expect(checkBoxes.length).toEqual(4);
        });

        it('Should bind the content from controller to view', function () {

            var element = compile();
            var checkBoxes = element.find('input');

            expect(checkBoxes.eq(0).val()).toEqual('on');
            expect(checkBoxes.eq(3).val()).toEqual('on');

            $scope.$apply(function () {
                $scope.user.likedFruits = {'banana': true, 'pear': true};
            });

            expect(checkBoxes.eq(0).val()).toBeTruthy();
            expect(checkBoxes.eq(3).val()).toBeTruthy();

        });

        it('Should check all the checkboxes if ez-options-checkall is set to true', function () {

            var element = compile('ez-options-checkall="true"');
            var checkBoxes = element.find('input');

            for (var i = 0; i < checkBoxes.length; i++) {
                expect(checkBoxes.eq(i).val()).toBeTruthy();
            }

        });

    });

    describe('** ez-form-checkbox **', function () {
        beforeEach(module('ezweb.form.directives.checkbox'));

        /*--------------------------
         ----- INIT MOCK SCOPE -----
         --------------------------- */

        beforeEach(inject(function ($rootScope, _$compile_) {
            initMockScope($rootScope);
            $compile = _$compile_;
        }));

        function initMockScope($rootScope) {
            $scope = $rootScope.$new();
            $scope.user = {subscribe: false};
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
            var form = angular.element('<form name="form_radio_demo">');
            var checkbox = angular.element('<ez-form-checkbox ' +
                'ez-label="About your privacy:" ' +
                'ng-model="user.subscribe">');
            var pre = angular.element('<pre>').html('{{user | json}}');

            form.append(checkbox);
            form.append(pre);

            return form;
        }

        /*---------------
         ----- TESTS ----
         ---------------- */

        it('Should bind the content from controller to view', function () {
            var element = compile();
            var checkbox = element.find('input');

            expect(checkbox.val()).toEqual('on');

            $scope.$apply(function () {
                $scope.user.subscribe = true;
            });

            expect(checkbox.val()).toBeTruthy();

        });

        it('Should display a label', function () {
            var element = compile();
            var span = element.find('label');

            expect(span).toBeDefined();
            expect(span.text()).toEqual('About your privacy:');
        });

        it('Should display only one checkbox', function () {
            var element = compile();
            var checkbox = element.find('input');
            expect(checkbox.length).toEqual(1);
        });

    });

});
