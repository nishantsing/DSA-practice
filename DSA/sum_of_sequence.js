const sequenceSum = (begin, end, step) => {
    var total = 0;

    if (begin > end) {
        return 0;
    }

    for (i = begin; i <= end; i += step) {
        total += i;
    }

    return total;
};

console.log(sequenceSum(2,2,2));



//M1. const sequenceSum = (begin, end, step) => {
// if (begin > end) {
//     return 0;
// }
// return begin + sequenceSum(begin + step, end, step);
// };




//M2. sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);