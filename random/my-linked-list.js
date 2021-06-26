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
        const newNode = {
            value: value,
            next: null
        }
        let pointer = this.tail

        pointer.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head
        this.head = newNode
        this.length++
    }
}

let myList = new LinkedList
console.log(myList)
myList.append(1)
myList.append(10)

console.log(myList)

myList.prepend(100)

console.log(myList)
