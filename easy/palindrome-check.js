function isPalindrome(string) {
    let arrayString = string.split("")
      let startIdx = 0
      let endIdx = arrayString.length-1
      
      while(startIdx < endIdx) {
          if(!(arrayString[startIdx]===arrayString[endIdx])) {
              return false
          }
          startIdx++;
          endIdx--;
      }
      return true
  }