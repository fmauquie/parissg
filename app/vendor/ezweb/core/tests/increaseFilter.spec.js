define(['ngMocks', 'ezweb/core/filters/increaseFilter'], function () {

    describe('**filter tests**', function() {

        beforeEach(module('ezweb.core.filters'));

        it('words filter : words is NaN', inject([ //
            'wordsFilter', //
            function (filter) {

                //ARRANGE
                var input ='truncate text strings';
                var words = NaN;
                var expected = input;

               //ACT
                var truncatedText = filter(input, words);

               //ASSERT
               expect(expected === truncatedText).toBe(true);
            }
        ]));

        it('words filter : words is negatif', inject([ //
            'wordsFilter', //
            function (filter) {

                //ARRANGE
                var input ='truncate text strings';
                var words = -3;
                var expected = '';

                //ACT
                var truncatedText = filter(input, words);

                //ASSERT
                expect(expected === truncatedText).toBe(true);
            }
        ]));

        it('words filter : words is positif', inject([ //
            'wordsFilter', //
            function (filter) {

                //ARRANGE
                var input ='truncate text strings';
                var words = 2;
                var expected = 'truncate text...';

                //ACT
                var truncatedText = filter(input, words);

                //ASSERT
                expect(expected === truncatedText).toBe(true);
            }

        ]));
    });
});