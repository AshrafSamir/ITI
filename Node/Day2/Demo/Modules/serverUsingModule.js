var myModule = require("./myModule");
console.log(myModule); // {AddItem, TotalPrice} //  {Sales} 
// console.log(myModule.x);

// myModule.AddItem("LabTop", 20000);
// myModule.AddItem("Smart Watch", 3500);
// myModule.AddItem("HeadPhone", 1500);
// console.log(myModule.TotalPrice());//25000


// myModule.AddItem("LabTop", 20000);
// myModule.AddItem("Smart Watch", 3500);
// myModule.AddItem("HeadPhone", 1500);
// console.log(myModule.TotalPrice());//50000


var SalesClass = myModule.Sales;

//--------User 1-----------
var user1 = new SalesClass();
user1.AddItem("LabTop", 20000);
user1.AddItem("Smart Watch", 3500);
user1.AddItem("HeadPhone", 1500);
console.log(user1.TotalPrice());//25000

//--------User 2-----------
var user2 = new SalesClass();
user2.AddItem("LabTop", 20000);
user2.AddItem("Smart Watch", 3500);
user2.AddItem("HeadPhone", 1500);
console.log(user2.TotalPrice());//25000

user1.AddItem("Fan", 3000);
console.log(user1.TotalPrice());//28000

