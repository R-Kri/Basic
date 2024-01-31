// // We'll create an object for user
// const user = {
//     username: "hitesh",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         // console.log(this);
//     } // "this" is used to point current context.

// }

// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// console.log(this); // {} => empty curly will be show as an output in code env. but in browser it'll show different. In browser window object is used.

// // function one(){
// //     let username = "hitesh"
// //     console.log(this.username);// it'll show undefined cause we are not able to use "this" inside a function.
// // }
// // one()// When we print this putting it into a function many vakues are obtained.

// // const chai = function(){
// //     let username = "hitesh"
// //     console.log(this.username);// lly it'll give undefined
// // }

// const chai = () => { // this is arrow function
//     let username = "hitesh"
//     console.log(this.username); // {} it is the output
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// Implicit return => we use when we have only one line of statement
// We don't need to wrap in curly braces and don't have to write "return".
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2) // can also write like this using parenthesis. But if we use parenthesis we must to use "return".

// If we want to print an object then we can perform like this.
const addTwo = (num1,num2) => ({username: "hitesh"}) // output{username: "hitesh"}
console.log(addTwo(3,4));


