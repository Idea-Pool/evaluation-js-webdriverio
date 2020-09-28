const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxesAndRadios extends Page {
    /**
     * define selectors using getter methods
     */
    get defaultCheck1() {
        return $('#defaultCheck1');
    }
    get defaultCheck2() {
        return $('#defaultCheck2');
    }
    get exampleRadios1() {
        return $('#exampleRadios1');
    }
    get exampleRadios2() {
        return $('#exampleRadios2');
    }
    get exampleRadios3() {
        return $('#exampleRadios3');
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('docs/4.4/components/forms/#checkboxes-and-radios');
    }
}

module.exports = new CheckboxesAndRadios();
