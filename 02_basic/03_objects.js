// singleton
//Object.create


// object literals
// in object you can define your own key like in array it is by default 1st is the 0th position

const mysym = Symbol("key1")

const Jsuser = {
    name: "Hitesh",
    "fname": "Hitesh Choudhary",
    [mysym]: "key1", // keys are define this way only
    age: 18,
    locn: "Jaipur",
    email: "hitesh@1123.com",
    isLoggedIn: false

}

// console.log(Jsuser.email);
// console.log(Jsuser["fname"]);
// console.log(Jsuser[mysym]);

Jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "hitesh@chello.com"

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello User");
    
}
Jsuser.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

