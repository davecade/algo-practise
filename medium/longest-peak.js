// 0(n) time | 0(n) space

function longestPeak(array) {
    let direction = 'increasing';
      let currentPeak = []
      let longestPeakLength = 0;
      
      currentPeak.push(array[0])
      
      for(let i = 0; i<array.length-1; i++) {
          
          if(direction==='increasing') {
              if(currentPeak.length===1) {	
                  if(array[i] > array[i+1]) {
                      currentPeak = []
                      currentPeak.push(array[i])
                  } else if(array[i] === array[i+1]) {
                      currentPeak = []
                      currentPeak.push(array[i+1])
                  } else if (array[i] < array[i+1]) {
                      currentPeak.push(array[i+1])
                  }
              } else if (currentPeak.length > 1) {
                  if(array[i] < array[i+1]) {
                      currentPeak.push(array[i+1])
                  } else if (array[i] > array[i+1]) {
                      currentPeak.push(array[i+1])
                      direction='decreasing'
                      if(longestPeakLength<currentPeak.length){
                          longestPeakLength = currentPeak.length
                      }
                  } else if(array[i] === array[i+1]){
                      currentPeak = []
                      currentPeak.push(array[i+1])
                  }
              }
          } else if(direction==='decreasing') {
              if(array[i] > array[i+1]) {
                  currentPeak.push(array[i+1])
              } else if (array[i] === array[i+1]) {
                      currentPeak = []
                      currentPeak.push(array[i+1])
                      direction='increasing'
              } else if (array[i] < array[i+1]) {
                      currentPeak = []
                      currentPeak.push(array[i])
                      currentPeak.push(array[i+1])
                      direction='increasing'
              }
              
              if(longestPeakLength<currentPeak.length){
                  longestPeakLength = currentPeak.length
              }
          }
          
      }
      
      return longestPeakLength;
  }