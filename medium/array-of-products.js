// -- O(N) Time
// -- O(N) Space
function arrayOfProducts(array) {
    let result = []
      let multiple = 1
      let currentElement = 0
      let pointer = 0
      
      while(currentElement < array.length) {
          if(currentElement === pointer) {
              pointer++
          } else {
                  if(pointer >= array.length) {
                          pointer=0;
                          result.push(multiple)
                          multiple = 1
                          currentElement++
                  } else {
                      multiple = multiple*array[pointer]
                      pointer++
                  }
          }
      }
      
      return result;
  }

// -- O(N^2) Time
// -- O(N) Space
  function arrayOfProducts2(array) {
    let result = []
    let multiple = 1
    
    for(let i = 0; i < array.length; i++) {
        
        for(let x = 0; x < array.length; x++) {
            if(x !== i) {
                multiple = multiple*array[x]
            }
        }
        result.push(multiple)
        multiple = 1
    }
    return result;
  }