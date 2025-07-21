// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


let createdDate = new Date(2023, 0, 23)
// console.log(createdDate);

let mycreatedDate = new Date("01-04-2025")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let new_date = new Date()
console.log(new_date);
console.log(new_date.getMonth() + 1);
console.log(new_date.getDay());

 //  ${new_date.getDay()} and the time

 new_date.toLocaleDateString('default', {
    weekday: "long",

 })

