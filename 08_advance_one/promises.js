// FIRST WE WILL LEARN TO CREATE PROMISES

const promiseOne = new Promise(function(resolve, reject){
    //We can do an async task like
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // To connect resolve with .then()
    }, 1000)
})

// CONSUMPTION OF PROMISES
promiseOne.then(function(){
    console.log("Promise consumed");
})

////////////////////////////////////////////////////////////////////////////////////////////////////////

new Promise(function(resolve, reject){ // Without storing in a variable
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){ // we can directy call using ".then()" as we have not stored in a variable
    console.log("Async 2 resolved");
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
// To pass data which we received from network.

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) // This is how we pass data using resolve.
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Use case of reject.
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// We can chain .then(). THIS HELPS A LOT IN DB CONNECTION
 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS IS NOT A RULE THAT YOU SHOULD HANDLE PROMISES WITH .then(), .catch() we can also use async, await. 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// What async/await do? (It is bit similar like .then, .catch) It waits for some time for the task to be completed, if task completes then only it proceeds. Otherwise it gives error.
async function consumePromiseFive(){
    try {
        const response = await promiseFive //Promise is an object so we don't consume it like this promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// We will study the below code in next lec in detail.

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // Fetch returns value in string so we first convert it in json. Because aap string se koi value nahi nikal paoge.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Isi upar wale kaam ko agar hum .then() and .catch() me karke try karte hai...

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => { // To receive the data send by above .then() we use another .then() here.
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.