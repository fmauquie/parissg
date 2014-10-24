define([
    'angular',
    'text!../views/eventStack.html',
    'text!../views/eventItem.html'
], function (angular, stackTemplate, itemTemplate) {
    angular.module('app.features.event.directives', [ //
    ])
        .directive('eventStack', [ //
            function ($location) {
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
                        $scope.$watch('data', function(data){
                            if (angular.isDefined(data) && data.length > 0){
                                displayEvent(0);
                            }
                        });

                        $scope.dislike = function() {
                            displayNextEvent(++$scope.index);
                        };

                        function displayNextEvent(index){
                            displayEvent(index);
                        }

                        function displayEvent(index){
                            angular.forEach($scope.data, function(event){
                                event.display = false;
                            });
                            if (index < $scope.data.length){
                                $scope.data[index].display = true;
                            }
                        }


                    }
                }
            }
        ])
        .directive('eventItem', [ //
            '$location', //
            function ($location) {
                return {
                    restrict: 'A',
                    template: itemTemplate,
                    scope: {
                        model: '='
                    },
                    link: function ($scope) {
                        var test = $scope;


                        $scope.more = function(){
                            $location.path('/events/event/' + $scope.model.id);
                        };


                    }
                }
            }
        ])
});
