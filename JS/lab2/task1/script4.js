console.log("entering user info");
let col = prompt("ENTER COLOR:");

let userName = prompt("ENTER NAME:");
let nameRegex = new RegExp("^[a-zA-Z ]+$");
while (!nameRegex.test(userName)) {
  userName = prompt("ENTER NAME:");
}
console.log("%c Name: " + userName, "color:" + col);

let phone = prompt("ENTER PHONE NUMBER:");
let phoneRegex = new RegExp("^[0-9]{8}$");
if (phoneRegex.test(phone)) {
  console.log("%c Phone: " + phone, "color:" + col);
} else {
  console.log("Invalid Phone Number");
}

let mobile = prompt("ENTER MOBILE NUMBER:");
let mobileRegex = new RegExp("^(010|011|012)[0-9]{8}$");
if (mobileRegex.test(mobile)) {
  console.log("%c Mobile: " + mobile, "color:" + col);
} else {
  console.log("Invalid Mobile Number");
}

let email = prompt("ENTER EMAIL:");
let emailRegex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-z]{2,3}$");
if (emailRegex.test(email)) {
  console.log("%c Email: " + email, "color:" + col);
} else {
  console.log("Invalid Email");
}
