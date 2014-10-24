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
            function ($scope) {
                $scope.categories = [
                    'Paris Events',
                    'Paris By Night',
                    'Theater',
                    'Show',
                    'Street - Art'
                ];
            }
        ]) //
        ;
});
