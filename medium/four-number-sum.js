function fourNumberSum(array, targetSum) {
  const pairs = {};
  const quadruplets = [];
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;
      if (difference in pairs) {
        for (const pair of pairs[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];
      if (!(currentSum in pairs)) {
        pairs[currentSum] = [[array[k], array[i]]];
      } else {
        pairs[currentSum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
}
