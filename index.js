'use strict';

// module.exports = function(number) {
//     return number;
// };

var exports = {
    max : function(nums){
         var m = Number.MIN_VALUE;
         if(nums.length === 0)
          return undefined;
         for(var i=0;i<nums.length;i++)
           m = Math.max(m,nums[i]);
         return m;
    },
    min : function(nums){
         var m = Number.MAX_VALUE;
         if(nums.length === 0)
          return undefined;
         for(var i=0;i<nums.length;i++)
           m = Math.min(m,nums[i]);
         return m;
    },
    stack : {
      arr : [],
      size : 0,
      push : function(value){
        this.arr.unshift(value);
        this.size++;
      },
      pop : function(){
        this.arr.shift();
        if(this.size > 0)
          this.size--;
      },
      peek : function(){
        return this.arr[0];
      },
      empty : function(){
        return (this.size === 0);
      }
    },
    queue : {
      arr : [],
      size : 0,
      enque : function(value){
        this.arr.push(value);
        this.size++;
      },
      deque : function(){
        this.arr.shift();
        if(this.size > 0)
          this.size--;
      },
      peek : function(){
        return this.arr[0];
      },
      empty : function(){
        return (this.size === 0);
      }
    }
}
module.exports = exports;
