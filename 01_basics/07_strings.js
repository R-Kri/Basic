const name = "Thor"
const repocount = 50

console.log(name + repocount + " Hello");// This is oldstyle to concatenate and outdated better not to use it.

console.log(`Hello my name is ${name} have ${repocount} repo`); 

// we perform String interpolation by using backticks(``) cause it is more reliable and modern.It gives you more flexibility e.g `${name}`.toUpperCase(); for uppercase

const gameName = new String(`Hitesh-hc-code`)
console.log(gameName[0]); // To access keys in a position.
console.log(gameName[0].toLowerCase());

//  To check character at a index
console.log(gameName.charAt(2));

// To check position of a character
console.log(gameName.indexOf('t'));

// To slice
const newString = gameName.substring(0,4) // taking a substring. it'll print the character at 0,1,2,3 position last index is exclusive.
console.log(newString);

const anotherString = gameName.slice(-8,4) // Best thing about slice is you can provide negative value in it, then it'll start from reverse.Substring doesn't obey -ve value index.
console.log(anotherString);

// Trim and Replace Method
const newStringOne = "     hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // It removes all the spaces

// const url = "https://hitesh.com/hitesh choudhary"
// Many times people search with spaces in middle but browser doesn't understand spaces so it adds something like this to fill up the spaces.
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

//  We can also interrogate it whether it exist or not.
console.log(url.includes('hitesh')); // As url includes hitesh so it'll print true as output.

// We can split the strings with providing a separator and a limit.
console.log(gameName.split('-')); // Here output will be this [ 'Hitesh', 'hc', 'code' ] as gameName="Histesh-hc-code"

