function descendingOrder(n) {
    return parseInt((n + "").split("").sort().reverse().join(""));
    
  
}

console.log(descendingOrder(012));  

//1. Convert Number n to string
//  n+""

//2. Convert String to Array
//  str.split("")

//3. Sorting Array in Ascending order
//  arr.sort()

//4. Reversing Array
//  arr.reverse()

//5. Converting Array to String
//  arr.join("")

//6. String to Integer
// parseInt(str, 10)


//M1.  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');

//M2.  function descendingOrder(n) {
//   return n.digits().sort().reverse().undigits();
// }

// Number.prototype.digits = function () {
//   const result = [];
//   let n = this;
//   do {
//     result.unshift(n % 10);
//     n = Math.floor(n / 10);
//   } while (n);
//   return result;
// };

// Array.prototype.undigits = function () {
//   return this.reduce((n, d) => n * 10 + d, 0);
// };



//M3. function descendingOrder(n) {
//   n = [...n.toString()];

//   return Number(
//     n
//       .sort()
//       .reverse()
//       .join(""),
//   );
// }



//Convert Number to array
// let rev = Array.from(String(n), Number);



// Convert String to Int or Float -> parseInt(), parseFloat()



// convert int to array 
    // const myNumber = 1245;
    // function numberToArray(number) {
    //   let array = number.toString().split(""); //stringify the number, then make each digit an item in an array
    //   return array.map((x) => parseInt(x)); //convert all the items back into numbers
    // }

// What if you have a nested array? That is, an array with an array inside it? Here you need to use JSON.stringify().
    // JSON.stringify(["a", [1], "b", "c"]); // '['a', [1], 'b','c']'

//Array To String
    // ["a", "b", "c"].toString(); // 'a,b,c'

    // 2. Coerce to string
        // ["a", "b", "c"] + []; // 'a,b,c'
        // ["a", "b", "c"] + ""; // 'a,b,c'

    // 3. Use .join()
        // ["a", "b", "c"].join(); // 'a,b,c' (defaults to ',' separator)
        // ["a", "b", "c"].join(""); // 'abc'
        // ["a", "b", "c"].join("-"); // 'a-b-c'