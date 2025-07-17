const accountId = 144553
let accountEmail = "hiamsnhu.kr104@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "db@hc.com"
accountPassword = "33333"
accountCity = "Bengaluru"


console.log(accountId);


/*
perfer not to use var
bcz of issue in repeative use to same variable 
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
