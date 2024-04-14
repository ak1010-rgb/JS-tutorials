const accountId= 123299
let accountEmail ="ak@gmail.com"
var accountPassword ="12345"
accountCity ="Jaunpur"
let accountState;

//accountId = 2, not allowed

// prefer not to use var because of the issue in block scope and functional scope
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])