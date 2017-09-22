'use strict';

// module.exports = function(number) {
//     return number;
// };

var exports = {
    max : function(nums){
         var m = Number.MIN_VALUE;
         for(var i=0;i<nums.length;i++)
           m = Math.max(m,nums[i]);
         return m;
    },
    min : function(nums){
         var m = Number.MAX_VALUE;
         for(var i=0;i<nums.length;i++)
           m = Math.min(m,nums[i]);
         return m;
    }
}
module.exports = exports;
