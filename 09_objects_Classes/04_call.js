function SetUsername(username){ //This function is intended to set the username property on the object that it's called with.
    //complex DB calls
    this.username = username //// In the SetUsername function, this refers to the global object because it's not being called on any specific object.
    console.log("called");
}

function createUser(username, email, password){ // This function is intended to create a new user object with properties username, email, and password. It calls SetUsername(username) to set the username.
    
    SetUsername(username) // When you call SetUsername(username) directly, it will attempt to set the username property on the global object, which might not be what you intend.

    // ABOVE CODE DOESNT CALLED THE SetUsername AND TO EXPLICITLY CALL THE METHODS USING .call
    SetUsername.call(this, username)//If you intend to set the username property on the object created by createUser, you need to call SetUsername in the context of createUser.

    /*
    To ensure that SetUsername sets the username property on the object created by createUser, you can use .call() or .apply() to specify the correct context.
    You can pass this as the first argument to SetUsername.call(this, username).
    */
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);