//1. Array Destructuring (Position Based)

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const number = ['1', '2', '3', '4', '5', '6']

// const a = alphabet[0]
// const b = alphabet[1]


//destructuring
// const [a, b] = alphabet
// const [a, , c] = alphabet

 //spread operator to get rest of the characters

 
const [a, , c, ...rest] = alphabet

//combining arrays
// const newArray = alphabet.concat(number)
const newArray = [...alphabet, ...number]

// console.log(newArray);

// console.log(a, c);
// console.log(rest);







//2. Function Destructuring
function sumAndMultiply(a, b) {
    // return [a+b, a*b , a/b]
    return [a+b, a*b]
}

// const array = sumAndMultiply(2, 3)
const [sum, multiply , division = 'No division'] = sumAndMultiply(2, 3)
// console.log(array);

// console.log(sum);
// console.log(multiply);
// console.log(division);






//3. Object Destructuring (Name Based)

const personOne = {
    name:'Nishant',
    age:24,
    address:{
        city:'Pune',
        state:'Maharashtra'
    }
}
const personTwo = {
    name:'Yash',
    age:25,
    address:{
        city:'Jalgaon',
        state:'MH'
    }
    // favoriteFood:'Watermelon'
}

// const { name, age} = personTwo

//If you want to change name of variable
// const { name:firstName = 'john', age, favoriteFood = 'Rice' } = personTwo


//Using Spread Operator for destructuring
// const {name:firstName, ...restObj} = personTwo 
const {name:firstName,address:{city}} = personTwo 


// console.log(firstName);
// console.log(city);
// console.log(restObj);
// console.log(age);
// console.log(favoriteFood);
// console.log(name);
// console.log(age);

//Combining Two objects with overiting Two on One
// const personThree = {...personOne, ...personTwo}
// console.log(personThree);


//Using inside Functions

// function printUser(user){
//     // console.log(user);
//     console.log(`Name is: ${user.name}, Age is ${user.age}`);
// }

//Destructuring way very important

function printUser({name, age, favoriteFood = 'Watermelon'}){
    console.log(`Name is: ${name}, Age is ${age}. Food is ${favoriteFood}`);

}

printUser(personOne)