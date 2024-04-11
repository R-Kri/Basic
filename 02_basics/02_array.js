const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","Flash","Batman"]

// marvel_heroes.push(dc_heroes) // push adds different types of datatypes it isn't necessary to be a particular same datatype.
// console.log(marvel_heroes); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] => Treats the dc_heroes array as 4th element.
// console.log(marvel_heroes[3][1]); // Flash

// // Concat: Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] 

// To merge both the arrays properly.

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

// Alternately we can use spread operator.

const all_new_heroes = [...marvel_heroes,...dc_heroes] // This is our spread operator. More prefferable cause we can add another array with ...third_array method.
console.log(all_new_heroes);

// flat()= The flat() method concatenates sub-array elements.
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array); // All the brackets under array will be removed and treated as a single element. Output: [1,2,3,4,5,6,7,6,7,4,5]

// We can also ask is it array or not using ".isArray":
console.log(Array.isArray("Hitesh")); // False

// But what is we want to convert it into an array. We can perform it using ".from" :
console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ] => Changed into an array


// If it couldn't be able to create an array then it'll return an empty array.
// Intresting case
console.log(Array.from({name: "Hitesh"})); // returns [] because first you have to specify it you want to make arrays of keys or values.

// To convert into arrays.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns [ 100, 200, 300 ]