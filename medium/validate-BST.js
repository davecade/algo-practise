// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    // Write your code here.
      let checkLeft
      let checkRight
      
      if(tree.left || tree.right) {
          if((tree.left) && (tree.value <= tree.left.value)) {
              return false
          }
          
          if ((tree.right) && (tree.value > tree.right.value)) {
              return false;
          } 
          
          if(tree.left) {
              checkLeft = validateBst(tree.left)
          }
  
          if(tree.right) {
              checkRight = validateBst(tree.right)
          }
  
          if(checkLeft === false || checkRight === false) {
              return false
          }
          
      } 
      
      return true
  }
  