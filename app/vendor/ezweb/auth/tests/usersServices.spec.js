define(['ngMocks', 'ezweb/auth/services/usersServices'], function () {
    'use strict';

    var service;
    var $httpBackend;

    describe('**Testing logout**', function () {

        beforeEach(module('ezweb.auth.services'));

        beforeEach(inject([
            'ezweb.auth.services.users.backend.default',
            '$httpBackend',
            function (_service_, _$httpBackend_) {
                service = _service_;
                $httpBackend = _$httpBackend_;
            }
        ]));

        it('Should define the service', function () {
            expect(service).toBeDefined();
        });

        it('Should call the default $http URL', function () {
            $httpBackend.expectGET('logout').respond();
            service.logout();
            $httpBackend.flush();
        });

//        it('Should call the configured mylogout $http URL', inject([
//            'ezweb.auth.services.users.backend.defaultProvider',
//            function (provider) {
//                provider.configure({logoutUri: 'mylogout'});
//                $httpBackend.expectGET('mylogout').respond();
//                service.logout();
//                $httpBackend.flush();
//            }
//        ]));
    });
});
