class Queue{
    constructor(){
        this.arr = new Array()
        this.length=0
    }
    add(num){
        this.arr.unshift(num) // Not the best way because shifting takes O(n) time in array while adding something in queue must be O(1).
        this.length++
    }
    remove(){
        let num = this.arr.pop()
        console.log(num);
        this.length--
    }
}


let q =new Queue();
q.add(23)
q.add(52)
q.add(205)
console.log(q.arr);
console.log(q.length); 
q.remove()
console.log(q.length);
console.log(q.arr);


