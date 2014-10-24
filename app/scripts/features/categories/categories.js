'use strict';

define([
    'angular', //
    'text!./categories.html', //
    'less!./categories' //
], function (angular, categoriesTemplate) {
    return angular.module('app.features.categories', []) //
        .config([ //
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when('/categories', {
                    template: categoriesTemplate
                });
            }
        ]) //
        .controller('app.features.categories', [
            '$scope', //
            '$timeout', //
            function ($scope, $timeout) {
                $scope.categories = [];

                $timeout(function () {
                    $scope.categories = [
                        'Paris Events',
                        'Paris Cultural',
                        'Theater',
                        'Show',
                        'Street - Art'
                    ];
                }, 100);

                $scope.removeCategories = function () {
                    $scope.categories = [];
                };
            }
        ]) //
        ;
});
