//Not a Specific tree...
// Its a general tree structure
//We are adding fns in Node because children array inside node is only accessible to Node Class and can be edited by Node methods.
class Node{
    constructor(data){
        this.data = data
        this.children = []
    }

    add(data){
        const node = new Node(data)
        this.children.push(node)
        return node
    }

    remove(data){
        //Filter doesn't work in place
        // this.children = this.children.filter(node=> node.data!==data)
        this.children = this.children.filter(node=>{
            return node.data !== data
        })
    }
}
//If we add insert in tree, which node we want to add this node. Its somewhat difficult to work with.
class Tree{
    constructor(){
        this.root = null
    }

    traverseBF(fn){
        const arr = [this.root]
        while(arr.length){
            const node = arr.shift()
            arr.push(...node.children)
            // for(let child of node.children){
            //     arr.push(child)
            // }
            fn(node)
        }
    } 

    // traverseDF(){
    //     const arr = [this.root]
    //     while(arr.length){
    //         const node = arr.shift()
    //         arr.unshift(...node.children)
    //         console.log(node); 
    //     }
        
    // }
    traverseDF(fn){
        const arr = [this.root]
        while(arr.length){
            const node = arr.shift()
            arr.unshift(...node.children)
            fn(node)
        }
        
    }
}



/*                            CEO
              CTO             CMO            COO 
      VP      VP      VP                     Prodct
      Eng.   Infr.    Design                 Man.
      
*/


const node = new Node('CEO')

const cto = node.add('CTO')
cto.add('VP Engineer')
cto.add('VP Infrastructure')
cto.add('VP Design')


node.add('CMO')
const coo = node.add('COO')
coo.add('Product Manager')

// 'CTO'.add('VP Engineering')
// 'CTO'.add('VP Infrastructure')
// 'CTO'.add('VP Design')
// 'COO'.add('Product Manager')

const tree = new Tree()
tree.root = node

// tree.traverseBF(node=>{
//     console.log(node);
// })

// tree.traverseDF(); 

tree.traverseDF(node=>{
    console.log(node);
})

