const Page = require('./page');

class Dropdowns extends Page {
    get dropdownButton() {
        return $('#dropdownMenuButton');
    }
    get dropdownItem1() {
        return $('[aria-labelledby="dropdownMenuButton"] > a:nth-child(1)');
    }
    get dropdownItem2() {
        return $('[aria-labelledby="dropdownMenuButton"] > a:nth-child(2)');
    }
    get dropdownItem3() {
        return $('[aria-labelledby="dropdownMenuButton"] > a:nth-child(3)');
    }

    open() {
        return super.open('docs/4.4/components/dropdowns/');
    }
}

module.exports = new Dropdowns();