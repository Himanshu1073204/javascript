function sayMyname(){
    console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}
//sayMyname()

// function addTwono (number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwono (number1, number2){

    //let result = number1 + number2
    //return result
    return number1 + number2
}
const result  = addTwono(3, 5) // in this result do not hold the summation value 

//console.log("Result:", result);


function loginUser(username){
    if(username === undefined){
       console.log("Please enter a username");
       return
    }
    return `${username} just logged in`
}
//loginUser("hitesh") // do not print we have return but do not tell to print

//console.log(loginUser("Hitesh"));
//console.log(loginUser("hello"));

 
function calculateCartPrice(...num1){  // ...num1 ia a properties of array 
        return num1
}
//console.log(calculateCartPrice(200, 400, 390, 300, 679));    // stores in array

const user ={
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({username: "sam",
    price: 399
})

const myNewArr = [20, 300, 44, 65]

function returnsecondvalue(getarray){
    return getarray[1]
}
//console.log(returnsecondvalue(myNewArr));
console.log(returnsecondvalue([200,400,300,500]));

