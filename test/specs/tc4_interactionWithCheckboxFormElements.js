const componentsPage = require('../pageobjects/getbootstrapPage/checkboxesAndRadios.page');
const expect = require('chai').expect;

describe('TC-4 - Interaction with checkbox form elements', () => {
    beforeEach(() => {
        componentsPage.open();
    });

    it('Have enabled checkbox', () => {
        expect(componentsPage.defaultCheck1.isEnabled()).to.equal(true);
    });

    it('Have disabled checkbox', () => {
        expect(componentsPage.defaultCheck2.isEnabled()).to.equal(false);
    });

    it('Have unchecked checkbox', () => {
        expect(componentsPage.defaultCheck1.getProperty('checked')).to.equal(false);
    });

    it('Can check checkbox', () => {
        $('.bd-content-title [href="#default-stacked"]').scrollIntoView();
        componentsPage.defaultCheck1.click();
        expect(componentsPage.defaultCheck1.getProperty('checked')).to.equal(true);
    });
});
