function spiralTraverse(array) {
	const totalNumbers = array.length*array[0].length
  let result = []
	let x = 0
	let y = 0
	let direction = 'right'
	
	while(result.length<totalNumbers) {
	console.log(array)
		if(array[y][x]) {
				result.push(array[y][x])
				array[y][x] = null
		}
		
		if(direction === 'right') {
			if(array[y][x+1] === null || array[y][x+1] === undefined) {
				direction = 'down'
			} else {
				x++
			}
		} else if (direction === 'down') {
			if(array[y+1]) {
				if(array[y+1][x] === null || array[y+1][x] === undefined) {
					direction = 'left'
				} else {
					y++
				}
			} else {
				direction = 'left'
			}
		} else if(direction === 'left') {
			if(array[y][x-1] === null || array[y][x-1] === undefined) {
				direction = 'up'
			} else {
				x--;
			}
		} else if (direction === 'up') {
			if(array[y-1]) {
				if(array[y-1][x] === null || array[y-1][x] === undefined) {
					direction = 'right'
				} else {
					y--;
				}
			} else {
					direction = 'right'
			}
		}
	}
	return result;
}

