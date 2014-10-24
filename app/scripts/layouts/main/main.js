// Declaring feature components

define([ //
    'angular', //
    'text!./main.html', //
    'less!./main' //
], function (angular, mainTemplate) {
    'use strict';
    var layoutName = 'main';

    return angular.module('app.layouts.main', [
        ]).config([ //
            'ezweb.layout.serviceProvider', //
            function (layoutProvider) {
                layoutProvider.register(layoutName, mainTemplate);
                layoutProvider.setDefault(layoutName);
            }
        ]) //
        .controller('app.layouts.main.controller', [
            '$scope',
            function ($scope) {
                $scope.bottomBar = {
                    size: {
                        height: 100
                    }
                };
            }
        ]) //
        .controller('app.layouts.main.meteo', [
            '$scope',
            'meteo',
            function ($scope, meteo) {
                meteo.get.then(function (previsions) {
                    $scope.meteo = previsions[0];
                });
            }
        ]) //
        ;
});
