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

        if(this.head===null) {
            this.head.value = value
            this.length++
        } else {
            let pointer = this.tail
            pointer.next = newNode
            this.tail = newNode
            this.length++
        }


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

    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        let pointer = this.head
        let count = 0
        while(count+1 !== index) {
            pointer = pointer.next
            count++
        }

        let temp = pointer.next
        pointer.next = newNode
        newNode.next = temp
    }

    remove(index) {
        let pointer = this.head
        let count = 0
        while(count+1 !== index) {
            pointer = pointer.next
            count++
        }

        let temp = pointer.next
        pointer.next = pointer.next.next
        temp = null
    }

    reverse() {
        let rightPointer
        let midPointer
        let leftPointer
        rightPointer = this.head.next
        midPointer = this.head
        this.tail = this.head
        this.tail.next = null

        while(rightPointer.next!==null){
            leftPointer = midPointer
            midPointer = rightPointer
            rightPointer=rightPointer.next
            midPointer.next = leftPointer
        }

        this.head = rightPointer
        rightPointer.next = midPointer
    }

    printList(){
        let result = []
        let pointer = this.head
        while(pointer!==null){
            result.push(pointer.value)
            pointer = pointer.next
        }
        return result
    }
}

let myList = new LinkedList(2)
console.log(myList.printList())
myList.append(1)

console.log(myList.printList())
myList.append(10)

console.log(myList.printList())

myList.prepend(100)

console.log(myList.printList())

myList.insert(3, 200)

console.log(myList.printList())
myList.reverse()
console.log(myList.printList())

