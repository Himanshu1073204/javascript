// Primitive

// 7 types  : String , Number , Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

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


console.log(typeof bigNumber);
