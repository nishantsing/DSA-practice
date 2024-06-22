// In this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

//Example
// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]


function filter_list(l) {
    const list = []
    for (const ele of l) {
        if (typeof ele === 'number')
            list.push(ele)
    }
    return list
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

//M1. 
// function filter_list(l) {
//     return l.filter(function (v) { return typeof v == 'number' })
// }

//M2.
// function filter_list(l) {
//     return l.filter(v => typeof v == "number")
// }

//M3. 
// function filter_list(l) {
//     return l.filter(e => Number.isInteger(e));
// }

//M4.
// function filter_list(l) {
//     return l.filter(Number.isInteger);
// }