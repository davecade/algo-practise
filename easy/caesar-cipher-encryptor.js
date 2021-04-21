function caesarCipherEncryptor(string, key) {
    let arrayString = string.split("")
      let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      
      for(let i=0; i<arrayString.length; i++) {
          let newIndex = alphabet.indexOf(arrayString[i])+key+1
          
          if(newIndex > 26) {
              newIndex = (newIndex%26)
              arrayString[i] = alphabet[newIndex-1]
          } else {
              arrayString[i] = alphabet[newIndex-1]
          }
      }
      return arrayString.join("")
  }


  function caesarCipherEncryptor2(string, key) {
    let arrayString = string.split("")
      
      for(let i=0; i<arrayString.length; i++) {
          let newIndex = arrayString[i].charCodeAt()+key
  
          if((newIndex-96) > 26) {
              newIndex = ((newIndex-96)%26)+96
              arrayString[i] = String.fromCharCode(newIndex)
          } else {
              arrayString[i] = String.fromCharCode(newIndex)
          }
      }
      return arrayString.join("")
  }