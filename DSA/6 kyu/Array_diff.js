// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

//     arrayDiff([1, 2], [1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]


function arrayDiff(a, b) {
    if (b.length === 0) return a

    const arr = []
    for (const ele of a) {
        let count = 0
        for (const li of b) {
            if (ele === li) {
                count++
            }
        }
        if (count === 0) {
            arr.push(ele)
        }
    }
    return arr
}


console.log(arrayDiff([3, 4], [3]));

//M1.
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }


//M2.
// function array_diff(a, b) {
//     return a.filter(function (x) { return b.indexOf(x) == -1; });
// }

//M3.
// function array_diff(a, b) {
//     b = new Set(b)
//     return a.filter(v => !b.has(v))
// }

//M4.
// function array_diff(a, b) {

//     var arr = new Array();

//     for (var i = 0; i < a.length; i++) {
//         if (b.indexOf(a[i]) < 0) {
//             arr.push(a[i]);
//         }
//     }

//     return arr;
// }

//M5. 
// array_diff = require("lodash").difference;