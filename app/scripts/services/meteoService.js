define([ //
    'angular' //
], function (angular) {
    'use strict';
    return angular.module('app.services.generic', [])
        .factory('meteo', [ //
            'Restangular', //
            function (restangular) {
                return {
                    get: restangular.all('api/meteo').getList()
                };
            }
        ]);
});
