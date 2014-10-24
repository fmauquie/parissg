define([], function () {

    describe('**global tests**', function () {

        it('check jasmine version is 2.0.0', function () {

            //ARRANGE
            var expectedVersion = '2.0.0';

            //ACT
            var version = jasmine.version;
            // console.log('jasmine-version :' + jasmine.version);

            //ASSERT
            expect(version === expectedVersion).toBe(true);
        });
    });
});