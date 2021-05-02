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
                if(pointer === null) {
                    finished = true;
                } else if(value === pointer.value) {
                    finished = true;
                    targetfound = true;
                    target = pointer;
                } else if (value === pointer.left) {
                    finished = true;
                    targetfound = true;
                    pointer = pointer.left
                    target = pointer;
                } else if (value === pointer.right) {
                    finished = true;
                    targetfound = true;
                    pointer = pointer.right
                    target = pointer;
                } else {
                    //Not found, so check where to move pointer
                    //check if left and right is null or not
                    if(value < pointer.value) {
                        pointer = pointer.left
                    } else if (value >= pointer.value) {
                        pointer = pointer.right
                    }
                }
            }
        }
        
        //If found, find the lowest number on the right side
        if(targetfound === true) {
                      if(target.right) {
                          pointer = target.right;
                      } else if(target.left) {
                          pointer = target.left;
                      } else {
                          lowestFound = true
                          target = pointer
                      }
            
            while(!lowestFound) {
                if(pointer.left === null && pointer.right === null) {
                    lowestFound = true
                    lowest = pointer
                } else {
                    if(pointer.left) {
                        pointer = pointer.left
                    } else {
                        pointer = pointer.right
                    }
                }
            }
        }
          
          //Once lowest is found, delete target, and add lowest in its place
          if(lowestFound === true) {
              if(target.value !== lowest.value) {
                  //insert lowest in place of target
                  target.value = lowest.value
                  //delete target
                  lowest = null
              } else {
                  target = null
              }
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