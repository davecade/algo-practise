function maxSubsetSumNoAdjacent(array) {
    // Write your code here.

    if (array.length === 0) return 0;

    if (array.length === 1) {
        return array[0];
    } else if (array.length === 2) {
        return Math.max(array[0], array[1]);
    } else if (array.length > 2) {
        let current;
        let first = array[0];
        let second = Math.max(array[0], array[1]);

        for (let i = 2; i < array.length; i++) {
            current = Math.max(second, first + array[i]);
            first = second;
            second = current;
        }
        return current;
    }
}

maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]);
