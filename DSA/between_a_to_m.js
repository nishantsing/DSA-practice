function printerError(s) {
    let deno = s.length
    let count = 0

    for (let i = 0; i < deno; i++) {
        if (s[i].charCodeAt() >= 110 && s[i].charCodeAt() <= 122) count++

    }
    return `${count}/${deno}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));

//M1. 
// function printerError(s) {
//     return s.match(/[^a-m]/g).length + "/" + s.length;
// }

//M2. 
// function printerError(s) {
//     // your code
//     var count = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] > "m") {
//             count++;
//         }
//     }
//     return count + "/" + s.length;
// }

//M3. 
// var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

