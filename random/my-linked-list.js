class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let pointer = this.head

        while(pointer.next !== null) {
            pointer = pointer.next
        }

        pointer.next = {
            value: value,
            next: null
        }
        this.tail = pointer.next
    }
}

let myList = new LinkedList
console.log(myList)
myList.append(1)
myList.append(10)
console.log(myList)