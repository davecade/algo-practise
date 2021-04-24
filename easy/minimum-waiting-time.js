
function minimumWaitingTime(queries) {
    // Write your code here.
      queries.sort((a,b) => a - b)
      let result = 0
      
      for(let i=1; i<queries.length; i++) {	
          for(let j=0; j<i; j++) {
              result+=queries[j]
          }
      }
  
    return result;
  }

  
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

function minimumWaitingTime2(queries) {
  // Write your code here.
	queries.sort((a,b) => a - b)
	waitingTotals = []
	result = 0;
	
	for(let i = 0; i<queries.length-1; i++) {
		waitingTotals.push(queries[i])
		result+=arrSum(waitingTotals)
	}
	
  return result;
}