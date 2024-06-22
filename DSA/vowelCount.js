function getCount(str) {
    var vowelsCount = 0;
    var arr = str.split('')
    for (ele of arr) {
        if (ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele === 'u') {
            vowelsCount++;
        }
    }

    // enter your majic here

    return vowelsCount;
}


console.log(getCount('abbracadabra'));



//M1. function getCount(str) {
// return (str.match(/[aeiou]/ig) || []).length;
// }




//M2. function getCount(str) {
// return str.replace(/[^aeiou]/gi, '').length;
// }



//M3. function getCount(str) {
// return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }