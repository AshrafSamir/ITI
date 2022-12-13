//Global Scope


function RAneem(){}


function myFun() {//arr=[fn,fn,fn],i=3
    var arr = [];
    for (var i = 0; i < 3; i++)
        arr.push((function (i) {//extension (reqired parameters)-->as clouser
            //i=0

            return function () {

                console.log(i);
            }
        })(i)) //IIFE DP



    return arr

}
RAneem()



var arrResult = myFun()
arrResult[0]() //3
arrResult[1]() //3
arrResult[2]() //3


var b = 30
/*
for
    while
        do..while
        if..else
{
    
}
*/
var fun = function (z) { // local scope===function scope
    var x = 10;
    //var y=9;

    function innerFun(a) { // scope chaining
        var y = 20;

        function deepInnerFun(c) {
            var w = 40

            return x + y + a + z + b + c + w;
        }

        deepInnerFun(3)

        return x + y + a + z + b;

    }

    //var result = innerFun(1);

    return innerFun;

}

var finalResult = fun(2)
finalResult(1);
//fun(5);
