// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function heightBalancedBinaryTree(tree, root=tree) {
    // Write your code here.
      let leftSide
      let rightSide
      
      //base case
      if(!tree.left && !tree.right) {
          if(tree===root) {
              return true
          } else {
              return {height: 1}
          }
      }
  
      //check left
      if(tree.left) {
          leftSide = heightBalancedBinaryTree(tree.left, tree)
      } else {
          leftSide = {height: 0}
      }
      
      //check right
      if(tree.right) {
          rightSide = heightBalancedBinaryTree(tree.right, tree)
      } else {
          rightSide = { height: 0}
      }
      
      //determine if balanced
      if(leftSide && rightSide) {
          //check greater height
          let greater
          let lesser
          
          if(leftSide.height > rightSide.height) {
              greater = leftSide
              lesser = rightSide
          } else {
              greater = rightSide
              lesser = leftSide
          }
  
          if(Math.abs((greater.height - lesser.height)) < 2) {
              if(tree===root) {
                  return true
              } else {
                  return {height: greater.height+1}
              }
          }
      }
      
      return false;
  }