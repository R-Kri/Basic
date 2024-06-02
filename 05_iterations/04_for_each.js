const coding = ["js", "ruby", "java", "python", "cpp"]

/*
The forEach method is an array method in JavaScript used to execute a provided function once for each array element. It allows you to perform operations on each item in an array without needing to use a for loop. FOR EACH DOESN'T RETURN ANY VALUE BACK

array.forEach(callbackFunction(currentValue, index, array), thisArg); // callback function doesn't have name

// NO NEED TO USE PARAMETERS AS THE LOOP IS SMART ENOUGH THAT IT'LL MOVE TO EVERY ELEMENT AND WE CAN CALL THE ELEMENT WHATEVER WE LIKE. IN THE BELOW EXAMPLE WE HAVE USED "val" TO CALL THE ELEMENTS. AND NO NEED TO NAME THE FUNCTION. e.g instead of "coding.forEach(greet = (item) => {})" we can write "coding.forEach((item) => {})"
*/
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); // We have taken the access of the objects insdide an array. Hence we can extract data from the object inside an array like this. It'll help in database a lot.
} )
