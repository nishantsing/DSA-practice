// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// solution("camelCasing") == "camel Casing"

// complete the function

function solution(string) {
    let camel = ''
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            camel += string[i]
        } else {
            camel += " "
            camel += string[i]
        }
    }
    return camel
}

console.log(solution('camelCasingTest'));

//M1.
// function solution(string) {
//     return (string.replace(/([A-Z])/g, ' $1'));

// }

//M2.
// function solution(string) {
//     return string.replace(/([a-z])([A-Z])/g, "$1 $2");
// }

//M3.
// function solution(text) {
//     return text.split(/(?=[A-Z])/).join(' ');
// }
