function firstNonRepeatingCharacter(string) {
    // Write your code here.
      let cache = {}
      let array = string.split('')
      
      array.forEach((letter, index) => {
          if(cache[letter] === undefined) {
              cache[letter] = index;
          } else {
              cache[letter] = -1;
          }
      })
      
      for(let letter of array) {
          if(cache[letter] >= 0) {
              return cache[letter]
          }
      }
    return -1;
  }
  