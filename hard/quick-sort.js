function quickSort(array) {
	let temp = null
	let pivot = 0
	let left = pivot+1
	let right = array.length-1
	
	// Only start sorting if array length > 1
	if(array.length>1) {
		while(right >= left) {

			if((array[left] > array[pivot]) && (array[right] < array[pivot])) {
				temp = array[left]
				array[left] = array[right];
				array[right] = temp
			} else {

				if(array[left] <= array[pivot]) {
					left++
				}
				
				if(array[right] >= array[pivot]) {
					right--
				}
			}
		}
		
		//swap pivot number with right
		temp = array[pivot]
		array[pivot] = array[right]
		array[right] = temp
		
		//Split arrays
		let leftArray = array.slice(0,right)
		let rightArray = array.slice(right+1)
		
		//Check left sub array and right sub array exist
		if((leftArray.length>0) && (rightArray.length>0)) {
			
				if(leftArray.length<rightArray.length) {
					//Do left first
					leftArray = quickSort(leftArray)
					rightArray = quickSort(rightArray)
				} else {
					//Do right first
					rightArray = quickSort(rightArray)
					leftArray = quickSort(leftArray)
				}
			return [...leftArray, array[right], ...rightArray]
		} else {
			if(leftArray.length > 0) {
				//Do left
				leftArray = quickSort(leftArray)
				return [...leftArray, array[right]]
			}
			
			if(rightArray.length > 0) {
				//Do right
				rightArray = quickSort(rightArray)
				return [array[right], ...rightArray]
			}
		}
	}
	
	//If array length is not > 1, then just return array
	return array
}