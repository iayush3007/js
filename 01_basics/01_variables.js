const accountId = 13444
let accountEmail = "ayushmeera10@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

/*
prefer not to use var because of issue in block scope and functional scope
*/
// accountId = 2
accountEmail = "ayushmeera08@gmail.com"
accountPassword = "2233"
accountCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])