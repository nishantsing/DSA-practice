// Mr.Scrooge has a sum of money 'P' that he wants to invest.Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly.After paying taxes 'T' for the year the new sum is re - invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

// Let P be the Principal = 1000.00
// Let I be the Interest Rate = 0.05
// Let T be the Tax Rate = 0.18
// Let D be the Desired Sum = 1100.00


// After 1st Year-- >
//     P = 1041.00
// After 2nd Year-- >
//     P = 1083.86
// After 3rd Year-- >
//     P = 1128.30


function calculateYears(principal, interest, tax, desired) {

    let counter = 0
    while (principal < desired) {
        counter++
        let prIn = principal * interest
        principal += prIn - (prIn * tax)
    }
    return counter

}

console.log(calculateYears(1000, 0.01625, 0.18, 1200));

//M1. 
// function calculateYears(principal, interest, tax, desired) {
//     return Math.ceil(
//         Math.log(desired / principal) /
//         Math.log(1 + interest * (1 - tax))
//     );
// }

//M2.
// function calculateYears(principal, interest, tax, desired) {
//     // your code
//     var years = 0;
//     while (principal < desired) {
//         principal += (principal * interest) * (1 - tax);
//         years++;
//     }
//     return years;
// }

//M3.
// function calculateYears(P, I, T, D) { return Math.ceil(Math.log(D / P) / Math.log1p(I * (1 - T))); }

//M4.
// function calculateYears(principal, interest, tax, desired) {
//     let years = 0;
//     while (principal < desired) {
//         years++;
//         principal = getYearEndPrincipal(principal, interest, tax);
//     }

//     return years;
// }

// function getYearEndPrincipal(principal, interest, tax) {
//     const preTaxPrincipal = principal + (principal * interest);
//     const taxOwed = (preTaxPrincipal - principal) * tax;
//     return preTaxPrincipal - taxOwed;
// }

