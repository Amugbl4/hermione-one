const assert = require('chai').assert;

describe('test', function () {
    hermione.skip.in('mobile', 'not for mobile');
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