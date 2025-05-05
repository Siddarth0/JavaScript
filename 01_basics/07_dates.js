let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate= new Date()

newDate.toLocaleString('default', {
    weekday: "long"
})