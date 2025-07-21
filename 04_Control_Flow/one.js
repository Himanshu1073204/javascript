// if
if (true){

}
if (false){

}

// <, >, <=, >=, ==, !=,
// === check the value and the type also



//const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500){
//      console.log("less than");
     
// }else if (balance < 750){
//     console.log("less than 750");
     
// } else if (balance < 900){
//     console.log("less than 900");
     
// } else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard & 2==2) {
    console.log("Allow the user to buy");   
}

if ( loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}

