function stray(numbers) {
    let charMap = {}
    for (let char of numbers) {
        charMap[char] = charMap[char] + 1 || 1
    }

    for (let key in charMap) {
        if (charMap[key] === 1) return parseInt(key)
    }

}

console.log(stray([1, 1, 2])); 

//M1.
// const stray = nums => nums.reduce((a, b) => a ^ b);

//M2.
// function stray(nums) {
//     let max = Math.max(...nums);
//     let min = Math.min(...nums);
//     return nums.filter(x => x == max).length == 1 ? max : min
// }