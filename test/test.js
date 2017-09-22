'use strict';

var expect = require('chai').expect;
var helper = require('../index');

    describe('#leetcode-helper', function() {
    it('should return the mimimum number', function() {
        var result = helper.min([1,2,3,4,5]);
        expect(result).to.equal(1);
    });

    it('should return the maximum number', function() {
        var result = helper.max([1,2,3,4,5]);
        expect(result).to.equal(5);
    });
});
