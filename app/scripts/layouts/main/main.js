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
        ;
});
