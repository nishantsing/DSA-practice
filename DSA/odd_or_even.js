function oddOrEven(array) {
    var sum = 0;
    for (ele of array) {
        sum += ele
    }
    // if (sum % 2 === 0) return 'even';

    // return sum%2===0 && 'even'

    return sum%2=== 0 ? 'even' : 'odd'
    
    // return 'odd'

    
}

console.log(oddOrEven([0, 0, 4]));  


//M1. function oddOrEven(arr) {
// return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
// }



//M2. const oddOrEven = array=>
// array.filter(val => val & 1).length & 1 ? `odd` : `even`;