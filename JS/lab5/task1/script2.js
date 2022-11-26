let counter = getCookieName("counter")
let name = getCookieName("name");
let age = getCookieName("age");
let gender = getCookieName("gender")

if (counter == undefined) {
    counter = 1;
    setCookie("counter", counter, 1);
    document.getElementById("counter").innerText = "Welcome this your first time here your counter is: " + counter;
}else{
    counter = getCookieName("counter");
    counter = parseInt(counter);
    counter++;
    setCookie("counter", counter, 1);
    document.getElementById("counter").innerText = "welcome again this is your visit number: " + counter;
}


if(gender){
 document.images[0].src = gender +".jpg";
}