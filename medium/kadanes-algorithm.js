function kadanesAlgorithm(array) {
  const copyArray = [...array];
  let highestNum = null;
  let total = 0;
  let tally = 0;
  const arrayKept = [];

  array.forEach((num) => {
    total = total + num;
  });
  tally = total;
  highestNum = total;

  while (copyArray.length > 0) {
    for (let i = 0; i < copyArray.length; i++) {
      if (tally > highestNum) {
        console.log("HIGHEST > ", tally);
        highestNum = tally;
      }
      tally = tally - copyArray[i];
    }
    const minusThis = copyArray.pop();
    tally = total - minusThis;
    total = total - minusThis;
  }
  return highestNum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;

console.log(
  "RESULT > ",
  kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])
);
