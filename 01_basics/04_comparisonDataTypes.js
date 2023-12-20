// console.log(2>1);
// console.log(2==1);
// These are obvious comparisons (will be answered in boolean)

// Real problem starts when we compare different datatypes

console.log("2">1); // JS automatically converted 2 in number

//PROBLEMATIC COMPARISON

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/* The reason is that an equality check == and comparisons <>>= <= works differently.
Comparison convert null to a number, trating it as 0.
That's why null >= is true and null> 0 is false.*/

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // flase

// BETTER TO AVOID NULL AND UNDEFINED COMPARISON.
// Note: comparison and == check both works differently.

//STRICT CHECK "===" Not only checks vaue but also datatype.

console.log("2" == 2); // ture
console.log("2" === 2); // false cause they are two different datatypes.


