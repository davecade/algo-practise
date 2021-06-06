function sortedSquaredArray(array) {
    // Write your code here.
      let result = array.map(num => {
          return num*num
      })
      
      return result.sort((a,b)=>a-b)
  }