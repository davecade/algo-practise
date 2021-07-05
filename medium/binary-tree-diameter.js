// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeInfo {
      constructor(diameter, height) {
          this.diameter = diameter,
          this.height = height
      }
  }
  
  function binaryTreeDiameter(tree) {
    // Write your code here.
    return getTreeInfo(tree).diameter
  }
  
  function getTreeInfo(tree) {
      if(!tree) {
          return new TreeInfo(0, 0)
      }
      
      let left = getTreeInfo(tree.left)
      let right = getTreeInfo(tree.right)
      
      let longestPahThroughRoot = left.height + right.height
      let maxDiameterSoFar = Math.max(left.diameter, right.diameter)
      
      let currentDiamater = Math.max(longestPahThroughRoot, maxDiameterSoFar)
      let currentHeight = Math.max(left.height, right.height)+1
      
      return new TreeInfo(currentDiamater, currentHeight)
  }