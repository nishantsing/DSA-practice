function XO(str) {
    str = str.toLowerCase()
    let charMap = {}
    for (let st of str) {
        charMap[st] = charMap[st] + 1 || 1
    }
    if (charMap['x'] === charMap['o']) return console.log(charMap);
    return console.log(charMap);
}

XO("ooxx")
XO("xooxx")
XO("ooxXm")
// console.log(XO("xooxx"));

// M1. 
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

//M2. 
// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

//M3. 
// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }

//M4. 
// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

//M5. 
// function XO(str) {
//     return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
// }

//M6.
// function XO(str) {
//     var sum = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() == 'x') sum++;
//         if (str[i].toLowerCase() == 'o') sum--;
//     }
//     return sum == 0;
// }