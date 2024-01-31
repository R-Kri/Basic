
// // // {} This is scope, it comes with functions and if-else statements
// // if (true) {
// //     let a = 10
// //     const b = 20
// //     var c = 30
// // }
// Those variables a,b,c shouldn't be printed out of the block scope of "if" statement but var comes and prints its value.
// // console.log(a); // No output as "a" is only defined under if 
// // console.log(b); // No output as "a" is only defined under if 
// // console.log(c); // prints 30 which is a problem. Hence it is better to avoid var.

// // Study further about block scope and global scope.

// global scope in browser console and in code environment both are different. We'll study further about this








// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);// Error cause it cannot access website variable outside the scope of the function "two()". 
//     two()
// } // When we have a nested function a child function can access the variable of the parent function, but vice versa is not true.
// one()

// +++++++++++++++++++++ INTRESTING ++++++++++++++++++++++++

console.log(addOne(5));// Output : 6

function addOne(num){
    return num + 1
}

console.log(addOne(5));

addTwo(5)// It will give error cause we cannot precall it in this (2nd type) of declaration. Declaration se pehle hum usse access nahi kr skte when we declare the function with second method.

const addTwo = function(num){ // Here we have declared the function but we have also hold it into a variable.
    return num + 2
}

addTwo(5)
// In both ways we can declare a function