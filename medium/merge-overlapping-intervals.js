//0(N) - Time
//O(N) - Space

function mergeOverlappingIntervals(array) {
    // Write your code here.
      let result = []
      let sortedArray = array.sort((a, b) => a[0] - b[0]);
      
      for(let interval of sortedArray) {
          if(result.length===0) {
              result.push(interval)
          } else {
              compareArrays(result, interval)
          }
      }
    return result;
  }
  
  // Helper function to compare current result with new interval
  function compareArrays(result, interval) {
      for(let item of result) {
          if(interval[0] >= item[0] && interval[0] <= item[1]) {
              interval = mergeArrays(item, interval)
              item[0] = interval[0]
              item[1] = interval[1]
              return;
          }
      }
      
      result.push(interval)
  }
  
  // Helper function to marge two arrays ranges into one array
  function mergeArrays(a, b) {
      let mergedArrays = []
      if(a[0] <= b[0]) {
          mergedArrays.push(a[0])
      } else {
          mergedArrays.push(b[0])
      }
      
      if(a[1] >= b[1]) {
          mergedArrays.push(a[1])
      } else {
          mergedArrays.push(b[1])
      }
      return mergedArrays
  }