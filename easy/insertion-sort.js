function insertionSort(array) {
	let currentIdx = 0
	
	if(array.length>1) {
			for(let i=1; i<array.length; i++) {
				currentIdx=i;
				while(currentIdx > 0 && (array[currentIdx] < array[currentIdx-1])) {
					let temp = array[currentIdx]
					array[currentIdx] = array[currentIdx-1]
					array[currentIdx-1] = temp
					currentIdx--;
				}
		}
	}
	
  return array
}
