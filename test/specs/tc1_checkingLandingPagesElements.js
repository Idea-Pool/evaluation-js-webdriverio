const mainPage = require('../pageobjects/angularPage/main.page');
const docsPage = require('../pageobjects/angularPage/docs.page');
const expect = require('chai').expect;


describe('TC-1 - Checking Landing Pages Elements', () => {
    before(() => {
        mainPage.open();
    });

    it('Angular Logo in the navbar visible', () => {
        expect(mainPage.angularLogoNavBar.isDisplayedInViewport()).to.equal(true);
    });

    it('Angular Logo in the hero section visible', () => {
        expect(mainPage.angularLogoHeroSection.isDisplayedInViewport()).to.equal(true);
    });

    it('Proper headline in hero section', () => {
        expect(mainPage.heroHeadline.getText()).to.include('The modern web\ndeveloper\'s platform');
    });

    it('Get started button is clickable', () => {
        expect(mainPage.getStartedButton.isClickable()).to.equal(true);
    });

    describe('Get Started Page', () => {
        before('Click Get Started button', () => {
            mainPage.clickGetStartedButton();
            docsPage.title.waitForDisplayed();
        });
        it('URL is https://angular.io/docs', () => {
            expect(docsPage.getUrl()).to.equal('https://angular.io/docs');
        });
        it('Title is "Introduction to the Angular Docs"', () => {
            expect(docsPage.title.getText()).to.equal('Introduction to the Angular Docs');
        });
    });
});
