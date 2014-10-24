/**
 * This is an example filter.
 *
 * Although it is included in the app and can be used as-is, we recommend that you rename it
 * if you want to actually use it.
 */
define([ //
    'angular' //
], function (angular) {
    'use strict';
    return angular.module('app.filters.examples', []) //
        .filter('checkmark', [ //
            function () {
                return function (input) {
                    return input ? '\u2713' : '\u2718';
                };
            }
        ]) //
        ;
});
