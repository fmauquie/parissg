'use strict';

define([
    'angular', //
    'text!./welcome-page.html', //
    'less!./welcome-page' //
], function (angular, template) {
    return angular.module('app.drectives.welcome-page', []) //
        .directive('welcomePage', [
            '$timeout', //
            'ezweb.auth.services.users',
            function ($timeout, usersService) {
                return {
                    template: template,
                    link: function ($scope, $element, $attrs) {
                        $scope.control = {starting: false};

                        $scope.start = function () {
                            usersService.login('a', 'b');
                        };
                        if ($attrs.welcomePage === 'true') {
                            $scope.control.starting = true;
                        }
                    }
                }
            }
        ])
});
