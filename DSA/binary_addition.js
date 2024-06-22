function addBinary(a, b) {
    return (a + b).toString(2)
}

console.log(addBinary(2,3));

//M1. function addBinary(a,b) {
// var c = a + b;
// var res = '';
// while (c >= 1) {
//     var res = c % 2 + res;
//     c = Math.floor(c / 2);
// }
// return res;
// }