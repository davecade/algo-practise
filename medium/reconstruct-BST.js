// This is an input class. Do not edit.
class BST {
        constructor(value, left = null, right = null) {
          this.value = value;
          this.left = left;
          this.right = right;
        }
      }
      
      function reconstructBst(preOrderTraversalValues) {
        // Write your code here.
              let array = preOrderTraversalValues
              let root = new BST(array[0])
              let idx = 1
      
              while(idx<array.length) {
                      reconstructHelper(array[idx], root)
                      idx++
              }
              
        return root;
      }
      
      
      function reconstructHelper(value, root){
        let finished = false;
        let pointer = root

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
      }