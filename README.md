# DSA-practice

- Start solving problems topic wise(DS) with easy
- Leetcode
- leetcode explained extension for video solutions
- leetcode forcer which force to do one leetcode question in a day, try to create the extension for neetcode which also help your development skills.
- CodeWars
- [NeetCode](https://neetcode.io/)

- [Some useful links](https://whimsical.com/leetcodehelper-YaLGhtNuqXB3ros8VJw5zi)


- Stick to your language(loops, conditionals, functions and basic input and output)
- Common DSA and library (C++ STL, Java Collections)

- Learn System Design

- Think of brute force and then find optimal solution.(30 -60 mins) on a problem.
- Start contesting
- Codeforces very math centric(segment trees, BIT) which not asked in interviews.

- See previous questions as well for a company.

## Blogs
- [How to master DSA](https://blog.algomaster.io/p/how-i-mastered-data-structures-and-algorithms)
- [15 Patterns](https://blog.algomaster.io/p/15-leetcode-patterns)
- [One Year Plan](https://towardsdatascience.com/the-one-year-plan-for-competitive-coding-6af53f2f719c)
  
## Some Patterns

- Get good at core algorithms like (Binary Search, BFS, DFS, SLiding window, Two pointers) and understand why it works.
- To find prime number just loop till sqrt of the given number and also jump through prime numbers

- [Leetcode Resource](https://github.com/ashishps1/awesome-leetcode-resources)
- [High Level System Design](https://github.com/ashishps1/awesome-system-design-resources)
- [Low Level System Design](https://github.com/ashishps1/awesome-low-level-design)

###  Sliding Window

- try to find something specific in list in a fixed window
- substring

###  Subset

- Find all possible combinations from a given set(no repititions, repitions)
- similar to BFS
  
###  Modified Binary Search Pattern
- try to implement bisect left and bisect right from python to get good understanding of Binary Search

 
### Top k elements

- kth largest number
- use heap

### Binary tree DFS

- Finding max dept of binary tree
- recursion to implement this
- you traverse one side of the branch completely and then move on to other branch.

### Topological sort

- directed acyclic graph
- Course schedule problem
  
### Binary Tree BFS

- Explore all the branch on same level
- Queue is use

### Two pointed pattern

- used in sorted array
- Two sum problem (one pointer at the beginning and other at the end and depending upon whether the output is bigger or smaller than the required sum you move the pointers.)
- triplets that add up to 0 in sorted array.


## Some Formulas to keep in mind
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

## Creating Data Structure

[YT - WilliamFiset](https://www.youtube.com/@WilliamFiset-videos)
Book - DSA Made easy by Narsimha Karumachi,Cracking the Coding Interview by gayle laakmann

### Arrays

### Strings

### Binary Tree


### Linked List


### Stacks

### Queues

### Hash Map


## Sorting, Searching and Recusrsion Algorithms


## Other Algorithms


## DSA Questions

### prime number

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

### Square root

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

### palindrome


### Number of characters in a string

