// singleton
// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Ayush",
    [mySym] : "key1",
    age:  22,
    location : "Mumbai",
    email: "ayushmeera10@gmail.com",
    isLoggedIn: true,
    lastloginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["email"]) //use this when the key is dynamic
// console.log(typeof jsUser[mySym])

jsUser.email = "ayushmeera10@gmail.com"
//object.freeze(jsUser)
jsUser.email = "ayushmeera10@chatgpt.com"
// console.log(jsUser.email)

jsUser.greeting = function(){
    console.log("Hello JS World")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS world, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())