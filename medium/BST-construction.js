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
        let count = 0
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
      // Write your code here.
      let found = false;
      let pointer = this
      
      while(!found) {
          if(pointer === null) {
              return false
          } else if(value === pointer.value || pointer.left === value || pointer.right === value) {
              found = true
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
      return this;
    }
  }

  const myBST = new BST(10)


  myBST.insert(5)
  myBST.insert(11)
  myBST.insert(12)
  myBST.insert(4)
  myBST.insert(15)
  myBST.insert(6)
  console.log(myBST.left)

  console.log(myBST.contains(15))