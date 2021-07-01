function invertBinaryTree(tree) {
    // Write your code here.
      if(!tree) return;
      swap(tree)
      invertBinaryTree(tree.left)
      invertBinaryTree(tree.right)
      return tree
  }
  
  function swap(node) {
      const temp = node.left
      node.left = node.right
      node.right = temp
  }