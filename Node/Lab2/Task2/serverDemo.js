//#region Event
// //require ---> events [class] ==> obj ==> listener [on("abc")] ===> Fire [emit("abc")]
// var EventEmmiter = require("events")

// // console.log(EventEmmiter);
// var myEvent = new EventEmmiter();
// //Listener
// myEvent.once("abc",()=>{console.log("Event ABC Fired")})
// myEvent.once("xyz",()=>{console.log("Event XYZ Fired")})
//Fire
// myEvent.emit("abc");
// myEvent.emit("xyz");
// myEvent.emit("abc");
// myEvent.emit("abc");
// myEvent.emit("abc");
// myEvent.emit("xyz");
// myEvent.emit("xyz");
// myEvent.emit("xyz");


//document.getElementById("").addEventListener("abc", ()=>{})
//dispatch


// http.createserver(()=>{})
//angular [Node] ==> EventEmmiter ??
//#endregion



//#region Event Usin Class
var EventEmmiter = require("events");
class myClass extends EventEmmiter{

}
var m1 = new myClass();
m1.on("abc",()=>{console.log("Event ABC Fired")});
m1.on("xyz",()=>{console.log("Event XYZ Fired")});
// console.log(m1.eventNames());//[abc, xyz]

for(let i=0; i<m1.eventNames().length; i++){
    m1.emit(m1.eventNames()[i]);
}
//#endregion





