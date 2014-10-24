/**
 * Module file for the feature.
 *
 * Defines links to less and template files, dependencies, controller, feature-specific directives and services.
 */
define([ //
    'angular', // Always include angular !
    'text!./event.html', // Include your template file
    'ez-i18n!./locales', // Include your locales folder
    './directives/event', //
    'less!./event' // Include feature-specific stylesheets. You can also use css!./<name>, but this is not recommended
    // You can require other stuff in the feature as you need it !
], function (angular, eventTemplate, i18n) {
    'use strict';

    // Change your feature name here
    var featureName = 'events';

    return angular.module('app.features.event', [ // List the dependencies specific to this feature
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
                    .when('/events', {
                        template: eventTemplate
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
        .controller('app.features.event.controller', [ //
            '$scope', //
            '$routeParams', //
            function ($scope, $routeParams) {

                function Event(name){
                    this.name = name;
                }

                //STUB
                $scope.events = [new Event('test'), new Event('ploum')];

                /*
                 get_activities :
                 {
                 "idactivites": 69159,
                 "nom": "TENNIS",
                 "description": "",
                 "small_description": "Le tennis est un sport qui consiste, pour 2 ou 4 joueurs munis de raquettes, à envoyer une balle par-dessus un filet dans les limites du terrain appelé “court”.",
                 "lieu": "Tennis Niox",
                 "adresse": "16 Quai Saint Exupéry ",
                 "zipcode": 75016,
                 "city": "PARIS",
                 "lat": 48.835205,
                 "lon": "2.262558",
                 "accessType": null,
                 "hasFee": "1",
                 "created": "2013-09-04T13:43:42.000Z",
                 "discipline": "Tennis",
                 "rubriques": [{
                 "id": 3,
                 "rubrique": "Activités"
                 }, {
                 "id": 20,
                 "rubrique": "Cours / Atelier"
                 }],
                 "files": [{
                 "file": "activites//upload/2010/06/14/400x400/1276540891_32116180771a58388bfcgaleriedeleonrw.jpg",
                 "credit": ""
                 }],
                 "occurrences": [{
                 "jour": "2014-06-24T00:00:00.000Z",
                 "hour_start": "19:00:00",
                 "hour_end": "20:00:00"
                 }]
                 }
                 */
            }
        ]) //
        ;
});
