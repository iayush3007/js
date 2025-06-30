//const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123"
tinderUser.name = "Ayush"
tinderUser.loggedIn = false

const regularUser = {
    email : "some123@gmail.com",
    fullName : {
        userfullName:{
            firstName : "Ayush",
            LastName : "Kumar"
        }
    }
}
//console.log(regularUser.fullName.userfullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1,...obj2, ...obj3}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//console.log(obj4)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // enrties create key: value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseInstructor: "Ayush"
}
const {courseInstructor: Instructor} = course
console.log(Instructor)
