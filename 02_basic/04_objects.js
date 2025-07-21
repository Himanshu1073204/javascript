// object singleton

//const tinderUser = new Object() // ways of defining object  i.e singleton
const tinderUser = {}  // non singleton

tinderUser.id = "123abc"
tinderUser.name = "hello"


//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "Himanshu",
            lastname: "kumar"
        }
    }


}
//console.log(regularUser.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "g", 4: "h"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)  // {} is given bcz all the value are store to an enpty object, if not given then all the value will be stored at the first that is present at the beginning of the list

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users =[
    {
        id: 1,
        email: "hello@123.com"
    },
    {
        id: 1,
        email: "hello@123.com"
    },
    {
        id: 1,
        email: "hello@123.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   //gives ouput as an array
// console.log(Object.values(tinderUser));  //gives ouput as an array
// console.log(Object.entries(tinderUser));  //gives ouput as an array in that keys and value are given as array

// console.log(tinderUser.hasOwnProperty('email'));   //ckeck if it present or not

//to know more go to console in inspect of browser and write whatever want to know


const course ={
   name: "js in hindi" ,
   price: "999",
   courseInstructor: "Hitesh"
}

// instead of course.courseInstructor we write.. i.e known as Dstructuring 

const {courseInstructor: instructor} = course
console.log(instructor);

// {  ///jason 
//     name: "himanshu",
//     coursename: "js hindi",
//     price: "free"
// }

//   API  //////
[
    {},
    {},
    {}
]




