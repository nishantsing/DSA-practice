
// JavaScript code is always blocking, that is because it runs on a single thread.The advantages of the asynchronous style of coding in Javascript is that external operations like I / O do not require blocking that thread.The callback that processes the response from the I / O is still blocking though and no other JavaScript can run concurrently.
// * Unless you consider running multiple processes(or WebWorkers in a browser context).



let a =1;
let b =2;

setTimeout(() => {
    console.log(a);
}, 0);

//That is because the callback for the setTimeout won't execute until the main thread has nothing left to do (after logging 'b').


// fetch('/').then(()=>{
//     console.log('Fetch');
// }).catch((err)=>{
//     console.log(err);
// })

a =10;

console.log(a);
console.log(b);

// callback function , promises or async / await are not asynchronous, all it does is change the order of execution.