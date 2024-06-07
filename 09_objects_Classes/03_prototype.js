// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); // we want a method trueLength to trim alL the empty spaces from the variable.
// PROBLEM IS SOLVED AT THE END
//////////////////////////////////////////////////////////////////////////////////////////
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling", 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Sidha hi Object ko access karke usme nai property add kardi isiliye ab jo bhi function,arrays,strings isse hote hue jayegi un sabme ye property add hojayegi.

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() // heroPower ke pass heyHitesh ka acchess nahi hai kyuki woh array me inject kiya gaya hai or heroPower ek function hai.
/*
Sab (i.e strings, Array, Function) Object se hote hue pass karte hai isiiye object me jo property add karoge woh teeno me inherit ho jayegi (object is like parent). But agar kisi teeno me se kisi ek me property add karoge to woh property object ke sath share karega lekin baaki dono ke sath nahi kyuki woh ek hi level pe hai. Visuaize it like tree structure Object at top and three branches are string,function and array.
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // Teacher bhi User ki sari property access kar payega. yehi prototypal inheritance hai.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // ChaiAurCode
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength() // hitesh (We are getting this output because we have used "this" which access current context, ki jisne call kiya hai or is code pe "hitesh" ne call kiya hai to isiliye  yehi uska current context hai.)
"iceTea".trueLength() // iceTea