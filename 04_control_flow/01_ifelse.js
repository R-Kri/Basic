// CONTROL FLOW - Ek hi baar main pura code execute nahi hona chahiye, kuch conditions ke sath codes parts me run krna chahiye. aise kaam me aata hai control flow. 
/* Control flow in JavaScript is like giving directions to a computer. You tell it what to do step by step. You can make it decide between options with `if` statements, repeat tasks with loops, and organize code into functions for easier management. */

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // must show error cause power variable is not defined outside he block.


// const balance = 1000

// E.g of implicit scope, but not recommended.
// if (balance > 500) console.log("test"),console.log("test2");

// Nesting if
/* if (balance < 500) {
     console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
 } else if (balance < 900) {
     console.log("less than 750");
    
 } else {
     console.log("less than 1200");

 } */


 // Real life usage 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && loggedInFromEmail) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}