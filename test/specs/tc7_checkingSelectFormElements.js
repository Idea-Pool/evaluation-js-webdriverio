describe('TC-7 - Checking select form elements', () => {
    beforeEach(() => {
        browser.url('https://getbootstrap.com/docs/4.4/components/forms/#form-controls');
    });

    it('Have simple select', () => {
        expect($('#exampleFormControlSelect1').isDisplayed()).toBeTrue();
    });

    it('Have multi-select', () => {
        expect($('#exampleFormControlSelect2').getProperty('multiple')).toBeTrue();
    });

    it('Have proper selected value', () => {
        expect($('#exampleFormControlSelect1').getProperty('value')).toEqual('1');
    });

    it('Not have given option', () => {
        expect($('#exampleFormControlSelect1').$('option=Hello').isExisting()).toBeFalse();
    });

    it('Have given option', () => {
        expect($('#exampleFormControlSelect1').getProperty('2')).toBeTruthy;
    });

    it('Select value', () => {
        const select = $('#exampleFormControlSelect1').selectByVisibleText('2');
        expect($('#exampleFormControlSelect1').getProperty('value')).toEqual('2');
    });

    it('Have all options', () => {
        expect($('#exampleFormControlSelect1').getProperty('length')).toEqual(5);
    });
});
