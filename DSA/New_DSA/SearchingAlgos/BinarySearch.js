// 1. Works on sorted array.
// find mid of array check if its greater than or less than the target

// M1. Recursion
function binarySearchRec(arr, target, left = 0, right = arr.length - 1) {
    // arr.push(1000); -> arr is passed by reference as its non-primitive type so changes here will change the original array passed.
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearchRec(arr, target, left, mid - 1);
    return binarySearchRec(arr, target, mid + 1, right);
}

// M2. Loop
// function binarySearchLoop(arr, target) {
//     let left = 0;
//     let right = arr.length;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) return arr[mid];
//         if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return -1;
// }

const nums = [12, 16, 30, 50, 100, 104, 200];
const result = binarySearchRec(nums, 104);

console.log(result);

// O(logn)
