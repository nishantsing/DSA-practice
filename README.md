# DSA-practice

## Some methodologies

- To find prime number just loop till sqrt of the given number and also jump through prime numbers

###  Sliding Window

#### Some Formulas to keep in mind
- Sum of first n natural numbers [n(n+1)]/2
- Sum of first even n natural numbers [n(n+1)]
- Sum of first odd n natural numbers n*n
// Formula to find sum of AP Sn= n/2*(2a+(n−1)d)
// Formula to find last term of AP l=a+(n−1)d

/*Sn is derived by taking the average of the first and last terms, 
 and multiplying by the number of terms n.*/
- Sum of Sum of first n natural numbers [n(n+1)(n+2)]/6
- Sum of squares of first n natural numbers	[n(n+1)(2n+1)] / 6
- Sum of squares of first n even numbers	[2n(n + 1)(2n + 1)] / 3
- Sum of squares of first n odd numbers	[n(2n+1)(2n-1)] / 3

#### Creating Data Structure


#### Sorting and Searching Algorithms


#### Other Algorithms


#### DSA Questions

###### prime number

- Basic
```js
let i=2;
for(i=2;i<=n-1;i++){
  if(n%i==0) break;
}
if(i==n)
  "Prime";
else
  "Not a prime";

```
- Adcance
```js

let i =2;
for(i=2;i<=sqrt(n);i++){
  if(n%i==0) break;
}
if(i>sqrt(n))
  "Prime";
else
  "Not a prime";


```
- More advancements(removing all checks for number divisible by 2)
  
1- If number is 0 or 1 return false;
2- else if number is 2, return true;
3- else if number is divisible by 2, return false
4- else check from 3 to sqrt(number) and increment counter each time by 2, hence checking if number is divisible by 3, 5, 7, 9, etc....

###### Square root

```js
function sqrt(x)
{
     
    // Base cases
    if (x == 0 || x == 1) return x;
 
    // Starting from 1, try all
    // numbers until i*i is
    // greater than or equal to x.
    let i = 1;
    let result = 1;
     
    while (result <= x)
    {
        i++;
        result = i * i;
    }
    return i - 1;
}

```

###### palindrome


###### Number of characters in a string

