/**
 * Module file for the feature.
 *
 * Defines links to less and template files, dependencies, controller, feature-specific directives and services.
 */
define([ //
    'angular', // Always include angular !
    'text!./event-details.html', // Include your template file
    'ez-i18n!./locales', // Include your locales folder
    'less!./event-details' // Include feature-specific stylesheets. You can also use css!./<name>, but this is not recommended
    // You can require other stuff in the feature as you need it !
], function (angular, eventDetailsTemplate, i18n) {
    'use strict';

    // Change your feature name here
    var featureName = 'eventDetails';

    return angular.module('app.features.event.details', [ // List the dependencies specific to this feature
    ]) //
        // Configure the routes to the feature here. Each feature takes care of its own routes.
        // By convention, the route should start with your feature name ( /home/...)
        // Here we break this convention because it's the home page !
        // Note that you should take care of unsupported routes with otherwise method,
        // "default" feature such as home is a great place to do that.
        .config([ //
            '$routeProvider', //
            function($routeProvider){
                $routeProvider
                    .when('/events/event/:id', {
                        template: eventDetailsTemplate
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
        .controller('app.features.event.details.controller', [ //
            '$scope', //
            '$routeParams', //
            '$filter', //
            'activities', //
            '$sce', //
            function ($scope, $routeParams, $filter, activitiesService, $sce) {

//                eventService.get({id: $routeParams.id}, function(event){
//                    $scope.event = event;
//                });


                var queryParmas = {
                    when: '12345677',
                    category: 'all',
                    geo: 'geo',
                    offset: 'offset',
                    limit: 'limit'
                };

                activitiesService.get(queryParmas).then(function (response) {
                    $scope.event = $filter('filter')(response, {id: $routeParams.id})[0];
                });

                $scope.subscribe = function() {

                };

                $scope.getDescription = function(){
                    return $scope.event ? $sce.trustAsHtml($scope.event.small_description) : '';
                };

            }
        ]) //
        ;
});
