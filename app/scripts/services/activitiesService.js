define([ //
    'angular' //
], function (angular) {
    'use strict';
    return angular.module('app.services.activities', [])
        .factory('activities', [ //
            'Restangular', //
            function (restangular) {

                return {
                    get: function(query){
                        //activities/date/:when/category/:category/geo/:geo/offset/:offset/limit/:limit
                        return restangular.all('api/activities')
                            .one('date', query.when | new Date())
                            .one('category', query.category | 0)
                            .one('geo', query.geo | "")
                            .one('offset', query.offset | 0)
                            .one('limit', query.limit | 10)
                            .getList()
                    }
                };
            }
        ]);
});
