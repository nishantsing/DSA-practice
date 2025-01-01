function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// for each fn we invoke 2 more and it grows exponentially. -> O(2^n)
