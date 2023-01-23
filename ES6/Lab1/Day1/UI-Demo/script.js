// /**
//  * 1)Let&const
//  * 2)Arrow Function
//  * 3)Rest parameter & spread operator
//  * 4)Destructuring
//  * 5)String Api & Array API improvement
//  */
// //var hoisting-------->x--memory--undefined
// console.log(x)//undefined
// var x =10

// console.log(i)//undefined
// for(var i=0 ; i<3;i++){}
// console.log(i)//undefined/3

// function fun(){
//     // var y=20//-->local scope
//     //  y =20//--->Global
//     let y = 20
//     var sum = x+y
//     return sum
// }
// // console.log(u)//error
// let u = 1//------>script scope

// //  console.log(y)//error/20------->error
// fun()//30
// // console.log(y)//error/20------>20

// // console.log(j)//error
// for( let j=0;j<3;j++){}
// // console.log(j)//error

// console.log(window.y)//error/1/

// var obj={
//     pname:"ahmed",
//     age:10
// }

// console.log(obj.address)//undefined
// var x = 5//
// // let u =2XXXXXXXXXXXXXXX

// const w = 1
// // w =2

//Closure
// function outerfun(){
//     var arr=[]
//     for(let i=0;i<3;i++){
//         arr.push(function(){
//             console.log(i)
//         })
//     }
//     return arr
// }

// var res = outerfun()//[f,f,f]
// res[0]()//3
// res[1]()//3
// res[2]()//3


//Arrow Function
//lambda expression
//fat arrow
function fun2(){//hoisting

}
// var fun = (x,y)=>{console.log(x)}
// fun("abc")

var usrnm = "ahmed"
var obj={
    usrnm:"ali",
    display:function(){
        // that = this
        setTimeout(()=>{   //lexical binding         
            console.log(this.usrnm)
        },2000)
    }
}


obj.display()//undefined/



// var newfun=()=>{
//     return this.usrnm
// }

// var obj = {
//     usrnm:'abc',
//     disFun:newfun
// }

// obj.disFun()//ahmed/abc

////////////////////////////////////////////////////////////////
//Rest parameter
function display(...arr){
    //arguments collection
    // console.log(arguments.join())XXXX arguments is collection
    console.log(arr.join())
}

display('a','b','c','d','e')

//spread operator
var arr =["mango","apple"]
var arr2=['orange',"kiwi",...arr,"abc"]

function fullName(firstname,lastname){
    return firstname+" "+lastname
}

var usrnm=['ali','kareem','ahmed']

console.log(fullName(...usrnm))

var arr1 =[1,2,3,4,5]
// var arr2 = arr1
var arr2 =[...arr1]

arr2[0]='ccc'

var obj={
    name:'ali',
    age:10
}
var obj2={...obj}

/////////////////////////////////////////////////////
// Destructuring Assignment

var arr=[1,2,3,4,5,'a','b',function(){}]

// var x = arr[0]
// var y = arr[1]
// var z = arr[2]

// var[x,y,,,,z=5,,,w=10]=arr

function fun(){
    // return [1,2,3,4,5,'a','b',function(){}]
    return "hello"
    // return {name:"ali"}//error non iterable object
}
var x,y,z
[x,y,z]=fun()
//iterable objects---Array-string
//Symbol.iterator----->iterable
////////////////////////////////////////////
// object Destructuring
var obj = {
    name:'es6',
    main:'js',
    born:2015
}

// var x = obj.main
// var y = obj.name
// var{name:x,born:y,main:z,instructor:w}=obj
var x,y,z
({name:x,main:y}=obj)


function Employee(name,age){
    return{
        name,
        age
    }
}

var emp = Employee('ahmed',10)
console.log(emp)

////////////////////////////
var str ="      welcome to javascript      "
console.log(str.includes("we"))//true or false
console.log(str.search("we"))//index
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())

var mystr = "new javascript object"
console.log(mystr.startsWith('ja'))
var abc = mystr.repeat(0)


//template
function test(){
    var x =10
    var name ="ahmed"
    return `your name is ${name} and your age is ${x}`
}

console.log(test())

/////////////////////////////
// Array API
var arr=[1,2,3,4,5]
console.log(arr.find(function(num){
return num==6
}))

var newarr = arr.map(function(val){
    return "number is:"+val
})

// arr.forEach---looping

///////////////////////////////////////
// Number API
console.log(isFinite(123))//true
console.log(isFinite("123"))//true
console.log(isFinite("123a"))//false
console.log(Number.isFinite(123))//true
console.log(Number.isFinite("123"))//false
console.log(isNaN(123))//false
console.log(isNaN("123"))//false
console.log(isNaN("abc"))//true
console.log(Number.isNaN("123"))//false
console.log(Number.isNaN("abc"))//false
console.log(Number.isNaN(123))//false
console.log(Number.isNaN(NaN))
//x== NaN



