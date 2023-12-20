let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//Even though 33abc is not a number but it is showing  datatype of number
//It is a NaN. Don't blindly rely on datatype
//score =  null prints 0
// undefined and 33abc becomes NaN
// true => 1 and false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => false
// "hello" => true

//String conversion
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********** Operations***************//

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "Hello "
let str2 = "World"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //String first so other 2 were also treated as string
console.log(1 + 2 + "2"); // Number first then 2 in middle is also treated as number

console.log(+true); // prints 1 (but not a good practice)

