function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      let sortedRedShirtHeights = redShirtHeights.sort((a, b) => a - b)
      let sortedBlueShirtHeights = blueShirtHeights.sort((a, b) => a - b)
      
      //--Check first numbers
      if(sortedRedShirtHeights[0] > sortedBlueShirtHeights[0]) {
          backRow = sortedRedShirtHeights
          frontRow = sortedBlueShirtHeights
      } else {
          backRow = sortedBlueShirtHeights
          frontRow = sortedRedShirtHeights
      }
      
      for(let i = 0; i<backRow.length; i++) {
          if(backRow[i] <= frontRow[i]) {
              return false
          }
      }
    return true;
  }
  