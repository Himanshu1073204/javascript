const userEmail = []

if ( userEmail) {
    //console.log("Got user Email");  
}
else {
    //console.log("Not get the user Email");   
}

// falsy Value

// false, 0 ,-0, BigInt 0n, "", null, undefined, NaN

// Truthy Value
 
// "0", 'false', " ", [], {}, function(){}, 


// if (userEmail.length === 0){
//     console.log("Array is Empty");
    
// }

const emptyObj ={}

if ( Object.keys(emptyObj).length === 0)
{
    console.log("object is Empty");   
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");


