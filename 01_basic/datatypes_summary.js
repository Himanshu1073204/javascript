// Primitive

// 7 types  : String , Number , Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

// const bigNumber = 653536432n


// Reference (Non Primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22
}

const myfunction = function(){
    console.log("Hello World");
    
}


// console.log(typeof bigNumber);



// ********************************************

// Stack memory(Primitive), Heap Memory(Non-Primitive)

let youtubename = "relateby"

let anothername = youtubename
anothername = "chaiaurcode"    // make copy in the stack

// console.log(youtubename);
// console.log(anothername);

let user = {
    email : "gggg@gmail.com",
    upi : "khhhhhhid"
}

let usertwo = user
usertwo.email = "hitesh@google.com"

console.log(user.email);   // change the value of both  bcz of the reference
console.log(usertwo.email);

