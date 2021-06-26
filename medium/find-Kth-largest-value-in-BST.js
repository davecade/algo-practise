// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k, list=[]) {
    // Write your code here.
      
      if(tree.left===null && tree.right===null) {
          list.push(tree.value)
      } else {
          
          if(tree.left) {
              findKthLargestValueInBst(tree.left, k, list)
          }
          list.push(tree.value)
          if(tree.right) {
              findKthLargestValueInBst(tree.right, k, list)
          }
      }
      
      console.log(list)
    return list[(list.length)-k];
  }