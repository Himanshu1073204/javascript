//  map in chain

const myNum = [1, 2, 3, 4, 5, 6, 7, 9, 10]

// const newNums = myNum.map( (num) => num + 10 )

const newNums =  myNum
               .map(  (num) =>  num * 10 )
               .map( (num) =>  num + 1  )
               .filter( (num) =>  num >= 40)

//console.log(newNums);


// reduce function  ++++++++++++++++++++++++++++++

const Num = [1, 2, 3]
 
// const myTotal =  Num.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0 )

const myTotal = Num.reduce( (acc, curr) => acc + curr, 0 )

//console.log(myTotal);


const ShoppingCart = [
    {itemName: 'js course', Price: 999},
    {itemName: 'py course', Price: 2999},
    {itemName: 'mobile dev course', Price: 5999},
    {itemName: 'os course', Price: 899},
    {itemName: 'webTech course', Price: 799},
]
const Total = ShoppingCart.reduce( (acc, item) => acc + item.Price, 0 )

console.log(Total);
