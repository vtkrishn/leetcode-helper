'use strict';

var expect = require('chai').expect;
var numberReturner = require('../index');

    describe('#numberReturner', function() {
    it('should return the passed number back', function() {
        var result = numberReturner(1);
        expect(result).to.equal(1);
    });
});
