const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');
const expect = require('chai').expect;

describe('TC-5 - Interaction with radio form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Have enabled radio', () => {
        expect(componentsPage.exampleRadios1.isEnabled()).to.equal(true);
    });

    it('Have disabled radio', () => {
        expect(componentsPage.exampleRadios3.isEnabled()).to.equal(false);
    });

    it('Have selected radio', () => {
        expect(componentsPage.exampleRadios1.getProperty('checked')).to.equal(true);
    });

    it('Have not selected radio', () => {
        expect(componentsPage.exampleRadios2.getProperty('checked')).to.equal(false);
    });

    it('Is able to select radio', () => {
        browser.execute(() => {
            $("header").hide();
        });
        componentsPage.exampleRadios2.click();
        expect(componentsPage.exampleRadios2.getProperty('checked')).to.equal(true);
        expect(componentsPage.exampleRadios1.getProperty('checked')).to.equal(false);
    });
});
