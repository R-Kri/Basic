// Switch statements are used instead of if-else chains for clearer code and better performance when checking multiple conditions against a single variable.

// SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

// shift + alt + downarrow = to make duplicate.

switch (month) {
    case "jan":
        console.log("January");
        break;         
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}