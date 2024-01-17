// There are two ways to declare objects one is like literal and another is like constructor.
// Singleton => koi bhi constructor se hum banate hai to singleton ek object banta hai. Magar literal se banane par singleton nahi banta.

const mySym = Symbol("key1") // Declaration of a symbol


// OBJECT LITERALS
// Curly braces are objects
const JsUser = {
    name: "Hitesh", // name,age,location are the key here
    "full name": "Hitesh Chaudhary",
    age: 18,
    mySym: "mykey1",
    [mySym]: "mykey2", // To declare the symbol as a key of object.
    location: "Delhi",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"] 
}
// Two methods to access
console.log(JsUser.email); // Not needed to access like a string 
console.log(JsUser["email"]); // Here we access like strings
// Why we need two methods to access.
// We cannot access "full name" using .full name, We have to use [] method
console.log(JsUser["full name"]);
// Below both will print almost same but major difference comes into it's datatype. mySym datatype is symbol for second one.
console.log(JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser) // After freezing no changes will be applicable to the objects
JsUser.email = "hitesh@bing.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());