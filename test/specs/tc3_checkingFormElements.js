const componentsPage = require('../pageobjects/getbootstrapPage/forms.page');

describe('TC-3 - Checking form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Browser title is "Forms · Bootstrap"', () => {
        expect(browser.getTitle()).toBe('Forms · Bootstrap');
    });

    it('Readonly input is not displayed in viewport', () => {
        expect(componentsPage.readonlyInput.isDisplayedInViewport()).toBeFalse();
    });

    it('Readonly input in viewport after scroll', () => {
        componentsPage.readonlyInput.scrollIntoView();
        expect(componentsPage.readonlyInput.isDisplayedInViewport()).toBeTrue();
    });

    it('Readonly input is readonly', () => {
        expect(componentsPage.readonlyInput.getProperty('readOnly')).toBeTrue();
    });
});
