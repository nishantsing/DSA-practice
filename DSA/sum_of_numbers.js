function getSum(a, b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
    return sum;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  } else {
    return a;
  }
}


//M2. const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// };

//M3. function GetSum(a, b) {
//   if (a == b) return a;
//   else if (a < b) return a + GetSum(a + 1, b);
//   else return a + GetSum(a - 1, b);
// }

//M4. function GetSum(a, b) {
//   return (Math.abs(a - b) + 1) * (a + b) / 2;
// }