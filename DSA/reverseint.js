
const n = parseInt(prompt("Enter Number to be reversed"))

alert(reverseInt(n))
function reverseInt(n){
   const reversed = n.toString().split('').reverse().join('')
//    if(n<0){
//        return parseInt(reversed)*-1;
//    }
   return parseInt(reversed) * Math.sign(n);
}