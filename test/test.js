'use strict';

var expect = require('chai').expect;
var helper = require('../index');


      describe('#leetcode-helper.removeArrayElement', function() {
          //test mirror function
          it('should return an array without the element', function() {
              var arr = [1,2,3,4,5,6,7,8,9,10];
              var result = helper.removeArrayElement(arr,1);
              expect(result[0]).to.equal(2);
              expect(result.length).to.equal(arr.length-1);
          });
          it('should return an array without the last element', function() {
              var arr = [4,5,6,7,8,9,10];
              var result = helper.removeArrayElement(arr,10);
              expect(result[result.length-1]).to.equal(9);
              expect(result.length).to.equal(arr.length-1);
          });
          it('should return an empty array', function() {
              var arr = [4];
              var result = helper.removeArrayElement(arr,4);
              expect(result.length).to.equal(0);
              expect(result.length).to.equal(arr.length-1);
          });
          it('should return same array if the element is not there', function() {
              var arr = [4,7,5,6];
              var result = helper.removeArrayElement(arr,1);
              expect(result.length).to.equal(4);
              expect(result.length).to.equal(arr.length);
          });
      });
      describe('#leetcode-helper.random', function() {
          //test mirror function
          it('should return a random number', function() {
              var result = helper.random(1,10);
              expect(result).to.be.within(1,10);
          });
      });
      describe('#leetcode-helper.mirror', function() {
          //test mirror function
          it('should return watever passed', function() {
              var result = helper.mirror(123);
              expect(result).to.equal(123);
          });
      });
      describe('#leetcode-helper.node', function() {
          //test Node object
          it('create a new node', function() {
              var result = new helper.node(123);
              expect(result).to.not.be.null;
          });
      });

      describe('#leetcode-helper.print', function() {
          //test Node object
          it('print node', function() {
              var node = new helper.node(123);
              helper.print(node);
          });
          it('print Array', function() {
              helper.print([1,2,3,4]);
          });
          it('print Object', function() {
              helper.print({one: 1, two : 2});
          });
          it('print anything', function() {
              helper.print("something");
          });
      });

    describe('#leetcode-helper.min', function() {
        //test min function
        it('should return the mimimum number', function() {
            var result = helper.min([1,2,3,4,5]);
            expect(result).to.equal(1);
        });
        it('should return undefined', function() {
            var result = helper.min([]);
            expect(result).to.equal(undefined);
        });
        it('should return MAX number value', function() {
            var result = helper.min([1,Number.MAX_VALUE,Number.MIN_VALUE]);
            expect(result).to.equal(Number.MIN_VALUE);
        });
        it('should return MAX number value', function() {
            var result = helper.min([1,Number.MIN_VALUE-1]);
            expect(result).to.equal(-1);
        });
    });
    describe('#leetcode-helper.max', function() {
        //test max function
        it('should return the maximum number', function() {
            var result = helper.max([1,2,3,4,5]);
            expect(result).to.equal(5);
        });
        it('should return undefined', function() {
            var result = helper.max([]);
            expect(result).to.equal(undefined);
        });
        it('should return MAX number value', function() {
            var result = helper.max([1,Number.MAX_VALUE,Number.MIN_VALUE]);
            expect(result).to.equal(Number.MAX_VALUE);
        });
        it('should return MAX number value', function() {
            var result = helper.max([1,Number.MAX_VALUE+10]);
            expect(result).to.equal(Number.MAX_VALUE);
        });
    });
    describe('#leetcode-helper.stack', function() {
        //test stack object
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
    describe('#leetcode-helper.queue', function() {
        //test queue object
        it('queue enque 1 and check peek == 1', function() {
            helper.queue.enque(1);
            var result = helper.queue.peek();
            expect(result).to.equal(1);
        });

        it('queue enque 2 and check peek == 1', function() {
            helper.queue.enque(2);
            var result = helper.queue.peek();
            expect(result).to.equal(1);
        });

        it('queue enque 3 and check peek == 1', function() {
            helper.queue.enque(3);
            var result = helper.queue.peek();
            expect(result).to.equal(1);
        });

        it('queue empty check', function() {
            var result = helper.queue.empty();
            expect(result).to.equal(false);
        });

        it('queue deque and check peek == 1', function() {
            helper.queue.deque();
            var result = helper.queue.peek();
            expect(result).to.equal(2);
        });

        it('queue deque and check peek == 2', function() {
            helper.queue.deque();
            var result = helper.queue.peek();
            expect(result).to.equal(3);
        });

        it('queue deque and check peek == undefined', function() {
            helper.queue.deque();
            var result = helper.queue.peek();
            expect(result).to.equal(undefined);
        });

        it('queue pop and check peek == undefined', function() {
            helper.queue.deque();
            var result = helper.queue.peek();
            expect(result).to.equal(undefined);
        });

        it('queue empty check', function() {
            var result = helper.queue.empty();
            expect(result).to.equal(true);
        });
});
