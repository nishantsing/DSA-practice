class Node{
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}
// const node1 = new Node(24)

// const node2 = new Node(25)
// node1.next = node2
// const node3 = new Node(26)
// node2.next = node3
// node2.next.next=null

// console.log(node1);

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head) 
    }
    size(){
        let counter = 0
        let node = this.head
        while(node){
            counter++
            node=node.next
        }
        return counter
    }
    getFirst(){
        return this.head
    }
    getLast(){
        if(!this.head) return null
        let node= this.head
        while(node){
            if(!node.next){
                return node
            }
            node = node.next
        }
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if(!this.head) return
        this.head = this.head.next 
        return list
    }
    removeLast(){
        if(!this.head) return
        
        if(!this.head.next){
            this.head = null
            return
        }

        let previous = this.head
        let node = this.head.next
        while(node.next){
            previous = node
            node = node.next
        }
        previous.next = null
        return list
    }
    insertLast(data){
        const last = this.getLast()
        if(last){
            last.next = new Node(data)
            // return list
        }else{
            this.head = new Node(data)
            // return list
        }
        
    }
    //Only Below three are important as all the above can be implemented using below three fns.
    getAt(index){
        // if(!this.head) return null
        let counter =0 
        let node = this.head
        while(node){
            if(counter === index){
                return node
            }
            counter++
            node = node.next
        }
        return null

    }
    removeAt(index){
        if(!this.head) return
        if(index === 0) {
            this.head = this.head.next
            return 
        }
        const previous = this.getAt(index - 1)
        if(!previous || !previous.next) return 

        previous.next = previous.next.next

    }
    insertAt(data, index){
        if(!this.head) {
            this.head  = new Node(data)
            return
        }
        if(index===0){
            this.head = new Node(data, this.head)
            return
        }

        const previous = this.getAt(index-1) || this.getLast()
        
        const node = new Node(data, previous.next)
        previous.next = node



    }
    //fn inside fn
    forEach(fn){
        let node = this.head
        let counter = 0
        while(node){
            fn(node, counter)
            node = node.next
            counter++
        }
    }
    //fn using iterator
    *[Symbol.iterator](){
        let node = this.head
        while(node){
            yield node;
            node = node.next
        }
    }

    //finding midpt without using counter and iterating once.

}
function midpoint(){
    let slow = list.getFirst()
    let fast = list.getFirst()

    while(fast.next && fast.next.next){
        slow=slow.next
        fast = fast.next.next
    }

    return slow
}
const nodeOne = new Node(5)
const list = new LinkedList()
list.head = nodeOne
list.insertFirst(15)
list.insertFirst(25)
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
// console.log(list.removeLast());
// console.log(list.removeLast());
list.insertLast(2)
// console.log(list);
console.log(list.getAt(1));

//forEach Loop 
list.forEach((node,index)=>{
console.log(node.data, index);
}) 

//for...of Loop
for(let node of list){
    console.log(node.data +=10);
}
// console.log(list.removeFirst())
// console.log(list.clear());
// console.log(list);


//midpt
console.log(midpoint(list));   

