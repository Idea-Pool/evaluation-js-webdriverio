describe('TC-6 - Checking button form elements', () => {
    beforeEach(() => {
        browser.url('https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state');
    });

    it('Have primary button', () => {
        expect($('button=Primary button').isExisting()).toBeTrue();
    });

    it('Have disabled button', () => {
        expect($('button=Primary button').isEnabled()).toBeFalse();
    });

    it('Have not disabled button', () => {
        $('.btn-primary.active').scrollIntoView();
        expect($('.btn-primary.active').isClickable()).toBeTrue();
    });
});
