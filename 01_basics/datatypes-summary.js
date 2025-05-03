// Primitive 

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heroes =["ironman", "doga", "power ranger"]
let myObj = {
    name: "siddarth",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction)

// *****************Stack(primitive) , Heap(Non-primitive)

let myName = "Siddarth"

let anotherName = myName
anotherName = "Idontknow"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@gmsil.com",
    payment: "Banking"
}

let user2 = user1

user2.email = "sid@gmasil.com"

console.log(user1.email);
console.log(user2.email);

