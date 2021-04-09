// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }



function findClosestValueInBst(tree, target) {
	let closest = Infinity;
	let currentNode = tree;
	
	while(currentNode!=null) {
		if(Math.abs(closest-target) > Math.abs(currentNode.value-target)) {
			closest = currentNode.value
		}
		
		if(currentNode.value < target) {
			currentNode = currentNode.right;
		} else if(currentNode.value > target) {
			currentNode = currentNode.left
		} else {
			break;
		}
	}
	return closest;
}