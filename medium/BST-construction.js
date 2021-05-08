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
        let needToDelete = true
        if(targetfound) {
                      if(target.right) {
                          direction = "right"
                          parent = pointer
                          pointer = target.right;
                      } else if(target.left) {
                          direction==="left"
                          parent = pointer
                          pointer = target.left;
                          lowestFound = true
                          lowest = pointer
                      } else {
                          console.log("VAL: :", value)
                          console.log("NO CHILDREN")
                          target = null
                          pointer = null
                          lowest = null
                          lowestFound = true
                          needToDelete = false
                          console.log("THIS IS THE PARENT: ", parent)
                          if(direction==="left" && parent.left) {
                              parent.left = null
                              console.log("DIRECTION LEFT")
                          } else if(direction === "right" && parent.right) {
                              parent.right = null
                              console.log("DIRECTION RIGHT")
                          }
                      }
            
            while(!lowestFound) {
                if(pointer.left === null && pointer.right === null) {
                    lowestFound = true
                    lowest = pointer
                } else {
                    if(pointer.left) {
                                              parent = pointer
                                              direction = "left"
                        pointer = pointer.left
                    } else {
                                              parent = pointer
                                              direction = "right"
                        pointer = pointer.right
                    }
                }
            }
        }
          
          //Once lowest is found, delete target, and add lowest in its place
          
          if(needToDelete === true) {
                  let newTargetVal = lowest.value
                  console.log("PARENT: ", parent)
                  console.log("newTargetVal", newTargetVal)
                  if(lowest.left || lowest.right) {
                      console.log("LOWEST FOUND KIDS!!", lowest)
                      lowest.remove(newTargetVal)
                  }
  
                  console.log("DIRECTION: ", direction)
                  if(direction==="left" && parent.left) {
                      parent.left = null
                      console.log("DIRECTION LEFT")
                  } else if(direction === "right" && parent.right) {
                      parent.right = null
                      console.log("DIRECTION RIGHT")
                  }
                  pointer = null
                  lowest = null
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