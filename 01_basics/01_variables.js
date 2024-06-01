const accountId = 14455
let accountEmail = "hello@google.com"
var accountPassword = "123456"
accountCity = "Jaipur" // possible variable declaration but not a convinient way.
let accountState; // will show undefind cause no value is given.
/*
Prefer not to use "var"
because of issue in block scope and functional scope.
we will discuss about this further later
*/ 
// accountId=2 //Constant keyword cannot be changed as one value is already given above.
accountEmail = "world@gmail.com"
accountPassword = "173823"
accountCity = "Delhi"
console.log(accountId);

// To print multiple variables in a table we can use console.table 
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])