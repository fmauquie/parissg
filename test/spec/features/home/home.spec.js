'use strict';

/**
 * Example test.
 */
define([ //
    'ngMocks', //
    'ngRoute', //
    'ezweb/main', //
    'Source/features/home/home', //
    'Source/services/exampleService' //
], function(){

    var scope, controller, $controller;

    function createController() {
        return $controller('app.features.home.controller', {
            $scope: scope
        });
    }

    describe('Test example', function(){

        // Load all necessary modules
        beforeEach(module('ngRoute'));
        beforeEach(module('ezweb.i18n'));
        beforeEach(module('app.features.home'));
        beforeEach(module('app.services.example'));

        // Inject a new scope
        beforeEach(inject(function($rootScope, _$controller_){
            scope = $rootScope.$new();
            $controller = _$controller_;
        }));

        it('Should create the controller', function(){
            createController();
        });

    });

});
