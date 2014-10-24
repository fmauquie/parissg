'use strict';

define([
    'angular'
], function (angular) {
    return angular.module('app.services.authentication.backend', []) //
        .service('app.services.authentication.backend', [
            '$q', //
            function ($q) {
                this.login = function () {
                    var deferred = $q.defer();

                    deferred.resolve({
                        username: 'John Doe',
                        roles: []
                    });

                    return deferred.promise;
                };

                this.current = function () {
                    var deferred = $q.defer();

                    deferred.resolve({
                        username: 'John Doe',
                        roles: []
                    });

                    return deferred.promise;
                };

                this.logout = function () {
                    var deferred = $q.defer();

                    deferred.resolve();

                    return deferred.promise;
                };

                this.supportsRememberMe = function () {
                    return true;
                };
            }
        ]) //
    ;
});
