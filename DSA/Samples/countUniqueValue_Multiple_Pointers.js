//Problem based on Multiple Pointers Pattern
//Must be sorted and alowed to change array
function countUniqueValues(arr){
    let count = 0
    let first = 0
    let second = 1

    while(second<arr.length){
        if(arr[first] === arr[second]){
            second++
            
        }else {
            first++
            arr[first] = arr[second]
            second++
        }
    }
    return first + 1

}
console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]))
console.log(countUniqueValues([1,1,2,7]))
console.log(countUniqueValues([1,2,4,6,6,7]))