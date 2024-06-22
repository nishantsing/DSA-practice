class Node{
    constructor(data){
        this.data =  data
        this.left = null
        this.right = null
    }

    insert(data){
        if(data < this.data && this.left){
            this.left.insert(data)
        }else if(data < this.data){
            this.left = new Node(data) 
        } else if(data > this.data && this.right){
            this.right.insert(data)
        }else if(data > this.data){
             this.right = new Node(data)
        }
    }

    contains(data){
        console.log(this.data);
        if(this.data === data){
            return this
        }
        if(this.data < data && this.right){
            return this.right.contains(data)
        }else if(this.data > data && this.left){
            return this.left.contains(data)
        }

        return null
    }

    validate(node, min = null, max = null ){
        if(max !== null && node.data > max){
            return false;
        }

        if(min!==null && node.data<min){
            return false;
        }

        if(node.left && !validate(node.left, min ,node.data)){
            return false
        }

        if(node.right && !validate(node.right, node.data, max)){
            return false
        }
        
        return true
    }
}


const bst = new Node(20)
bst.insert(25)
bst.insert(23)
bst.insert(18)
bst.insert(-1)
bst.insert(5)
bst.insert(15)
bst.insert(26)
bst.insert(30)
// console.log(bst);

console.log(bst.contains(30)); 
