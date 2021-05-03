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
  
          
        if(this.contains(value)===true) {
            //find the node
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
                                          pointer = pointer.left
                                          target = pointer;
                                      }
                                  }
                                  
                                  if (pointer.right) {							
                                      if(value === pointer.right.value) {
                                          finished = true;
                                          targetfound = true;
                                          pointer = pointer.right
                                          target = pointer;
                                      }
                                  }
                              }
  
                              //Not found, so check where to move pointer
                              //check if left and right is null or not
                              if(!targetfound) {
                                  if(value < pointer.value) {
                                          pointer = pointer.left
                                  } else if (value >= pointer.value) {
                                          pointer = pointer.right
                                  }
                              }
            }
        }
        
        //If found, find the lowest number on the right side
              let parent
        if(targetfound) {
                      if(target.right) {
                          pointer = target.right;
                      } else if(target.left) {
                          pointer = target.left;
                          lowestFound = true
                          lowest = pointer
                      } else {
                          lowestFound = true
                          lowest = pointer
                      }
            
            while(!lowestFound) {
                if(pointer.left === null && pointer.right === null) {
                    lowestFound = true
                    lowest = pointer
                } else {
                    if(pointer.left) {
                                              parent = pointer
                        pointer = pointer.left
                    } else {
                                              parent = pointer
                        pointer = pointer.right
                    }
                }
            }
        }
          
          //Once lowest is found, delete target, and add lowest in its place
          let reshuffled = false
          let newTargetVal = lowest.value
          let shuffleVal
          if(lowestFound) {
                  //check all children on the right
                  pointer = lowest
                  lowest = null
                  while(!reshuffled) {
                      if(pointer.left === null && pointer.right === null) {
                          console.log("RESHUFF")
                          console.log("REMOVED: ", pointer)
                          pointer = null
                          console.log("AFTER POINTER CHANGED", pointer)
                          console.log("lowest: ", lowest)
                          reshuffled = true
                          console.log("Parent!!:: ", parent)
                          if(parent.left) {
                              parent.left = null
                          }
                      } else {
                          console.log("HAS CHILD: ", pointer)
                          if(pointer.right) {
                              shuffleVal = pointer.right.value
                              pointer.right.value = null
                              pointer.value = shuffleVal
                              parent = pointer
                              pointer = pointer.right
                          } else if (pointer.left) {
                              shuffleVal = pointer.left.value
                              pointer.left.value = null
                              pointer.value = shuffleVal
                              parent = pointer
                              pointer = pointer.left
                          }
                      }
                  }
              target.value = newTargetVal
                  
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