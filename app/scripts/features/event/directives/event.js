define([
    'angular',
    'text!../views/eventStack.html',
    'text!../views/eventItem.html'
], function (angular, stackTemplate, itemTemplate) {
    angular.module('app.features.event.directives', [])
        .directive('eventStack', function () {
            return {
                restrict: 'A',
                template: stackTemplate,

                scope: {
                    data: '='
                },
                link: function ($scope) {
                    var test = $scope;
                }
            }
        })
        .directive('eventItem', function () {
            return {
                restrict: 'A',
                template: itemTemplate,
                scope: {
                    model: '='
                },
                link: function ($scope) {
                    var test = $scope;
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
            }
        })
});
