const docPage = require('../pageobjects/getbootstrapPage/doc.page');
const expect = require('chai').expect;
const fsLibrary = require('fs');

describe("TC-11 - Checking Search bar on Doc page", () => {
    before(() => {
        docPage.open();
    });

    it('Search dropdown should include the given word', () => {
        docPage.inputField.setValue('config');
        //browser.pause(2000);
        $('.ds-dataset-1 .algolia-docsearch-suggestion--content').waitForExist({ timeout: 1000 });

        // create a HTML file to check the hidden elements
        let dsdataset1 = $('.ds-dataset-1').getHTML();

        fsLibrary.writeFile('data/ds-dataset-1.html', dsdataset1, (error) => {
            if (error) throw err;
        })

        // $$() selector returns an array of elements
        if (!($('.ds-dataset-1 .algolia-docsearch-suggestion--content').isExisting())) {
            throw new Error("The selected element does not exits in the DOM!");
        }

        const searchSuggestions = $$('.ds-dataset-1 .algolia-docsearch-suggestion--content');
        console.log("suggestions:" + searchSuggestions);

        searchSuggestions.forEach((element) => {
            console.log(`element: ${element.getText()}`);
            expect(element.getText().toLowerCase()).to.include('config');
        });
    });
});