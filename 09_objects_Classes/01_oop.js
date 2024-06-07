//  WHAT IS OBJECT LITERAL

const user = {
    // PROPERTIES
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // METHODS
    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(username);// It will show error =>(username is not defined) as it doesnt know which username we are talking about
        console.log(this.username); //correct way to specify we are asking for current context username.
        console.log(this); // It will print the current context => the whole fetUserDetails function.
        /* OUTPUT OF console.log(this);
        {
            username: 'hitesh',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        }
        */
    }

}
// we can access data in two ways either using user.username or user["username"]
// SYNTAX TO ACCESS PROPERTIES
console.log(user.username);
console.log(user["username"]);
// SYNTAX TO ACCESS METHODS
user.getUserDetails()
user["getUserDetails"]()

// "this" KEYWORD HUME BATATA HAI KI HUM CURRENT CONTEXT KI BAAT KAR RAHE HAI. JESE KI MONDAY TOH HAR WEEK AATA HAI HUME KESE PATA CHALTA HAI KI HUM IS WEEK KE MONDAY KI BAAT KAR RAHE HAI TOH JUB CONTEXT DENA HOTA HAI WES ME this KEYWORD USE AATA HAI.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const promiseOne = new Promise() /* "new" keyword is a constructor function which allows ek hi object literal se multiple instances bana sako. isse kaafi context bana sakte ha hum.*/

/* Kyuki kaafi baar hume naya instance hi chahiye taki woh purane values ko affect na kare to isiliye "new" keyword ka use karte hai to create new context. It is a constructor function*/
// LETS SEE CONTRUCTOR FUNCTION KAAM KESE AAATA HAI...
function User(username, loginCount, isLoggedin){
    this.username = username; // ye batane ke liye ki context ka variable konsa hai we use "this"
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    return this; // ye pura object return krdega
}

// MISTAKES
//const userOne = User("John", 15, true)
//const userTwo = User("wick", 7, false) /* This will overwrite the context values and assign the values to userTwo, even if we wrote "console.log(userOne);" since the variable values have been overwritten. To prevent this and avoid destroying the entire code, we use the "new" keyword to create new instances. This ensures variables are not overwritten.*/
// console.log(userOne);

// CORRECTION 
const userOne =new User("John", 15, true)
const userTwo = new User("wick", 7, false) // new instance has been provided.
console.log(userOne); // output values of user 1
//console.log(userTwo); // ouput values of user 2

/* STEPS
1."new" keyword use karne pe ek empty object create hota hai jisko instance bolte hai.
2. constructor function call hota hai new keyword ke karan. ye kya karta hai ki jitne bhi arguments hote hai unko sathme pack karta hai or apko dedeta hai.
3. jo this keywords hai woh iske andar inject hojate hai.
4. Apko function miljata hai.
*/

// Function: A standalone block of code designed to perform a task.
// Callback: A function passed as an argument to another function to be executed later.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(userOne.constructor); // Output => [Function: User]
/* The .constructor property in JavaScript returns a reference to the function that created the instance's prototype. In other words, it points to the constructor function that was used to create the object.*/