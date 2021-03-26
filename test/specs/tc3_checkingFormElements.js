const componentsPage = require('../pageobjects/getbootstrapPage/forms.page');
const expect = require('chai').expect;

describe('TC-3 - Checking form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Browser title is "Forms · Bootstrap"', () => {
        expect(browser.getTitle()).to.equal('Forms · Bootstrap');
    });

    it('Readonly input is not displayed in viewport', () => {
        expect(componentsPage.readonlyInput.isDisplayedInViewport()).to.equal(false);
    });

    it('Readonly input in viewport after scroll', () => {
        componentsPage.readonlyInput.scrollIntoView();
        expect(componentsPage.readonlyInput.isDisplayedInViewport()).to.equal(true);
    });

    it('Readonly input is readonly', () => {
        expect(componentsPage.readonlyInput.getProperty('readOnly')).to.equal(true);
    });
});
