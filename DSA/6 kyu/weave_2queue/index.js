const Queue = require('./queue')

function weave(sourceOne, sourceTwo){
    const q = new Queue();

    while(sourceOne.peek() || sourceTwo.peek()){
        if(sourceOne.peek()){
            q.add(sourceOne.remove())
        }
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove())
        }
    }
    return q
}

const q1 = new Queue()
q1.add(23)
q1.add(25)
q1.add(27)
const q2 = new Queue()
q2.add(24)
q2.add(26)
console.log(weave(q1, q2)); 