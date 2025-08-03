// let myName = "Hitesh    "
// let myChannel = "chai    "

// console.log(myName.truelenght);  


let myHeros = ["thor", "spiderman"]   // we can create own method in object and it will be applicabel in all i.e(array, string, object) 
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
    
}
//heroPower.hitesh()

// myHeros.hitesh()
// myHeros.heyHitesh()
//heroPower.heyHitesh()


//inheritance

const user = {
    name: "chai",
    email: "chai@123"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiaurCode     "

String.prototype.truelength =  function(){
    console.log(`${this}`);
    console.log(`True lenth is : ${this.trim().length}`);
    
}
anotherUsername.truelength()
"hitesh".truelength()
"iceTea".truelength()