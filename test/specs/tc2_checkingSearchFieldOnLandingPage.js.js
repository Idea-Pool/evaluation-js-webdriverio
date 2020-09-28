const mainPage = require('../pageobjects/angularPage/main.page');

describe('TC-2 - Checking search field on landing page', () => {
    beforeAll(() => {
        browser.url('https://angular.io');
    });

    it('Search input visible in the nav bar', () => {
        expect(mainPage.search.isDisplayed()).toBeTrue();
    });

    it('Empty search input', () => {
        expect(mainPage.search.getText()).toBe('');
    });

    it('Proper placehodleer in search input', () => {
        expect(mainPage.search.getAttribute('placeholder')).toBe('Search');
    });

    describe('Search suggestions', () => {
        it('Proper suggestion result', () => {
            mainPage.search.setValue('Directive');
            $('.search-result-item').waitForExist();
            expect($$('.search-result-item')[0].getText()).toContain('Directive');
        });
    });
    describe('Search results', () => {
        beforeAll(() => {
            mainPage.search.setValue('Directive');
            $('.search-result-item').waitForExist();
            $('span=Directive').click();
        });
        it('should have proper URL to be redirected to', () => {
            expect(browser.getUrl()).toBe('https://angular.io/api/core/Directive');
        });

        it('should have proper page title', () => {
            $('h1').waitForDisplayed();
            expect($('h1#directive').getText()).toContain('Directive');
        });
    });
});
