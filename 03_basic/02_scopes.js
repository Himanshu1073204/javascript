//var c = 30    // it get the value out the box also
let a = 300 
if (true) {     // scope
    let a = 10
    const b = 20
    var c = 300 
}


//console.log(a);
//console.log(b);
//console.log(c); // here we get 300 but 30 should come


function one(){
    const username = "Hitesh"

    function two(){
        const website = "Youtube"
        //console.log(username); // innear scope can access the variable of the parent  scope
    }
    //console.log(website);

    two()
    
}
 //one()

if (true){
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "Youtube"
        //console.log(username + website); 
    }
    //console.log(website);    
}

//console.log(username);


// +++++++++++++++++++++++++ interesting ways of using function ++++++

console.log(addone(5)); // can use before declaration

function addone(num){
    return num + 1
}


addTwo(5) // cannot use befor declartaion

const addTwo  = function(num){
    return num + 2
}

