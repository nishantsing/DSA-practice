function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let nums = [2, 3, 4, 5, 7, 5, 7, 8, 12];
const yay = linearSearch(nums, 12);
console.log(yay);
