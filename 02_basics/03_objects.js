// singleton

// object literals

const jsUser = {
    name: "Siddarth",
    age: 24,
    location: "ktm",
    email: "sid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["sun", "Mon"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);

jsUser.email = "kunwar@gmsil.com"
//Object.freeze(jsUser)
jsUser.email = "hi@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());



