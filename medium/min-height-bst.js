function minHeightBst(array) {
  // Write your code here.
	let myBST = new BST
	let finalArray = createFinalArray(array);
	console.log("FINAL: ", finalArray)
	
	for(let value of finalArray) {
		myBST.insert(value)
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
			result.push(middleVal)
		
			console.log("middle: ", middleVal)
			leftArray = array.slice(0,middleIdx)
			rightArray = array.slice(middleIdx+1,array.length)

			console.log("leftArr: ", leftArray)
			console.log("rightArr: ", rightArray)

			if(leftArray.length>0) {
				createFinalArray(leftArray, result)
			}

			if(rightArray.length>0) {
				createFinalArray(rightArray, result)
			}
	}
	
	return result
}