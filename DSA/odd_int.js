let arr = [2,2,3,4,4,5,6,5,7,7,6]

function findOdd(A) {
  for (ele of A) {
    let count = 0;
    for (element of A) {
      if (ele === element) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return ele;
    }
  }
}

console.log(findOdd(arr))





// M2. const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


// M3. function findOdd(arr) {
//   return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
// }



//M4. Try using hashing.

