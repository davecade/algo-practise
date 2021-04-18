function selectionSort(array) {
	let smallestNumIdx;
  let startingIdx = 0;
	
	while(startingIdx<array.length) {
		smallestNumIdx = startingIdx;
		for(let i = startingIdx+1; i<array.length; i++) {
			if(array[i] < array[smallestNumIdx]) {
				smallestNumIdx = i
			}
		}
		let temp = array[startingIdx]
		array[startingIdx] = array[smallestNumIdx]
		array[smallestNumIdx] = temp
		startingIdx++
	}
	
	return array;
}