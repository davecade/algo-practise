class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node, successor=[]) {
      
    if(!tree.left && !tree.right) {
          if(tree.value===node.value || successor.length === 1) {
                  if(tree.value) {
                      successor.push(tree)
                  }
          }
      } else {
          if(tree.left) {
              findSuccessor(tree.left, node, successor)
          }
          
          if(tree.value===node.value || successor.length === 1){
                  if(tree.value) {
                      successor.push(tree)
                  }
          }
          
          if(tree.right) {
              findSuccessor(tree.right, node, successor)
          }
          
      }
      
    return successor[1];
  }