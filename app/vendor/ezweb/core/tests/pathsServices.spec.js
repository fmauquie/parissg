define(['ngMocks', 'ezweb/core/services/pathsServices'], function () {

    'use strict';

    describe('** Path require service test **', function () {

        var requireService;

        beforeEach(module('ezweb.core.services.paths'));

        beforeEach(inject(['ezweb.core.services.paths.require',
            function (_requireService_) {
                requireService = _requireService_;
            }
        ]));

        it('Should init the service', function(){
            expect(requireService).toBeDefined();
        });

        it('Should give the right url', function(){
            var url = requireService.url('angular');
            expect(url).toEqual('/base/app/vendor/angular/angular');
        });

    });

    describe('** Path require provider test **', function(){

        var service;

        beforeEach(module('ezweb.core.services.paths'));

        beforeEach(inject(['ezweb.core.services.paths',
            function (_service_) {
                service = _service_;
            }
        ]));

        it('Should init the provider', function(){
            expect(service).toBeDefined();
        });

        it('Should base the url on root', function(){
            var url = service.root('test');
            expect(url).toEqual('/base/../test');
        });

        it('Should add a namespace for the features', function(){
            var url = service.feature('core', 'test');
            expect(url).toEqual('/base/features/core/test');
        });

        it('Should add a namespace for the directives', function(){
            var url = service.directive('core', 'test');
            expect(url).toEqual('/base/directives/core/test');
        });

        it('Should add a namespace for the layouts', function(){
            var url = service.layout('core', 'test');
            expect(url).toEqual('/base/layouts/core/test');
        });

    });

});
