function getNthFib(n) {
	let first = 0
	let second = 1
	let target
	
	if(n===1) {
		return first
	} else if(n===2) {
		return second
	} else {
			for(let i = 0; i<n-2; i++) {
				target = first + second
				first = second
				second = target
		}
	}
	
	return target
}
