var isSquare = function (n) {

    return Math.sqrt(n) % 1 === 0;
}


console.log(isSquare(25));



//M1. const isSquare = n => Number.isInteger(Math.sqrt(n));