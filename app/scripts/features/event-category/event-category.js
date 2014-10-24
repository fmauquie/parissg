/**
 * Module file for the feature.
 *
 * Defines links to less and template files, dependencies, controller, feature-specific directives and services.
 */
define([ //
    'angular', // Always include angular !
    'text!./event-category.html', // Include your template file
    'ez-i18n!./locales', // Include your locales folder
    'less!./event-category' // Include feature-specific stylesheets. You can also use css!./<name>, but this is not recommended
    // You can require other stuff in the feature as you need it !
], function (angular, eventCategoryTemplate, i18n) {
    'use strict';

    // Change your feature name here
    var featureName = 'eventCategory';

    return angular.module('app.features.event.category', [ // List the dependencies specific to this feature
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
                    .when('/events/category/:category', {
                        template: eventCategoryTemplate
                    })
            }
        ])
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
        .controller('app.features.event.category.controller', [ //
            '$scope', //
            '$routeParams', //
            'activities', //
            '$filter', //
            function ($scope, $routeParams, activitiesService, $filter) {

                var queryParmas = {
                    when: '12345677',
                    category: $routeParams.category,
                    geo: 'geo',
                    offset: 'offset',
                    limit: 'limit'
                };

                var categories = [
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
                ];

                $scope.category = $filter('filter')(categories, {id: $routeParams.category})[0];

                activitiesService.get(queryParmas).then(function (response) {
                    $scope.events = response;
                });


            }
        ]) //
        ;
});
