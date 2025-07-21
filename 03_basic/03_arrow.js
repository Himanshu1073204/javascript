const user = {
    username: "hitesh",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this refers to current context within the scope 
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this is used in object but not in function
    
// }
// chai()


// const chai = function (){
//     let username = "himanshu"
//     console.log(this.username);
    
// }

const chai =  () => {
    let username = "himanshu"
    console.log(this);
    
}
//chai()

//   () => {}  arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
 
//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = ( num1, num2) => ({username: "hitesh"})

console.log(addTwo(2, 3));
