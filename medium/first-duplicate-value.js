// -- O(N) Time
// -- O(N) Space
function firstDuplicateValue(array) {
    // Write your code here.
      let seenNumbers = []
      
      for(let i = 0; i<array.length; i++) {
          if(seenNumbers.includes(array[i])) {
              return array[i]
          } else {
              seenNumbers.push(array[i])
          }
      }
    return -1;
  }