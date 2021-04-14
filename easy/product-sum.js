// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multiplier = 1) {
	let result = 0;
  for(let i=0; i<array.length; i++) {
		if(Array.isArray(array[i])) {
			result = result + productSum(array[i], multiplier+1)
		} else {
			result += array[i]
		}
	}
	return multiplier*result
}