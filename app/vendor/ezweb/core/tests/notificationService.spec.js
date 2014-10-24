define(['ngMocks',
        'ezweb/core/services/scopeServices',
        'ezweb/core/services/notificationService'], function(){

    'use strict';

    var service;

    describe('** Notification provider test **', function(){

        beforeEach(module('ezweb.core.services.scope'));
        beforeEach(module('ezweb.core.services.notifications'));

        beforeEach(inject([
            'ezweb.core.services.notifications', function(_service_){
                service = _service_;
            }
        ]));

        it('Should init the service', function(){
            expect(service).toBeDefined();
        });

    });

});
