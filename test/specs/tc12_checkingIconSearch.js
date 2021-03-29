const iconPage = require('../pageobjects/getbootstrapPage/icon.page');
const expect = require('chai').expect;

describe("TC-12 - Checking Search bar on Icon page", () => {
    before(() => {
        iconPage.open();
        browser.pause(2000);
    });

    it('Should return the proper items', () => {
        iconPage.inputField.setValue('align');
        browser.pause(2000);
        if (iconPage.searchItems.length === 0) {
            throw new Error('No items found!');
        }

        const searchItems = iconPage.searchItems;

        searchItems.forEach((element, index) => {
            expect(element.getAttribute('data-tags'), `Error happend at "li" index: ${index}`).to.include('align');
        });

    });
});