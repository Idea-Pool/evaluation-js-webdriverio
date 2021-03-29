const Page = require('./page');

class Doc extends Page {

    get inputField() {
        return $('#search-input');
    }

    get searchItem() {
        return $('.ds-dataset-1 .algolia-docsearch-suggestion--content');
    }

    get searchItems() {
        return $$('.ds-dataset-1 .algolia-docsearch-suggestion--content');
    }

    open() {
        return super.open('docs/5.0/getting-started/introduction/');
    }
}

module.exports = new Doc();