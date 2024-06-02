/*
An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is executed immediately after it is defined. This technique is used to create a private scope, which helps to avoid polluting the global scope and allows for encapsulation of variables and functions.

In the context of JavaScript, "polluting the global scope" refers to the practice of creating variables or functions in the global scope that can potentially conflict with other code. This can lead to unexpected behavior and bugs, especially in larger applications or when combining multiple scripts from different sources.

Why Use IIFE?
Avoiding Global Scope Pollution: Variables and functions defined inside an IIFE are not accessible outside of it, preventing potential conflicts with other code.
Data Privacy: IIFEs create a private scope for variables, making them inaccessible from outside the function.
Initialization Code: IIFEs can run setup code immediately without leaving variables or functions in the global scope.
Syntax
The basic syntax of an IIFE is as follows:

(function() {
    // code to be executed immediately
})();

Or using arrow functions:

(() => {
    // code to be executed immediately
})();

*/
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){ //This is named iife cause it has name chai
    console.log(`DB CONNECTED`);
})(); // use semicolon to end // => this will immediately execute the function.
// Global scope ke pollution se problem hoti hai,, kaii bar toh global scope ke variables ya declaration hi uske pollution ko hatane ke liye humne iife ka use kiya.

// We can also perform it with the help of arrow function
(() => { // unnamed iife
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`My name is ${name}`);
})('Thay');

