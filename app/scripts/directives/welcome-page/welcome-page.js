'use strict';

define([
    'angular', //
    'text!./welcome-page.html', //
    'less!./welcome-page' //
], function (angular, template) {
    return angular.module('app.drectives.welcome-page', []) //
        .directive('welcomePage', [function () {
            return {
                restrict: 'AEC',
                template: template,
                scope: {

                },
                controller: function($scope, $element){
                    $scope.part1Class = "part1";
                    $scope.part2Class= "part2";

                    $scope.onClick = function() {
                        $scope.part1Class = "part1-end-animate";
                        $scope.part2Class = "part2-end-animate";


                    }
                },
            }
        }])
});