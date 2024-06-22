function count(string) {
    // The function code should be here
    const charMap = {}
    for (let char of string) {
        console.log(charMap[char]);
        charMap[char] = charMap[char]+1 || 1
        // charMap[char] = ++charMap[char] || 1 This also works
        //charMap[char] = charMap[char]++ || 1 This cannot be used why?
        console.log(charMap[char]);


    }
    return charMap;
}

console.log(count('hello'));

//M1. 
// function count(string) {
//     var count = {};
//     string.split('').forEach(function (s) {
//         count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
// }


//M2. 
// function count(string) {
//     return string.split('').reduce(function (counts, char) {
//         counts[char] = (counts[char] || 0) + 1;
//         return counts;
//     }, {});
// }


//M3. 
// function count(string) {
//     var result = {};

//     for (let i = 0; i < string.length; i++) {
//         if (result.hasOwnProperty(string[i])) {
//             result[string[i]] += 1;
//         } else {
//             result[string[i]] = 1;
//         }
//     }

//     return result;
// }