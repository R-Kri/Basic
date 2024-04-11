// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970.

// All the count starts from jan 1 1970 in miliseconds.

// DATES
let myDate = new Date()
console.log(myDate.toString()); // Sat Jan 13 2024 16:48:11 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sat Jan 13 2024
console.log(myDate.toISOString()); //2024-01-13T16:45:42.099Z
console.log(myDate.toJSON()); //2024-01-13T16:45:42.099Z
console.log(myDate.toLocaleDateString()); // 1/13/2024
console.log(myDate.toLocaleString()); //1/13/2024, 4:45:42 PM
console.log(myDate.toLocaleTimeString()); // 4:45:42 PM
console.log(myDate.toTimeString()); // 16:45:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // Sat, 13 Jan 2024 16:45:42 GMT ; toUTCString() returns a date object as a string, according to UTC:
console.log(myDate.getTimezoneOffset()); // 0 ; returns the difference between UTC time and local time. returns the difference in minutes.

console.log(typeof myDate); // Type is Object.

//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 => It tell us that month count starts with 0.

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM => We can declare dates according to our need
// console.log(myCreatedDate.toLocaleString()); 

// let myCreatedDate = new Date("2023-01-14") // In single digit month count starts with 0 but in YYYY-MM-DD it starts with 1.
// console.log(myCreatedDate.toLocaleString());   

let myCreatedDate = new Date("01-14-2024") // More preferred format in India => MM-DD-YYYY
console.log(myCreatedDate.toLocaleString()); 

// TIME STAMPS => Very useful in making polls,quiz etc
 let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1705166584767 => 1 Jan 1970 midnight se lekar abtak ka time in miliseconds.
console.log(myCreatedDate.getTime()); //1705190400000 => Kuch aisa ouput milega, jisse hum dono output ko compare kar sakenge. Yehi concept Hotel booking, Polls in sab me use hoti hai.

// To get the answer into seconds instead of milliseconds.
console.log(Date.now()/1000);// But it returns in decimal number which we don't want.
// Better method
console.log(Math.floor(Date.now()/1000)); // It'll return in seconds without decimals

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // Output: 0 => As month count starts with 0.
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // Output: 6 => As it saturday today so it is counting it as 6.

// Here we can define what we want with customization of type of value.
newDate.toLocaleString('default',{ // Press ctrl + space to view all the properties.
    weekday: "long",
})