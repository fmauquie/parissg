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
                }
            }
        })
});
