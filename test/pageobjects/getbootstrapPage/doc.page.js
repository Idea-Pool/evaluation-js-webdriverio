const Page = require('./page');

class Doc extends Page {

    get inputField() {
        return $('#search-input');
    }

    open() {
        return super.open('docs/5.0/getting-started/introduction/');
    }
}

module.exports = new Doc();