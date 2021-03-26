const expect = require('chai').expect;
const dropdownPage = require('../pageobjects/getbootstrapPage/dropdowns.page');

describe('TC-9 - Interaction with dropdown elements', () => {
    beforeEach(() => {
        dropdownPage.open();
    });

    it('Dropdown button is clickable', () => {
        expect(dropdownPage.dropdownButton.isClickable()).to.equal(true);
    });

    it('Dropdown Item#1-2-3 should not be displayed by default', () => {
        expect(dropdownPage.dropdownItem1.isDisplayed()).to.equal(false);
        expect(dropdownPage.dropdownItem2.isDisplayed()).to.equal(false);
        expect(dropdownPage.dropdownItem3.isDisplayed()).to.equal(false);
    });

    it('Dropdown Item#1-2-3 should be displayed if Dropdown button is clicked', () => {
        dropdownPage.dropdownButton.click();
        expect(dropdownPage.dropdownItem1.isDisplayed()).to.equal(true);
        expect(dropdownPage.dropdownItem2.isDisplayed()).to.equal(true);
        expect(dropdownPage.dropdownItem3.isDisplayed()).to.equal(true);
    });


});