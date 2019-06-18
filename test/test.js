const assert = require('chai').assert;

describe('test', function () {
    
    it('test', function () {
        return this.browser
            .url('/')
            .$('input[name=q]')
            .setValue('hermione')
            .waitForEnabled('input[name=btnK]', 2000)
            .click('input[name=btnK]')
            .assertView('search-result', '.kp-header')
    });
});