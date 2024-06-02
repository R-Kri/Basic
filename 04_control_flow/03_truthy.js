const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// WHICH VALUES ARE ACCEPTED AS TRUE VALUES AND WHICH FALSE IN A CONTROL FLOW.

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// Remember
/*
false == 0
false == ''
0 == ''
This all expression will return true */

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null, undefined
/* The nullish coalescing operator (`??`) is like a shortcut for choosing between two values. It returns the right-hand side if the left-hand side is `null` or `undefined`, otherwise, it returns the left-hand side. It's handy for providing default values when dealing with possibly absent variables. */
let val1;
// val1 = 5 ?? 10 // output = 5
// val1 = null ?? 10 // output = 10
// val1 = undefined ?? 15 // output = 15
val1 = null ?? 10 ?? 20 // 10

console.log(val1);

// Terniary Operator
// SYNTAX
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")