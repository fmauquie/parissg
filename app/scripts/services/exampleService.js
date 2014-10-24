/**
 * This is an example service that fetches an "hello world" text from the REST server.
 *
 * You can find the associated REST stub in /tasks/rest/example.js.
 */
define([ //
    'angular' //
], function (angular) {
    'use strict';
    return angular.module('app.services.example', [])
        .factory('app.services.example', [ //
            '$http', //
            function ($http) {
                return {
                    get: function() {
                        return $http.get('example/hello');
                    }
                };
            }
        ]) //
        ;
});
