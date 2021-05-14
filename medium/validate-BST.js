function validateBst(tree, min=-Infinity, max=Infinity) {
    // Write your code here.
      let checkLeft
      let checkRight
      
      if(tree.value < min || tree.value >= max) {
          return false
      } else {
          
          if(tree.left) {
              checkLeft = validateBst(tree.left, min, tree.value)
          }
  
          if(tree.right) {
              checkRight = validateBst(tree.right, tree.value, max)
          }
          
          if(checkLeft === false || checkRight === false) {
              return false
          }
          
      }
      
      return true
  }