
const str = prompt("Enter a String")
reverse(str)

function reverse(str){
    debugger;
    var result = str.split('')//convert string to chracter array
    .reduce((rev, char)=> char+rev, '');
    alert(result)
}

//M2. // function reverse(str){
//     let reversed = '';
//     // for(var i = 0; i<str.length;i++){
//     //     reversed = str[i] + reversed
        
//     // }
//     for(let character of str){
//         reversed = character + reversed;
//     }
//     alert(reversed)
// }





// M1. // function reverse(str){
//     const arr = str.split('');
//     arr.reverse();
//     alert(arr.join(''))
//     // console.log(arr.join("")); 

//     // return str
//     // .split('')
//     // .reverse()
//     // .join('');

// }
 

// module.exports = reverse;