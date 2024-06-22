function getDivisorsCnt(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) count++
    }
    return count

    // todo
}

console.log(getDivisorsCnt(15));

//M1. 
// function getDivisorsCnt(n) {
//     var num = 0;
//     if (n == 1) return 1;
//     if (n % Math.sqrt(n) == 0) num++;
//     for (var i = 1; i < Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             num += 2;
//         }
//     }
//     return num;
// }

//M2. 
// const getDivisorsCnt = n =>
//     [...Array(n / 2 ^ 0)].reduce((pre, _, idx) => n % ++idx ? pre : ++pre, 1);