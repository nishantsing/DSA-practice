const Stack = require('./stack')

class Queue{
    constructor(){
        this.st1 = new Stack()
        this.st2 = new Stack()
    }

    add(num){
        this.st1.push(num)
    }
    remove(){
        while(this.st1.peek()){
            this.st2.push(this.st1.pop())
        }
        const record =  this.st2.pop()
        while(this.st2.peek()){
            this.st1.push(this.st2.pop())
        }
        return record
    }
    peek(){
        while (this.st1.peek()) {
            this.st2.push(this.st1.pop())
        }
        const record = this.st2.peek()
        while (this.st2.peek()) {
            this.st1.push(this.st2.pop())
        }
        return record
    }
}

const q  = new Queue()
q.add(1)
q.add(2)
console.log(q.peek());
console.log(q.remove()); 
console.log(q.remove()); 