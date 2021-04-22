function runLengthEncoding(string) {
    let stringArray = string.split("")
      let result = []
      let pointer = null
      let count = 0
  
      for (let i=0; i<stringArray.length; i++) {
          
          if(pointer===null) {
              
              pointer = stringArray[i]
              count++
              
          } else if(pointer===stringArray[i]) {
              
              if(count===9) {
                  
                  result.push(`${count}${pointer}`)
                  
                  // Points to null if item is not last item, otherwise continues pointing to last item
                  if (i<stringArray.length-1) {
                      pointer = null
                  }
                  
                  count = 1
              } else {
                  
                  count++
                  
              }
              
          } else if(pointer!==stringArray[i]) {
              
              result.push(`${count}${pointer}`)
              pointer=stringArray[i]
              count = 1
              
          }
          
      }
  
      result.push(`${count}${pointer}`)
      
      return result.join("")
  }