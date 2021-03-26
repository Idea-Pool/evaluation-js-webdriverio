const mainPage = require('../pageobjects/angularPage/main.page');
const expect = require('chai').expect;

describe('TC-2 - Checking search field on landing page', () => {
    before(() => {
        browser.url('https://angular.io');
    });

    it('Search input visible in the nav bar', () => {
        expect(mainPage.search.isDisplayed()).to.equal(true);
    });

    it('Empty search input', () => {
        expect(mainPage.search.getText()).to.equal('');
    });

    it('Proper placehodleer in search input', () => {
        expect(mainPage.search.getAttribute('placeholder')).to.equal('Search');
    });

    describe('Search suggestions', () => {
        it('Proper suggestion result', () => {
            mainPage.search.setValue('Directive');
            $('.search-result-item').waitForExist();
            expect($$('.search-result-item')[0].getText()).to.include('Directive');
        });
    });
    describe('Search results', () => {
        beforeEach(() => {
            mainPage.search.setValue('Directive');
            $('.search-result-item').waitForExist();
            $('span=Directive').click();
        });
        it('should have proper URL to be redirected to', () => {
            expect(browser.getUrl()).to.equal('https://angular.io/api/core/Directive');
        });

        it('should have proper page title', () => {
            $('h1').waitForDisplayed();
            expect($('h1#directive').getText()).to.include('Directive');
        });
    });
});
