// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    return null;
  }// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let pointer = linkedList
	while(pointer.next !== null) {
		if(pointer.value === pointer.next.value) {
			temp = pointer.next
			pointer.next = pointer.next.next
			temp = null
		} else {
			pointer = pointer.next
		}
	}
	
  return linkedList;
}