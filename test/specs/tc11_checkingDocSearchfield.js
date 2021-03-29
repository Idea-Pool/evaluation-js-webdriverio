const docPage = require('../pageobjects/getbootstrapPage/doc.page');
const expect = require('chai').expect;
const utils = require('../../utils/utils');


describe("TC-11 - Checking Search bar on Doc page", () => {
    before(() => {
        docPage.open();
    });

    it('Search dropdown should include the given word', () => {
        docPage.inputField.setValue('config');
        docPage.searchItem.waitForExist({ timeout: 1000 });

        let dsdataset1 = $('.ds-dataset-1').getHTML();
        utils.writeToFile(dsdataset1, 'data/ds-dataset-1.html');

        if (!(docPage.searchItem.isExisting())) {
            throw new Error("The selected element does not exits in the DOM!");
        }

        docPage.searchItems.forEach((element) => {
            expect(element.getText().toLowerCase()).to.include('config');
        });
    });
});