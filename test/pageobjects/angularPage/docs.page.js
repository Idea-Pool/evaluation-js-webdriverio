class DocsPage {
    get title() {
        return $('#introduction-to-the-angular-docs');
    }

    getUrl() {
        return browser.getUrl();
    }
}

module.exports = new DocsPage();
