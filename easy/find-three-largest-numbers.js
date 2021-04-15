function findThreeLargestNumbers(array) {
	let first = null
	let second = null
	let third = null
	
	for (num of array) {
		if(num>first || first === null) {
			third = second
			second = first
			first = num
		} else if(num>second || second === null) {
			third = second
			second = num
		} else if(num > third || third === null) {
			third = num
		}
	}
	
	return [third, second, first]
}