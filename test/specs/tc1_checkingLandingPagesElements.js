const mainPage = require('../pageobjects/angularPage/main.page');
const docsPage = require('../pageobjects/angularPage/docs.page');

describe('TC-1 - Checking Landing Pages Elements', () => {
    beforeAll(() => {
        browser.url('https://angular.io/');
    });

    it('Angular Logo in the navbar visible', () => {
        expect($('.nav-link.home img').isDisplayedInViewport()).toBeTrue();
    });

    it('Angular Logo in the hero section visible', () => {
        expect($('.hero-logo img').isDisplayedInViewport()).toBeTrue();
    });

    it('Proper headline in hero section', () => {
        expect($('.hero-headline').getText()).toContain('One framework.\nMobile & desktop.');
    });

    it('Get started button is clickable', () => {
        expect($('.homepage-container .button').isClickable()).toBeTrue();
    });
    describe('Get Started Page', () => {
        beforeAll('Click Get Started button', () => {
            mainPage.clickGetStartedButton();
            docsPage.title.waitForDisplayed();
        });
        it('URL is https://angular.io/docs', () => {
            expect(docsPage.getUrl()).toBe('https://angular.io/docs');
        });
        it('Title is "Introduction to the Angular Docs"', () => {
            expect(docsPage.title.getText()).toBe('Introduction to the Angular Docs');
        });
    });
});
