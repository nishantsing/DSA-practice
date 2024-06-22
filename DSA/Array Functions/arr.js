let arr = [2,4,6,8];

//using curly braces in arrow function u need to add return statement
let isEven = (element)=>{
    return element % 2 === 0
}

//checks for every element in array to satisfy a condition.
let result = arr.every(isEven)

// let result = arr.every((ele)=> element % 2 === 0)

console.log(result);