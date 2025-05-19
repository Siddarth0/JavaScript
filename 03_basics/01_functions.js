function sayMyName(){
    console.log("S")
    console.log("S")
    console.log("S")
    console.log("S")
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//    console.log(num1+num2);   
// }

   function addTwoNumbers(num1, num2){
//    let result = num1 + num2
//    return result
      return num1 + num2
} 

const result = addTwoNumbers(3,4)

// console.log("result:", result);


function userLoginMessage(username){
    return `${username} just logged in`
}
// console.log(userLoginMessage("Siddarth"));



function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(200, 300, 400))


const user = {
    username: "siddarth",
    price: 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

const myNewArray = [2, 3, 4, 5, 6]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
