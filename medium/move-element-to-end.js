function moveElementToEnd(array, toMove) {
    let current = 0
      let endPointer = array.length-1
      
      while(current < endPointer) {
          if(array[endPointer]===toMove) {
              endPointer--
          } else if(array[current] === toMove) {
              let temp = array[current]
              array[current] = array[endPointer]
              array[endPointer] = temp
              endPointer--;
              current++;
          } else {
              current++;
          }
      }
      return array;
  }