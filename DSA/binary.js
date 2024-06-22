const binaryArrayToNumber = arr => {

    var arr_reverse = arr.reverse()
    var binary = 0
    for(var i =0 ; i<arr.length ;i++){
        binary += (arr_reverse[i]*(2**i))
    }
    return binary
}





//M1. const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([1, 0, 0, 0])); 