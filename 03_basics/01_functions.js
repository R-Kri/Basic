// functions help make code cleaner, more efficient, and easier to manage.

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName // refernce of a function
sayMyName() // to execute a function

// function addTwoNumbers(number1,number2){ // number1 and number2 are parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,4) // Arguments given are 3 and 4. Output= 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,null) // 3


function addTwoNumbers(number1,number2){
    // let result =number1 + number2 // number1 and number2 are parameters
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
console.log("Result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return`${username} just logged in`
// }
function loginUserMessage(username = "sam"){ // sam is a default value here and if we put a name then the name will overwrite the sam
    if(!username){ // undefined,empty strings "" are often assumed as false values. 
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}


// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage()); // undefined just logged in => This "undefined" is the output showed if no values is passed to the function.

// Shopping cart exmple where we don't know how many products will user add to its cart.
// function calculateCartPrice(...num1){ //  This ... is called rest operator as well as spread operator according to its use case.
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500,2000));// [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1,val2,...num1){ //  This ... is called rest operator as well as spread operator according to its use case.
    return num1
}

console.log(calculateCartPrice(200, 400, 500,2000));// [ 500, 2000 ] => val1 ke andar 200 jayegi, val2 ke andr 400 jayegi or num1 me 500 ,2000 jayegi.

const user = { // How to pass object in function
    username: "hitesh",
    price: 199
}
// This is how we pass object in function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user) // Username is hitesh and price is 199

handleObject({ // We can directly pass objects in function
    username: "sam",
    price: 399
})

// We can also pass arrays in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // 400 => Using variables
console.log(returnSecondValue([200, 400, 500, 1000])); // Directly putting values.


/*

The spread operator (`...`) and the rest operator (`...`) look identical in syntax but serve different purposes in JavaScript based on their context of use.
### Summary

- **Spread Operator (`...`)**: Expands elements (used in array literals, object literals, and function calls).
  ```javascript
  const arr = [1, 2, 3];
  const newArr = [...arr]; // Copying array
  const obj = { ...anotherObj }; // Spreading object properties
  ```

- **Rest Operator (`...`)**: Collects multiple elements into a single array or object (used in function parameters and destructuring).
  ```javascript
  function sum(...args) { // args is an array }
  const [first, ...rest] = [1, 2, 3]; // rest is [2, 3]
  ```

In essence, the spread operator is for expanding collections into individual elements, while the rest operator is for collecting multiple elements into a single array or object.

*/



