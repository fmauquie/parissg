define(['ngMocks', 'ezweb/portal/services/portalDataService'], function () {

    describe('** Portal data service testing **', function () {

        var service;
        var $q;

        beforeEach(module('ezweb.portal.services.data'));

        beforeEach(inject(['ezweb.portal.services.data', '$q', function (_service_, _$q_) {
            service = _service_;
            $q = _$q_;
        }]));

        it('Should define the service.', function () {
            expect(service).toBeDefined();
        });

        // -----------------
        // -- Format data --
        // -----------------

        it('Should throw an exception if data is undefined.', function () {
            expect(angular.bind(this, service.formatData)).toThrow();
        });

        it('Should return the data unchanged if the expectedLength is undefined.', function () {
            var data = service.formatData(getData());
            expect(data.length).toEqual(2);
        });

        it('Should not accept negative values.', function () {
            expect(angular.bind(this, service.formatData, getData(), -1)).toThrow();
        });

        it('Should truncate the data if the expected length is lesser ' +
            'than the current data length.', function () {
            var data = service.formatData(getData(), 1);
            expect(data.length).toEqual(1);
        });

        it('Should push specific objects if the expected length is greater ' +
            'than the current data length.', function () {
            var data = service.formatData(getData(), 3);
            expect(data.length).toEqual(3);
            // In this case, the service adds an empty model
            // with a specific 'empty' property.
            expect(data[2].empty).toBeTruthy();
        });

        function createPromise() {
            var deferred = $q.defer();
            return deferred.promise;
        }

        function getData() {
            return [createPromise(), createPromise()];
        }

        // -------------------
        // -- extendRowSize --
        // -------------------

        it('Should throw an exception for undefined arguments.', function(){
            expect(angular.bind(this, service.extendRowSize)).toThrow();
        });

        it('Should return the default rowSize if the scope rowSize is undefined.', function(){
            var defaultRowSize = getDefaultRowSize();
            var rowSize = service.extendRowSize(defaultRowSize, undefined);
            expect(rowSize).toEqual(defaultRowSize);
        });

        it('Should extend the properties if the rowSize is a valid object.', function(){
            var defaultRowSize = getDefaultRowSize();
            var rowSize = service.extendRowSize(defaultRowSize, {sm: 4});
            expect(rowSize.xs).toEqual(0); // default is 0
            expect(rowSize.sm).toEqual(4); // default is 3
            expect(rowSize.md).toEqual(4); // default is 0
            expect(rowSize.lg).toEqual(4); // default is 0
        });

        function getDefaultRowSize(){
            return {xs:0, md:0, sm: 3, lg:0};
        }

    });

});
