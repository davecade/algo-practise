function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a - b)
	let idx = 0
  let left = idx + 1
	let right = array.length-1
	let result = []
	let sum
	
	while(idx < array.length-2) {
		sum = array[idx] + array[left] + array[right]
		
		if(sum === targetSum) {
			result.push([array[idx], array[left], array[right]])
			left++
			right--
		} else if(sum < targetSum) {
			left++;
		} else if(sum > targetSum) {
			right--;
		}
		
		if(left >= right) {
			idx++
			left = idx+1
			right = array.length-1
		}
	}
	return result
}
