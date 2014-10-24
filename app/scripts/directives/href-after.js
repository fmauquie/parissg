'use strict';

define([
    'angular'
], function (angular) {
    return angular.module('app.directives.hrefAfter', []) //
        .directive('ezDelay', [
            '$timeout',
            '$location',
            function ($timeout) {
                return function ($scope, $element, $attrs) {
                    var clicked = false;
                    $element.on('click', function (e) {
                        if (clicked === false) {
                            $timeout(function () {
                                clicked = true;
                                $element.click();
                            }, parseInt($attrs.ezDelay));

                            e.preventDefault();
                            e.stopPropagation();
                            return false;
                        }
                    });
                }
            }
        ]) //
        ;
});
