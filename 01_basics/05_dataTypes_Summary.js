// How data is stored in memory and access from there on that basis
// two datatypes were created i) Primitive ii) Non-primitive or reference type

/* PRIMITIVE - Call by value
7 categories - String, Number, Boolean, null, undefined, Symbol, BigInt
*/

/* NON-PRIMITIVE - Call by reference
Array, Objects, Functions */

/*JavaScript is a dynamically typed language. In dynamically typed languages, the data type of variables is determined by the value they hold at runtime, and can change throughout the program as we assign different values to them. There's no inbuilt way to annotate or restrict the types of variables.*/

// In JS we don't differentiate btw integer and decimal,(a number is number)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId) // False cause symbol gives unique idetifier to everyone even if data stored is same.

const heroes = ["shaktiman","Nagraj"]; // for arrays

// For Objects 
let myObj = {
    name: "Thor",
    age: 21,
}

// For Functions
const myFunction = function(){
    console.log("Hello World");
}

//Datatype of null shows "Object" when we use typeof function to get datatype.
// Datatype of function returns function.(All non-primitive type comes under function datatype.)