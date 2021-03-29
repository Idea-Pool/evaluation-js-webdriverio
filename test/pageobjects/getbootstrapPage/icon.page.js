const Page = require('./page');

class Icon extends Page {
    get inputField() {
        return $('input#search');
    }

    get searchItems() {
        return $$('.my-5 ul > li');
    }


    open() {
        return super.open('', 'icons.');
    }
}

module.exports = new Icon();