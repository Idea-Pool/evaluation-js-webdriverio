const expect = require('chai').expect;

describe('TC-6 - Checking button form elements', () => {
    beforeEach(() => {
        browser.url('https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state');
    });

    it('Have primary button', () => {
        expect($('button=Primary button').isExisting()).to.equal(true);
    });

    it('Have disabled button', () => {
        expect($('button=Primary button').isEnabled()).to.equal(false);
    });

    it('Have not disabled button', () => {
        $('.btn-primary.active').scrollIntoView();
        expect($('.btn-primary.active').isClickable()).to.equal(true);
    });
});
