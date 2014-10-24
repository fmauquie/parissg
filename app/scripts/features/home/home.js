/**
 * Module file for the feature.
 *
 * Defines links to less and template files, dependencies, controller, feature-specific directives and services.
 */
define([ //
    'angular', // Always include angular !
    'text!./home.html', // Include your template file
    'ez-i18n!./locales', // Include your locales folder
    'less!./home', // Include feature-specific stylesheets. You can also use css!./<name>, but this is not recommended
    'less!./main' // This is only for the home ! It includes the global stylesheet.
    // You can require other stuff in the feature as you need it !
], function (angular, homeTemplate, i18n) {
    'use strict';

    // Change your feature name here
    var featureName = 'home';

    return angular.module('app.features.home', [ // List the dependencies specific to this feature
            'app.services.example', // Remove me, this is for the example
            'app.services.activities'
        ]) //
        // Configure the routes to the feature here. Each feature takes care of its own routes.
        // By convention, the route should start with your feature name ( /home/...)
        // Here we break this convention because it's the home page !
        // Note that you should take care of unsupported routes with otherwise method,
        // "default" feature such as home is a great place to do that.
        .config([ //
            '$routeProvider', //
            function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        template: homeTemplate
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ]) //
        // Register the translation namespaces you are going to use, and all the languages that are managed by the
        // dev team. You must always register locale 'en' since this is the default locale.
        .config([ //
            'ezweb.i18n.configurationProvider', //
            function (i18nProvider) {
                // Register here the language resources you have defined, one line per locale available in dev
                i18nProvider.register(featureName, 'en', i18n);
            }
        ]) //
        // We define our controller
        .controller('app.features.home.controller', [ //
            '$scope', //
            'app.services.example', //
            'activities', //
            function ($scope, exampleService, activitiesService) {

                exampleService.get().then(function(result){
                    $scope.hello = result.data.example;
                });

//                 var queryParmas = {
//                     date : '12345677',
//                     category : '14',
//                     geo: 'geo',
//                     offset : 'offset',
//                     limit : 'limit'
//                 }
//
//                activitiesService.get(queryParmas).then(function(response){
//                    console.dir(response);
//                });


                // restangular HOWO TO here > http://stackoverflow.com/a/22496253
            }
        ]) //
        ;
});
