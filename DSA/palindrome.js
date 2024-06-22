const str = prompt("Enter to Check Palindrome")
alert(palindrome(str))

function palindrome(str){
    return str.split('').every((char, i)=>{
        return char === str[str.length-i-1]
    })

}

// M1. // function palindrome(str){
//     const reversed = str.split('').reverse().join('')
//     return str === reversed
// }