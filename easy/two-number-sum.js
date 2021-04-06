function twoNumberSum(array, targetSum) {
    result = [];

    for(let i = 0; i<=array.length; i++) {
        for(let y = 0; y<array.length; y++) {
            if(i!=y) {
                if (array[i] + array[y] === targetSum) {
                    result.push(array[i]);
                    result.push(array[y]);
                    return result
                }
            }
        }
    }
    return []
}

function twoNumberSum2(array, targetSum) {
    let hash = {}
    let potentialAnswer

    for(let i = 0; i<array.length; i++) {
        potentialAnswer = targetSum - array[i]
        if(array[i]!=potentialAnswer) {
            hash[array[i]] = true
            if(hash[potentialAnswer]) {
                return [potentialAnswer, array[i]]
            }
        }
    }
	return []
}


function twoNumberSum3(array, targetSum) {
    let first = 0;
    let last = array.length-1;
    let sortedArray = array.sort((a, b) => a - b)

    while (first < last) {
        if(sortedArray[first] + sortedArray[last] === targetSum) {
            return [sortedArray[first], sortedArray[last]]
        } else if (sortedArray[first] + sortedArray[last] < targetSum) {
            first++;
        } else if (sortedArray[first] + sortedArray[last] > targetSum) {
            last--;
        }
    }
    return []
}