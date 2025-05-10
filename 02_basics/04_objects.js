//const tinderUser = new Object() //singleton object
const tinderUser = {}  //non singleton object

tinderUser.id = "123a"
tinderUser.name = "Samm"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regualarUser = {
    email: "any@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Siddarth",
            lastname: "kunwar"
        }
    }
}


//console.log(regualarUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
    id : 1,
    email: "h@gmail.com"
},
    {
    id : 1,
    email: "h@gmail.com"
},
    {
    id : 1,
    email: "h@gmail.com"
},
    {
    id : 1,
    email: "h@gmail.com"
}
]

users[1].email
// console.log(users[1].email);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// object destructuring

const course = {
    coursename: "JS",
    price: "999",
    courseinstructor: " Sid"
}
// course.courseinstructor

const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);


