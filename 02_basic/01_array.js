// array

const myarr = [0, "Hitesh", 1, 2, 3]
const myHeros = ["shaktiman", "naagraj", "oggi", "Doremoan"]


const myarr2 = new Array(1, 2, 3)
// console.log(myarr[1]);

// Array Method

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(9)  // put the value at the 0th position
// myarr.shift()  // remove the 0th element

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));


const newArr = myarr.join() // change to arr to string

// console.log(myarr);
// console.log(typeof newArr);



// slice, splice

console.log("A ", myarr);
const myn1 = myarr.slice(1,3) // show the that is given in the slice

console.log(myn1);
console.log("B", myarr);
 
const myn2 = myarr.splice(1,3) // remove the value that is given in the splice
console.log("C", myarr);
console.log(myn2);