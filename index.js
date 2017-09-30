'use strict';

// module.exports = function(number) {
//     return number;
// };

var helper = {

  removeArrayElement : function(arr, item){
    return arr.filter(function(i){
      return i != item;
    });
  },
    mirror : function(item){
      console.log(item);
      return item;
    },
    node : function(value){
        this.val = value;
        this.next = null;
      },
      print : function(node){
          if(node instanceof this.node){
           while(node !== null){
            console.log(node.val);
            node = node.next;
           }
          }
          else if(node instanceof Array){
            node.forEach(this.mirror);
          }
          else if(node instanceof Object){
            console.log(Object.keys(node).map(
              function(key){
                return node[key]
              }));
          }
          else{
            console.log(node);
          }
      },
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
    random : function(min, max){
      var random = Math.random();
      return Math.floor(random * (max - min + 1) + min)
    }
    ,
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
    },
    createTree : function(treeString){

        var createTreeNode = function(value){
            var TreeNode = function(value) {
             this.left = null;
             this.right = null;
             this.val = value;
            };
            return new TreeNode(value);
        };

    var treeStringSplit = treeString.split(',');
    var root = createTreeNode(parseInt(treeStringSplit[0]));
    var q = [];
    q.push(root);
    var i = 1;
    while(q.length > 0 && i < treeStringSplit.length){
      var node = q.shift();
      if(node === null)
        continue;

      if(i < treeStringSplit.length && parseInt(treeStringSplit[i]) !== null){
        node.left = createTreeNode(parseInt(treeStringSplit[i]));
        q.push(node.left);
      }
      else{
        node.left = null;
        q.push(null);
      }

      i++;

      if(i < treeStringSplit.length && parseInt(treeStringSplit[i]) !== null){
        node.right = createTreeNode(parseInt(treeStringSplit[i]));
        q.push(node.right);
      }
      else{
        node.right = null;
        q.push(null);
      }
      i++;
    }

    return root;
  }
}
module.exports = helper;
