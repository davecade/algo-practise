class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function heightBalancedBinaryTree(tree) {
    // Write your code here.
      let leftSide
      let rightSide
      
      //base case
      if(!tree.left && !tree.right) {
          return {height: 1, balanced: true}
      }
  
      //check left
      if(tree.left) {
          leftSide = heightBalancedBinaryTree(tree.left)
      }
      
      //check right
      if(tree.right) {
          rightSide = heightBalancedBinaryTree(tree.right)
      }
      
      //calculate
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
          
          if((greater.height - lesser.height) < 2) {
              return {height: greater+1, balanced: true }
          }
      } else {
          return false;
      }
  }