

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      let result = [0, 0]
      let currentSmallestResult = Infinity
      let currentAnswer
      
      for(let arrayOneItem of arrayOne) {
          for (let arrayTwoItem of arrayTwo) {
              if(arrayOneItem > arrayTwoItem) {
                  currentAnswer = (arrayOneItem) - (arrayTwoItem)
              } else if(arrayTwoItem > arrayOneItem) {
                  currentAnswer = (arrayTwoItem) - (arrayOneItem)
              } else {
                  currentAnswer = 0;
              }
              
              if(currentAnswer < currentSmallestResult) {
                  currentSmallestResult = currentAnswer;
                  result[0] = arrayOneItem
                  result[1] = arrayTwoItem
              }
          }
      }
      return result;
  }




  function smallestDifference2(arrayOne, arrayTwo) {
    let idxOne = 0;
      let idxTwo = 0;
      let result = [];
      let smallestDistance = Infinity;
      let currentDistance;
      arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);
      
      
      while(idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
          let firstNumber = arrayOne[idxOne]
          let secondNumber = arrayTwo[idxTwo]
          
          if(firstNumber > secondNumber) {
                  currentDistance = firstNumber - secondNumber
                  idxTwo++
          } else if (secondNumber > firstNumber) {
                  currentDistance = secondNumber - firstNumber
                  idxOne++
          } else {
              return [firstNumber, secondNumber]
          }
          
          if(smallestDistance > currentDistance) {
              smallestDistance = currentDistance
                  result[0] = firstNumber
                  result[1] = secondNumber
          }
      }
      
      return result;
  }