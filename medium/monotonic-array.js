function isMonotonic(array) {
	if(array.length > 1) {
		let firstEl = array[0]
		let secondEl = array[1]

		if(firstEl > secondEl) {
			return isMonotonicHelper('decreasing', array)
		} else if (firstEl < secondEl) {
			return isMonotonicHelper('increasing', array)
		} else if (firstEl === secondEl) {
			if(array.length>2) {
				return isMonotonic(array.slice(1, array.length))
			}
		}
	}
	return true;
}

function isMonotonicHelper(direction, array) {
	if(direction === 'increasing') {
		for(let i = 1; i<array.length-1; i++) {
			if(array[i] > array[i+1]) {
				return false
			}
		}
	} else if (direction === 'decreasing') {
		for(let i = 1; i<array.length-1; i++) {
			if(array[i] < array[i+1]) {
				return false
			}
		}
	}
	return true;
}