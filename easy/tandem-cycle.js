function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      let sortedRedShirtSpeeds
      let sortedBlueShirtSpeeds
      let speed = 0;
      
      if(fastest) {
          sortedRedShirtSpeeds = redShirtSpeeds.sort((a,b) => a-b)
          sortedBlueShirtSpeeds = blueShirtSpeeds.sort((a,b) => b-a)
      } else {
          sortedRedShirtSpeeds = redShirtSpeeds.sort((a,b) => a-b)
          sortedBlueShirtSpeeds = blueShirtSpeeds.sort((a,b) => a-b)
      }
      
      for(let i = 0; i<sortedRedShirtSpeeds.length; i++) {
          if(sortedRedShirtSpeeds[i] >= sortedBlueShirtSpeeds[i]) {
              speed = speed + sortedRedShirtSpeeds[i]
          } else if(sortedRedShirtSpeeds[i] < sortedBlueShirtSpeeds[i]) {
              speed = speed + sortedBlueShirtSpeeds[i]
          }
      }
      
      return speed
  }