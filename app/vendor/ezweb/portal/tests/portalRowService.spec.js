define(['ngMocks', 'ezweb/portal/services/portalRowService'], function () {

    describe('** Portal row service testing **', function () {

        var service;

        beforeEach(module('ezweb.portal.services.row'));

        beforeEach(inject(['ezweb.portal.services.row', function (_service_) {
            service = _service_;
        }]));

        it('Should define the service.', function () {
            expect(service).toBeDefined();
        });

        it('Should create several rows if there is too much elements.', function () {
            var cubes = [new PortalCube(), new PortalCube(), new PortalCube()];
            var rows = service.getRows(cubes, 2);
            expect(rows.length).toEqual(2);
            expect(rows[0].cubes.length).toEqual(2);
            expect(rows[1].cubes.length).toEqual(1);
        });

        it('Should set a custom index to the elements.', function(){
            var cubes = [new PortalCube(), new PortalCube(), new PortalCube()];
            var rows = service.getRows(cubes, 2);
            expect(rows[0].startIndex).toEqual(0);
            expect(rows[1].startIndex).toEqual(2);
        });

        it('There is at least one element in the row.', function(){
            var cubes = [new PortalCube(), new PortalCube(), new PortalCube()];
            var rows = service.getRows(cubes, 0);
            expect(rows.length).toEqual(3);
            expect(rows[0].startIndex).toEqual(0);
            expect(rows[1].startIndex).toEqual(1);
        });

        function PortalCube() {

        }

    });

});
