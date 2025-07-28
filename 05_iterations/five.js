const coding = ['js', 'ruby', 'python', 'java', 'cpp']

// coding.forEach( function (val) {  // normal function
//   console.log(val);
  
// }  )


// coding.forEach( (item) => {  // array function
//     console.log(item);
    
// }  )

// function printMe(item) {
//     console.log(item);   
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index,arr);
    
// } )

const myCoding = [ 
    {
        languageNmae: "javascript",
        languageFileNmae: "java"
    },
    {
        languageNmae: "java",
        languageFileNmae: "java"
    },
    {
        languageNmae: "python",
        languageFileNmae: "py"
    }
]

myCoding.forEach( (item) => {   // foreach loop doesn`t return anything

    console.log(item.languageNmae);
} )

