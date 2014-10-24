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
                    $scope.categories = [
                        {
                            id: 'concert',
                            name: 'Concerts'
                        },
                        {
                            id: 'film',
                            name: 'Films'
                        },
                        {
                            id: 'concert',
                            name: 'Monuments'

                        },
                        {
                            id: 'concert',
                            name: 'Museums'
                        },
                        {
                            id: 'concert',
                            name: 'Sports'
                        }
                    ]
                }, 100);

                $scope.removeCategories = function () {
                    $scope.categories = [];
                };
            }
        ]) //
        ;
});
