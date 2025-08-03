const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)

})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve() 
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task 3 Done");
        resolve({username: 'chai', email: "chai@123"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Hitesh", password:"123"})
        }else{
            reject('ERROR: Something Wrong')
        }
        
    }, 1000)
})
promiseFour
.then(function(user){
   console.log(user);
   return user.username
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("Promise is resolve or rejected");
    
})





const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password:"123"})
        }else{
            reject('ERROR: JS Wrong')
        }
        
    }, 1000)
})

async function consumePromiseFive() {
    try {
           const response = await promiseFive
           console.log(response);
    } catch (error) {
           console.log(error);          
    }
    
}
consumePromiseFive()

// async function getAllUser() {
//     try {
//    const response =  await fetch('https://api.github.com/users/hiteshchaudhary')
//    const data = await response.json()
//    console.log(data);
        
//     } catch (error) {
//    console.log(":", error);
        
//     }
   
// }
// getAllUser()


fetch('https://api.github.com/users/hiteshchaudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))