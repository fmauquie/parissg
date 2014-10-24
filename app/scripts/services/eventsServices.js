/**
 *
 */
define([ //
    'angular' //
], function (angular) {
    'use strict';
    return angular.module('app.services.events', [])
        .factory('app.services.events', [ //
            '$resource', //
            function ($resource) {
                return  $resource('/events');
            }
        ]) //
        ;
});
