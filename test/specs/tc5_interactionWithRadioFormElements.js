const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');

describe('TC-5 - Interaction with radio form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Have enabled radio', () => {
        expect(componentsPage.exampleRadios1.isEnabled()).toBeTrue();
    });

    it('Have disabled radio', () => {
        expect(componentsPage.exampleRadios3.isEnabled()).toBeFalse();
    });

    it('Have selected radio', () => {
        expect(componentsPage.exampleRadios1.getProperty('checked')).toBeTrue();
    });

    it('Have not selected radio', () => {
        expect(componentsPage.exampleRadios2.getProperty('checked')).toBeFalse();
    });

    it('Is able to select radio', () => {
        componentsPage.exampleRadios2.click();
        expect(componentsPage.exampleRadios2.getProperty('checked')).toBeTrue();
        expect(componentsPage.exampleRadios1.getProperty('checked')).toBeFalse();
    });
});
