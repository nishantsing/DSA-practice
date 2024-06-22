
const str = prompt("Enter the string")
const charMap = {};
alert(maxchar(str))
function maxchar(str){
    let max =0;
    let maxChar = ''
    for(let char of str){
        // if(!chars[char]){
        //     chars[char] = 1;
        // }else{
        //     chars[char]++;
        // }
        charMap[char] = charMap[char] + 1 || 1;
    }
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}