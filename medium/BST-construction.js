// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
      
    insert(value) {
          let finished = false;
          let pointer = this
          
          while(!finished) {
                  if(value < pointer.value) {
                          if(pointer.left === null) {
                                  pointer.left = new BST(value)
                                  finished = true
  
                          } else {
                                  pointer = pointer.left
                          }
                  } else if(value >= pointer.value) {
                          if(pointer.right === null) {
                                  pointer.right = new BST(value)
                                  finished = true
                          } else {
                                  pointer = pointer.right
                          }
                  }
          }
  
      return this;
    }
  
    contains(value) {
      let found = false;
          let pointer = this
          
          while(!found) {
              if(pointer === null) {
                  return false
              } else if(value === pointer.value || pointer.left === value || pointer.right === value) {
                  return true
              } else {
                  //Check where to move pointer (left or right)
                  if(value < pointer.value) {
                      pointer = pointer.left
                  } else if (value >= pointer.value) {
                      pointer = pointer.right
                  }
              }
          }
          
          return this;
    }
  
    remove(value) {
      // Write your code here.
      // Do not edit the return statement of this method.
          let finished = false;
          let targetfound = false;
          let lowestFound = false;
          let pointer = this
          let target = this
          let lowest = this
          let parent
          let direction
              
              //Check if node exists, otherwise dont even bother looking
        if(this.contains(value)===true) {
            //If exists, find the node
            while(!finished) {
                if(value === pointer.value) {
                    finished = true;
                    targetfound = true;
                    target = pointer;
                } else {
                                  if (pointer.left) {							
                                      if(value === pointer.left.value) {
                                          finished = true;
                                          targetfound = true;
                                          parent = pointer
                                          pointer = pointer.left
                                          target = pointer;
                                          direction = "left"
                                      }
                                  }
                                  
                                  if (pointer.right) {							
                                      if(value === pointer.right.value) {
                                          finished = true;
                                          targetfound = true;
                                          parent = pointer
                                          pointer = pointer.right
                                          target = pointer;
                                          direction = "right"
                                      }
                                  }
                              }
  
                              //Not found yet, so check where to move pointer to continue searching
                              if(!targetfound) {
                                  if(value < pointer.value) {
                                          pointer = pointer.left
                                  } else if (value >= pointer.value) {
                                          pointer = pointer.right
                                  }
                              }
            }
        }
        
        //If delete target is found, find the lowest number on the right side
              let lowestNodeHasChildren = false // by Default set to false until we find lowest node
              
              //If right side exists, then must find lowest on right side.
              //But if right side doesnt exists, then dont need to find lowest node anymore
              //Lowest node will be the direct left node
              let mustFindLowestVal
        if(targetfound) {
                      if(target.right) {
                          direction = "right"
                          parent = pointer
                          pointer = target.right;
                          lowest = pointer
                          
                          // Must find lowest value because right side exists
                          mustFindLowestVal = true;
                      } else if(target.left) {
                          direction ="left"
                          parent = pointer
                          pointer = target.left;
                          lowest = pointer
                          
                          // No need to find lowest on left side.
                          // Lowest is lower than target value, so lowest will be left node
                          mustFindLowestVal = false;
                      } else {
                          target = null
                          pointer = null
                          lowest = null
                          lowestFound = true
                          
                          //-- Dont need to rearange children because the lowest node has no children
                          lowestNodeHasChildren = true
                          
                          if(direction==="left" && parent.left) {
                              parent.left = null
                          } else if(direction === "right" && parent.right) {
                              parent.right = null
                          }
                      }
            
            while(!lowestFound) {
                if(pointer.left === null && pointer.right === null) {
                    lowestFound = true
                                  
                                      //if mustFindLowestVal === true, then set lowest to pointer
                                      //if mustFindLowestVal === false, then no need to set lowest to pointer. We already have lowest value
                                      if((pointer.value < lowest.value) && mustFindLowestVal) {
                                          lowest = pointer
                                      }
                              
                } else {
                    if(pointer.left) {
                                              parent = pointer
                                              direction = "left"
                        pointer = pointer.left
                    } else if(pointer.right) {
                                              parent = pointer
                                              direction = "right"
                        pointer = pointer.right
                    }
                }
            }
        }
          
          //Once lowest is found, delete target, and add lowest in its place
          let newTargetVal
          if(lowestNodeHasChildren === false) {
                  newTargetVal = lowest.value
                  if(lowest.left || lowest.right) {
                      lowest.remove(newTargetVal)
                  }
                  target.value = newTargetVal
              
                  if(direction==="left" && parent.left) {
                      parent.left = null
                  } else if(direction === "right" && parent.right) {
                      parent.right = null
                  }
              
                  pointer = null
                  lowest = null
          }
          
      return this;
    }
      
  }

  const myBST = new BST(10)


  myBST.insert(5)
  myBST.insert(15)
  myBST.insert(2)
  myBST.insert(5)
  myBST.insert(13)
  myBST.insert(22)
  myBST.insert(1)
  myBST.insert(14)
  myBST.insert(12)
  console.log(myBST)
  myBST.remove(10)
  console.log()
  console.log()
  console.log()
  console.log(myBST)