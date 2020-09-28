const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get readonlyInput() {
        return $('[placeholder="Readonly input here..."]');
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('docs/4.4/components/forms/');
    }
}

module.exports = new FormsPage();
