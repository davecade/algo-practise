// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
    function branchSums(root) {
      sums = []
        calculateBranchSums(root, 0, sums)
          return sums
    }
    
    function calculateBranchSums(node, runningSum, sums) {
  
          if(node === null) {
              return
          }
                  
                  let newRunnningSum = runningSum + node.value;
          if(node.left === null && node.right === null) {
              sums.push(newRunnningSum)
          }
      
          calculateBranchSums(node.left, newRunnningSum, sums)
          calculateBranchSums(node.right, newRunnningSum, sums)
    }