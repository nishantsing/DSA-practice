function sumTwoSmallestNumbers(numbers) {
  let sort = numbers.sort((a,b)=> a - b);
  console.log(sort);
  let smallest = sort[0]
  let secondSmallest = sort[1]

  return smallest + secondSmallest;

}


console.log(sumTwoSmallestNumbers([10,2,3,7]));

//By Defaut sort array fn sort as a string inplace and default is ascending
//To sort as integer add compare function parameter asargument
    // const sort = (arr) => arr.sort((a, b) => a - b); depending on return(+,-,0) it sorts array.



//M2. function sumTwoSmallestNumbers(numbers) {
//   var [a, b] = numbers.sort((a, b) => a - b);
//   return a + b;
// }



//M3. const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);



//M4.function sumTwoSmallestNumbers(numbers) {
//   var lowest = numbers.sort(function (a, b) {
//     return b - a;
//   }).slice(-2);
//   return lowest.pop() + lowest.pop();
// }





//M5. function sumTwoSmallestNumbers(numbers) {
//   const [a, b] = [...numbers].filter((e) => e >= 0).sort((a, b) => a - b);

//   return a + b;
// }