const mainPage = require('../pageobjects/angularPage/main.page');
const expect = require('chai').expect;

describe("TC-10 - Checking Angular Logo Interractions", () => {
    before(() => {
        mainPage.open();
    });

    it('Twitter icon should be displayed', () => {
        expect(mainPage.socialElement("Twitter").isDisplayedInViewport()).to.equal(true);
    });

    it('Should open the corresponding page on a new tab if clicked with scrollwheel', () => {
        mainPage.socialElement('Twitter').click({ button: "middle" });
        browser.switchWindow("https://twitter.com/angular");
        expect(browser.getUrl()).to.equal("https://twitter.com/angular")
    });
});