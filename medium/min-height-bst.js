function minHeightBst(array) {
  // Write your code here.
	let middleIdx = Math.floor(array.length/2)
	let middleVal = array[middleIdx]
	
	let newBST = new BST
	newBST.left = minHeightBst(array.slice(0,middleIdx))
	newBST.right = minHeightBst(array.slice(middleIdx,array.length-1))
	return neBwST
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}