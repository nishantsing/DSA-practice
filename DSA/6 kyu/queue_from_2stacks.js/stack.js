class Stack {
    constructor() {
        this.arr = []
      
    }

    push(record) {
        this.arr.push(record)
       
    }

    pop() {
        return this.arr.pop()
    }

    peek() {
        return this.arr[this.arr.length - 1]
    }
}


module.exports = Stack


