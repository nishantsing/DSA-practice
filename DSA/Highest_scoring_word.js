function high(x){
  let arr = x.split(' ')
  let max = 0
  let maxword = ''
  let sum = 0
  
  for(let i =0;i<arr.length;i++){
      let sum = 0
    let word = arr[i]
    for(let i =0 ;i<word.length;i++){
      sum+=word.charCodeAt(i) - 96
    }
    console.log(sum);
    if(sum>max){
      max = sum
      maxword = word
    } 
    
  }
  return maxword
}

console.log(high('what time are we climbing up the volcano')); 



//M2. function high(x){
//transform the input string into array & define a string of alphabetical latin characters
// var arr = x.split(' ');
// var str = 'abcdefghijklmnopqrstuvwxyz';
//Iterate through the array with input words to find the one with the greatest sum
// var newArr = arr.map(function (word) {
//     var sum = 0;
//     for (var i = 0; i < word.length; i++) {
//         sum += str.indexOf(word[i]);
//     }
//     return sum;
// });
//Return the word with the greatest sum
// return arr[newArr.indexOf(Math.max(...newArr))];
// }




//M3. function high(s){
// let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
// return s.split(' ')[as.indexOf(Math.max(...as))];
// }

//M4. const { compose, reduce, split } = require('ramda');

// const score = compose(
//     reduce((r, v) => r + v.charCodeAt() - 96, 0),
//     split('')
// );

// const high = compose(
//     reduce((r, v) => score(v) > score(r) ? v : r, ''),
//     split(' ')
// );

//M5. function high(words) {

// const alpha = ' abcdefghijklmnopqrstuvwxyz';
// const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

// return words
//     .split(' ')
//     .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
//     .sort((a, b) => a.score - b.score || b.pos - a.pos)
//     .pop()
//     .word;
    
// }