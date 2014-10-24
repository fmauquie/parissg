/**
 *
 */
define([ //
    'angular' //
], function (angular) {
    'use strict';
    return angular.module('app.services.users', [])
        .factory('app.services.users', [ //
            '$resource', //
            function ($resource) {
                return  $resource('/users');
            }
        ]) //
        ;
});
