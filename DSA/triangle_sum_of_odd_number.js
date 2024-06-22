
const result = function addRow(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
    //   console.log(total)
  }
  let firstNum = 2 * total + 1;

  //   console.log(firstNum)
  let sum = 0;
  for (j = 0; j < n; j++) {
    sum += firstNum;
    firstNum += 2;
    // console.log("in loop ", sum);
  }
  return sum;
}


console.log(result(2));







//M2. function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }



// M3. let rowSumOddNumbers = (n) => n ** 3;


//M4. function rowSumOddNumbers(n) {
//   return n > 0 ? n * n * n : "Wrong Input";
// }