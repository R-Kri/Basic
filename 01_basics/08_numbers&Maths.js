const score = 400 //generally JS automatically detect type as number
console.log(score);
// But we can also set manually
const balance = new Number(100) // It'll set the datatype to number.
console.log(balance);

console.log(balance.toString().length); // After converting into strings we can use more additional properties which may be not present in number.
console.log(balance.toFixed(2)); // Output 100.00 It will show two numbers after decimal point. Generally used in payment systems

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // Returns precise value upto 3 digits. Output: 23.9

const hundreds = 1000000

console.log(hundreds.toLocaleString());//The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number. Output: 1,000,000 (default if in U.S. English locale).

console.log(hundreds.toLocaleString('en-IN')); // Indian Locale Output:10,00,000

// ++++++++++++     MATHS       +++++++//

console.log(Math);
console.log(Math.abs(-4));//Absolute value converts -ve value into +ve. And +ve remains unchanged.
console.log(Math.round(4.6)); // returns round off number 5.
console.log(Math.ceil(4.2)); // It will return the ceiling value(upper or larger) Output:5.
console.log(Math.floor(4.9)); // It will return the floor value(Lower) Output: 4.

// There are many more methods like sqrt(),max(),min(),pow() we can use with help of math library.

// Math.random always gives random numbers between 0 to 1.
console.log(Math.random()); // This gives us different ouput between 0 and 1, values like 0.93832492, 0.244445242, 0.034222445
console.log((Math.random()*10)+1); // to avoid a 0 number like 0.0348331 we perform the operation mutiplying by 10 so that we get like 5.459489,9.54385 and even then is it is 0 like 0.0284285 then it also adds 1 so we don't get 0 in any case and minimum it should be 1.

// When we want a random number between 10 to 20.
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1) + min));