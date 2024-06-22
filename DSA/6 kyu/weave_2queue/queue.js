class Queue{
    constructor(){
        this.arr = []
        this.length = 0
    }

    add(num){
        this.arr.unshift(num)
        this.length++
    }

    remove(){
        this.length--
        return this.arr.pop()
    
    }

    peek(){
        return this.arr[this.arr.length - 1]
    }
}

module.exports = Queue