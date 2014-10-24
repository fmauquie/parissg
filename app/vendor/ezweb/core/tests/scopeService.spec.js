define(['ngMocks', 'ezweb/core/services/scopeServices'], function () {

    'use strict';

    var service;
    var $rootScope;

    describe('** Scope service test **', function () {

        beforeEach(module('ezweb.core.services.scope'));

        beforeEach(inject(['ezweb.core.services.appScope', function (_service_, _$rootScope_) {
            service = _service_;
            $rootScope = _$rootScope_;
        }]));

        it('Should init the service', function () {
            expect(service).toBeDefined();
        });

        it('Should store an object in a simple namespace', function () {
            service.ensure('test', {simpleProperty: 'go'});
            expect(service.test.simpleProperty).toEqual('go');
        });

        it('Should store an object in a complex namespace', function () {
            service.ensure('test.example.properties', {simpleProperty: 'go', otherProperty: 5});
            expect(service.test.example.properties.simpleProperty).toEqual('go');
            expect(service.test.example.properties.otherProperty).toEqual(5);
        });

        it('Should not allow an empty namespace when calling the ensure method', function () {
            service.ensure('', {simpleProperty: 'go'});
            expect(service.simpleProperty).toBeUndefined();
        });

    });

});
