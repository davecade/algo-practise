function minHeightBst(array, root=null) {
  // Write your code here.
	let middleIdx
	let leftArray
	let rightArray
	
	if(array.length%2 === 0) {
		middleIdx = Math.floor(array.length/2)-1
	} else {
		middleIdx = Math.floor(array.length/2)
	}
	
	let middleVal = array[middleIdx]
	let newBST = new BST
	newBST.value = middleVal
	if(root===null) {
		root = newBST
	}
	
	console.log("middle: ", middleVal)
	leftArray = array.slice(0,middleIdx)
	rightArray = array.slice(middleIdx+1,array.length)
	
	if(array.length===1) {
		newBST.value = array[0]
	} else {
		console.log("leftA: ", array.slice(0,middleIdx))
		console.log("rightA: ", array.slice(middleIdx+1,array.length))
		newBST.value = middleVal
		
		if(leftArray.length>0){
			root.insert(minHeightBst(array.slice(0,middleIdx), root).value)
			return
		}
		
		if(rightArray.length>0){
			root.insert(minHeightBst(array.slice(middleIdx+1,array.length), root).value)
			return
		}
	}

	console.log("Returning: ", newBST.value)
	return newBST
}