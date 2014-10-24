describe('** Protractor example test **', function () {

    it('Scenario 1: the user checks that the application is up.', function () {

        /* -- Get to the main page and wait until angular has been set up -- */

        browser.get('#/');
        browser.waitForAngular();

        /* -- Expect a title -- */

        var titleText = element(by.css('div h1'));
        expect(titleText.getText()).toEqual('It Works !');

    });

});
