// singleton

// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "Zeeshan@89"
tinderuser.name = "Zee"
tinderuser.lastloggedin = false
// console.log(tinderuser);

const appuser = {
    email: "Zeeshan@google.com",
    fullname: {
        usrefullname: {
            firstname: "Mohammad Zeeshan",
            MiddleName: "Shahajan",
            lastName: "Patel",

        }


    }
}
// console.log(appuser.fullname.usrefullname.lastName);

const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}

// const allobj = {object1, object2}
// const allobj = Object.assign({}, object1, object2)
const allobj = {...object1,...object2}
// console.log(allobj);

// when we get the valude from the database we get the data in array of objects form.

const DBuser = [
    {
        id : 1,
        email: "Zee@gmail.com"
    },
    {
        id : 1,
        email: "Zee@gmail.com"
    },
    {
        id : 1,
        email: "Zee@gmail.com"
    }
]
DBuser[1].email
// console.log(tinderuser);
console.log(Object.keys(tinderuser));

// console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('lastloggedin'));

// Destructuring
 
const course = {
    courseName : "Js in Hindi",
    price : "999",
    courseMentor: "Hitesh"
}

// console.log(course.courseMentor);

// const{courseMentor : Mentor} = course
// console.log(Mentor);

// {
//     "name": "Zeeshan",
//     "courseName": "Js By Hitesh",
//     "prise": "free"
// }

[
    {},
    {},
    {}
]

