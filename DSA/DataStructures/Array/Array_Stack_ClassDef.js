class Stack{
    constructor(){
        this.arr = []
        this.length = 0
    }

    push(record){
        this.arr.push(record)
        this.length++
    }

    pop(){
        return this.arr.pop()
    }

    peek(){
        return this.arr[this.arr.length - 1]
    }

    print(){
        return this.arr
    }

    static print(stack){
        return stack
    }
}
function print(stac){
    console.log(stac);
}

const st = new Stack()
st.push(1)
st.push(2)
console.log(st.print()); //fn print using object
console.log(Stack.print(st));// fn print using class(static method)
print(st)// fn print outside the class
console.log(st.pop()); 
console.log(st.pop()); 

