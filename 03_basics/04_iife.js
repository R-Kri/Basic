// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){ //This is named iife cause it has name chai
    console.log(`DB CONNECTED`);
})(); // use semicolon to end // => this will immediately execute the function.
// Global scope ke pollution se problem hoti hai kaii bar toh global scope ke variables ya declaration hi uske pollution ko hatane ke liye humne iife ka use kiya.

// We can also perform it with the help of arrow function
(() => { // unnamed iife
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`My name is ${name}`);
})('Thay');