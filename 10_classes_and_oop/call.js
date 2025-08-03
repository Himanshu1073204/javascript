function SetUsername(username) {
    // complex DB Problems
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", " chai@123", "123")
console.log(chai);
