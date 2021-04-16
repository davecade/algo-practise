function bubbleSort(array) {
	let finished = false
	let count = array.length-1
  
	while(!finished) {
		finished = true
		for(let i=0; i<count; i++) {
			if(array[i]>array[i+1]) {
				let temp = array[i]
				array[i] = array[i+1]
				array[i+1] = temp
				finished = false
			}
		}
		count--;
	}
	return array;
}

function bubbleSort2(array) {
	let finished = false
	let count = array.length-1
  
	while(!finished) {
		finished = true
		for(let i=0; i<count; i++) {
			if(array[i]>array[i+1]) {
				swap(array, i, i+1);
				finished = false
			}
		}
		count--;
	}
	return array;
}

function bubbleSort3(array) {
	let finished = false
	let counter = 0
  
	while(!finished) {
		finished = true
		for(let i=0; i<array.length-1-counter; i++) {
			if(array[i]>array[i+1]) {
				let temp = array[i]
				array[i] = array[i+1]
				array[i+1] = temp
				finished = false
				console.log(i, counter)
			}
		}
		counter++;
	}
	return array;
}