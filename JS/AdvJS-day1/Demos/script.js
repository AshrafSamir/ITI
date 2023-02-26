var obj={
    nm:"obj1",
    getInfo:fun,
    disp:function(){
        console.log(this.nm);
    }
}

function fun(){
    console.log(this.nm);
}

obj.getInfo();
//obj.fun()XXX

fun()//undefined

obj.disp()


var adding = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++)
        sum += arguments[i]


    return sum; //arguments[0] + arguments[1];
}






/*(function () {
    console.log("anonymous");

})()

;(function () {
    console.log("anonymous");
    
}());*/
/*
var f=function () {
    console.log("anonymous");
    return function () {
    console.log("anonymous");
    
}
    
}

setTimeout(function () {
    console.log("anonymous");
    
},1000)


*/


/*function a(){
    b()
}
a()//

function b(){
    
    a()
    
}
*/









var obj = {
    objnm: "object name",
    objVal: 5,
    objType: {
        lang: "JS",
        ver: "5.0"
    }
};




obj.prop = "obj1"
obj.prop2 = 10;
obj.prop3 = [1, 2, 3, 4, 5];
obj.prop4 = function () { //method
    return "ay 7aga"
};

console.log(obj.objnm);
console.log(obj.objType.lang);



/*var str = "abc";

var num = 10;

fun//undefined

//function expression
var fun = function () {//anonymous function
    return "abc"
}


fun()

var arr=[1,2,"str",function(a,b){return a+b},fun]
arr[3](1,3)

//setTimeout(function(){},2000)


function myFun(){
    
    
    
 return function(){
     console.log("another internal function");
 }   
}

var f=myFun()
f()

myFun()()
*/
