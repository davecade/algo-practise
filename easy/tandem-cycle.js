function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      let sortedRedShirtSpeeds
      let sortedBlueShirtSpeeds
      let high = 0;
      let low = 0;
      
      let redShirtSpeedsSUM = redShirtSpeeds.reduce((a, b) => a + b, 0)
      console.log("REDSUM", redShirtSpeedsSUM)
      let blueShirtSpeedsSUM = blueShirtSpeeds.reduce((a, b) => a + b, 0)
      console.log("BLUESUM", blueShirtSpeedsSUM)
      
      if(redShirtSpeedsSUM > blueShirtSpeedsSUM) {
          sortedRedShirtSpeeds = redShirtSpeeds.sort((a,b) => a-b)
          sortedBlueShirtSpeeds = blueShirtSpeeds.sort((a,b) => b-a)
      } else {
          sortedRedShirtSpeeds = redShirtSpeeds.sort((a,b) => b-a)
          sortedBlueShirtSpeeds = blueShirtSpeeds.sort((a,b) => a-b)
      }
      
      
      for(let i = 0; i<sortedRedShirtSpeeds.length; i++) {
          if(sortedRedShirtSpeeds[i] >= sortedBlueShirtSpeeds[i]) {
              high = high + sortedRedShirtSpeeds[i]
              low = low + sortedBlueShirtSpeeds[i]
          } else if(sortedRedShirtSpeeds[i] < sortedBlueShirtSpeeds[i]) {
              high = high + sortedBlueShirtSpeeds[i]
              low = low + sortedRedShirtSpeeds[i]
          }
      }
      
      if(fastest) {
          console.log("returned High")
          return high;
      } else {
          console.log("returned Low")
          return low;
      }
  }