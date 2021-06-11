function minHeightBst(array) {
  // Write your code here.
	let finalArray = createFinalArray(array);
	let myBST = new BST(finalArray[0])
	
	for(let i=1; i<finalArray.length; i++) {
		myBST.insert(finalArray[i])
	}
	
	return myBST;
}

function createFinalArray(array, result=[]) {
	
	if(array.length>0) {
			let middleIdx
			let leftArray
			let rightArray
			let middleVal
			
			if(array.length%2 === 0) {
				middleIdx = Math.floor(array.length/2)-1
			} else {
				middleIdx = Math.floor(array.length/2)
			}

			middleVal = array[middleIdx]
			if(middleVal) {
				result.push(middleVal)
			}
			
			leftArray = array.slice(0,middleIdx)
			rightArray = array.slice(middleIdx+1,array.length)


			if(leftArray.length>0) {
				createFinalArray(leftArray, result)
			}

			if(rightArray.length>0) {
				createFinalArray(rightArray, result)
			}
	}
	
	return result
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
