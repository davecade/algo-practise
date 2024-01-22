function levenshteinDistance(str1, str2) {
  // Formula
  // if str1[r] == str2[c] then edits[r-1][c-1], which is the diagonal
  // else edits[r][c] = 1 + (min of 3 neighbouring values)
  // to get left is [r][c-1]
  // to get right is [r-1][c]

  const edits = Array(str1.length + 1)
    .fill(null)
    .map(() => Array(str2.length + 1).fill(null));

  const firstArray = edits[0];
  // add column numbers
  for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] = i;
  }

  // add row numbers
  for (let i = 0; i < edits.length; i++) {
    edits[i][0] = i;
  }

  for (let i = 1; i < edits.length; i++) {
    console.log("EYE: ", i);
    for (let j = 1; j < edits[i].length; j++) {
      const letterFromStr1 = str1[i - 1];
      const letterFromStr2 = str2[j - 1];
      if (letterFromStr1 === letterFromStr2) {
        console.log("SAME > ", letterFromStr1);
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          Math.min(edits[i - 1][j - 1], edits[i][j - 1], edits[i - 1][j]) + 1;
      }
    }
  }
  console.log("edits: ", edits);
  return edits[edits.length - 1][edits[0].length - 1];
}

console.log("ANSWER: ", levenshteinDistance("abc", "yabd"));
