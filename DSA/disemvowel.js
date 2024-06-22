let str = "This is a string."
let newstr = ''
const disem = function disemvowel(str){
    let arr = str.toLowerCase().split("")
    for(ele in arr){
        if(ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u" ||
  ele === "A" || ele === "E" || ele === "I" || ele === "O" || ele === "U"){
           newstr += ''
        }else{
            newstr += ele;
        }
        
    }
return newstr;
}

console.log(disem(str));  




//M2. 
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// }




// M3.
// function disemvowel(str) {
//   return (str || "").replace(/[aeiou]/gi, "");
// }




//M4.
// const vowels = "aeiou";

// function disemvowel(str) {
//   return str
//     .split("")
//     .filter((letter) => !vowels.includes(letter.toLowerCase()))
//     .join("");
// }