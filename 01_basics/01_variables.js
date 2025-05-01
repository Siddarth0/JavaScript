const accountId = 12234
let accountEmail = "sidda@gmail.com"
var accountPassword = "12345"
accountCity = "Ktm"
let accountState;

//accountId = 2 //not allowed

accountEmail = "ktm@yahoo.com"
accountPassword = "2233"
accountCity = "Gorkha"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])