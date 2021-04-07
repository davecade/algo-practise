function isValidSubsequence(array, sequence) {
    let newArray = array.filter((element, index) => {
        if(sequence.includes(element)) {
            return element
        }
    });
		
    for(let i = 0; i<sequence.length; i++) {
        if(newArray[i] != sequence[i]) {
            return false
        }
    }
      return true
  }


  function isValidSubsequence2(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < array.length && seqIdx < sequence.length) {
        if(array[arrIdx] === sequence[seqIdx]) {
            seqIdx++
        }
        arrIdx++;
    }
    return seqIdx === sequence.length;
  }

  function isValidSubsequence3(array, sequence) {
    let arrayIndex = 0;
      let sequenceIndex = 0;
      
      while(arrayIndex < array.length && sequenceIndex < sequence.length) {
          if(array[arrayIndex] === sequence[sequenceIndex]) {
              sequenceIndex++;
          }
          arrayIndex++;
      }
      
      return sequenceIndex === sequence.length
  }