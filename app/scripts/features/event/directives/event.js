define([
    'angular',
    'text!../views/eventStack.html',
    'text!../views/eventItem.html'
], function (angular, stackTemplate, itemTemplate) {
    angular.module('app.features.event.directives', [ //
    ])
        .directive('eventStack', [ //
            '$timeout', //
            '$location', //
            function ($timeout, $location) {
                return {
                    restrict: 'A',
                    template: stackTemplate,
                    scope: {
                        data: '='
                    },
                    link: function ($scope) {

                        $scope.index = 0;

                        // --
                        // Display the first event by default when data is loaded
                        $scope.$watch('data', function (data) {
                            if (angular.isDefined(data) && data.length > 0) {
                                displayEvent(0);
                            }
                        });

                        $scope.dislike = function () {
                            $scope.data[$scope.index].dislike = true;
                            $scope.data[$scope.index].like = false;
                            $timeout(function () {
                                displayNextEvent(++$scope.index);
                            }, 300);
                        };

                        function displayNextEvent(index) {
                            displayEvent(index);
                        }

                        function displayEvent(index) {
                            angular.forEach($scope.data, function (event) {
                                event.display = false;
                            });
                            if (index < $scope.data.length) {
                                $scope.data[index].display = true;
                            }
                        }

                        $scope.more = function () {
                            $scope.data[$scope.index].dislike = false;
                            $scope.data[$scope.index].like = true;
                            $timeout(function () {
                                $location.path('/events/event/' + $scope.data[$scope.index].id);
                            }, 300);
                        };
                    }
                }
            }
        ])
        .directive('eventItem', [ //
            '$timeout', //
            '$location', //
            function ($timeout, $location) {
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
            }
        ])
});
