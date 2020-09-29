const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');

describe('TC-4 - Interaction with checkbox form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Have enabled checkbox', () => {
        expect(componentsPage.defaultCheck1.isEnabled()).toBeTrue();
    });

    it('Have disabled checkbox', () => {
        expect(componentsPage.defaultCheck2.isEnabled()).toBeFalse();
    });

    it('Have unchecked checkbox', () => {
        expect(componentsPage.defaultCheck1.getProperty('checked')).toBeFalse();
    });

    it('Can check checkbox', () => {
        componentsPage.defaultCheck1.click();
        expect(componentsPage.defaultCheck1.getProperty('checked')).toBeTrue();
    });
});
