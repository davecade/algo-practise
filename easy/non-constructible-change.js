function nonConstructibleChange(coins) {
    // Write your code here.
      
      let sortedCoins = coins.sort((a,b) => a-b)
      console.log("sorted", sortedCoins)
      let change = 0
      
      for(let coin of coins) {
          if(coin > change+1) {
              return change+1
          }
          change = change + coin
      }
    return change+1;
  }