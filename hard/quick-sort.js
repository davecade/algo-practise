function quickSort(array) {
    // Write your code here.
      let temp = null
      let pivot = 0
      let left = pivot+1
      let right = array.length-1
      
      console.log("left: ",left)
      console.log("right: ", right)
      if(array.length>1) {
          while(right >= left) {
              if((array[left] > array[pivot]) && (array[right] < array[pivot])) {
                  temp = array[left]
                  array[left] = array[right];
                  array[right] = temp
              } else {
                  if(array[left] < array[pivot]) {
                      left++
                      console.log("left: ",left)
                  }
                  
                  if(array[right] >= array[pivot]) {
                      right--
                      console.log("right: ", right)
                  }
              }
          }
          
          //swap pivot number with right
          temp = array[pivot]
          array[pivot] = array[right]
          array[right] = temp
          
          let leftArray = array.slice(0,right)
          let rightArray = array.slice(right+1)
          console.log("NEW Array: ", array)
          console.log("LEFT Array:", leftArray)
          console.log("RIGHT Array:", rightArray)
          console.log("============")
          
          if((leftArray.length > 0) && (rightArray.length>0)) {
                  if(leftArray.length<rightArray.length) {
                      //Do left first
                      leftArray = quickSort(leftArray)
                      rightArray = quickSort(rightArray)
                  } else {
                      //Do right first
                      rightArray = quickSort(rightArray)
                      leftArray = quickSort(leftArray)
                  }
              return [...leftArray, array[right], rightArray]
          } else {
              
              if(leftArray.length > 0) {
                  //Do left
                  leftArray = quickSort(leftArray)
                  return [...leftArray, array[right]]
              }
              
              if(rightArray.length > 0) {
                  //Do right
                  rightArray = quickSort(rightArray)
                  return [array[right], ...rightArray]
              }
          }
        }
      return array
  }

  console.log(quickSort([8,5,2,9,5,6,3]))