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

    it('stack push 1 and check peek == 1', function() {
        helper.stack.push(1);
        var result = helper.stack.peek();
        expect(result).to.equal(1);
    });

    it('stack push 2 and check peek == 2', function() {
        helper.stack.push(2);
        var result = helper.stack.peek();
        expect(result).to.equal(2);
    });

    it('stack push 3 and check peek == 3', function() {
        helper.stack.push(3);
        var result = helper.stack.peek();
        expect(result).to.equal(3);
    });

    it('stack empty check', function() {
        var result = helper.stack.empty();
        expect(result).to.equal(false);
    });

    it('stack pop and check peek == 2', function() {
        helper.stack.pop();
        var result = helper.stack.peek();
        expect(result).to.equal(2);
    });

    it('stack pop and check peek == 1', function() {
        helper.stack.pop();
        var result = helper.stack.peek();
        expect(result).to.equal(1);
    });

    it('stack pop and check peek == undefined', function() {
        helper.stack.pop();
        var result = helper.stack.peek();
        expect(result).to.equal(undefined);
    });

    it('stack pop and check peek == undefined', function() {
        helper.stack.pop();
        var result = helper.stack.peek();
        expect(result).to.equal(undefined);
    });

    it('stack empty check', function() {
        var result = helper.stack.empty();
        expect(result).to.equal(true);
    });
});
