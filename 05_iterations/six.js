//const coding = ['js', 'ruby', 'python', 'java', 'cpp']


// const values = coding.forEach( (item) => {
//    // console.log(item);
//     return item
// }  )

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter(  (num) => num > 4)  // without parenthesis
// console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )


// const newNumss = myNums.filter(  (num) => {    // with parenthesis
//     return num > 4
// })

//console.log(newNums);

const books = [
    {title: 'Book One', genere: 'Fiction', publish: 1981, edition: 2004}, 
    {title: 'Book Two', genere: 'Non-Fiction', publish: 1991, edition: 1991}, 
    {title: 'Book three', genere: 'History', publish: 1992, edition: 1992}, 
    {title: 'Book four', genere: 'Non-Fiction', publish: 1999, edition: 1999}, 
    {title: 'Book five', genere: 'Science', publish: 1989, edition: 1989}, 
    {title: 'Book six', genere: 'Fiction', publish: 2009, edition: 2009}, 
    {title: 'Book seven', genere: 'History', publish: 2011, edition: 2011}, 
]

let Userbook = books.filter( (bk) => bk.genere == 'History' )

Userbook = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genere === 'History'
})

console.log(Userbook);


