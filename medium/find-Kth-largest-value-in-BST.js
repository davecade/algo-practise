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
  

  function findKthLargestValueInBst2(tree, k, list=[]) {
    // Write your code here.
      let result
      
      if(tree.left===null && tree.right===null) {
          list.push(tree.value)
          result = list[k-1]
      } else {
          
          if(tree.right) {
              result = findKthLargestValueInBst(tree.right, k, list)
              
              if(result) {
                  return result
              }
          }
          
          list.push(tree.value)
          result = list[k-1]
          if(result) {
              return list[k-1]
          }
          
          if(tree.left) {
              result = findKthLargestValueInBst(tree.left, k, list)
              if(result) {
                  return result
              }
          }
      }
    return result;
  }