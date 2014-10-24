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
                return $resource('/events');
            }
        ]) //
        .factory('app.services.event', [ //
            '$resource', //
            function ($resource) {
                return $resource('/event/:id', {id: '@id'});
            }
        ]) //
        ;
});
