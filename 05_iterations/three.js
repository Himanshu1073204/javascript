// forof loop is used for array

//["", "", ""]  //string
//[{}, {}, {}]  // object  

const arr = [1,2,3,4,5,]

for (const num of arr) {
   // console.log(num);
    
}

const greeting = "Hello World"
for (const greet of greeting) {
   // console.log(`Each char is ${greet}`);
    
}

// Maps do not repeate and in oreder as it is 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', 'France')
map.set('IN', "India")

//console.log(map);    // Map is not iteratable so we cannot use loops directly

for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

const myObject = {
    'game': 'NFS',
    'game': 'Spiderman',

}
// for (const [key, value] of myObject) {  
//     console.log(key, ':-', value);   
// }


  