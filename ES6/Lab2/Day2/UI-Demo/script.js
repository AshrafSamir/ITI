/**
 * Default parameter
 * Set
 * Map
 * Iterator
 * Symbol
 * Generator functions
 */


function fun(x=5,y=10,z){
    return x+y
}

console.log(fun(1,2))//undefined

function fun2(abc=2,xyz=3,obj){//={name:"ahmed",age:10}
    var defaultObj={
        name:"ahmed",
        age:10
    }
    // var result ={
    //     add:"rr"
    // }
    var result= Object.assign({},defaultObj,obj)
    return `your name is ${result.name} and your age is ${result.age}`
    // return `your name is ${obj.name} and your age is ${obj.age}`
}


console.log(fun2(1,2,{name:"ali",address:"xyz"}))//ali,10/ali,undefined

// maximumAge
// timeout
// accurracy

///////////////////////////////////////////////////////////
// collection--form collection/arguments/document--html collection
// key-value Object/Associative Array
// Set & Map
//1)Set key=value
// var mySet = new Set()
// mySet.add(1)
// mySet.add([1,2,3])

// mySet.add(1)
// var arr = [1,2,3]
// mySet.add(arr)//
// mySet.add(arr)//
// console.log(mySet)
// console.log(mySet.has(1))

// for(var [key,value] of mySet.entries()){//iterable objects String-Array-Set&Map
//     console.log('key is '+key +' value is '+value)
// }

// mySet.delete(1)
// mySet.clear()
// mySet.entries()--->key-value paire

////////////////////////////////////
// var myMap = new Map()
// myMap.set(1,"abc")
// myMap.set("xyz",function(){console.log("hello")})
// console.log(myMap)
// console.log(myMap.get("xyz")())
// myMap.set(1,"zzzzzzzzzzzzzz")
// for(var i of myMap){
//     console.log(i)
// }

// var newMap = new Map([[10,"x"],["bb",6],[5,{}]])

// var arr = [1,2,3,4,5]

// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for(var elem in arr){
//     console.log(arr[elem])
// }

// for(var elem of arr){
//     console.log(elem)
// }


// var iter = arr[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())



// // for(var elem of obj){
// //     console.log(elem)
// // }
// var iter = obj[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


//primitive data types
//number - string -boolean -null-undefined-Symbol

// var x = Symbol('abc')//
// var y = Symbol('abc')//

// var xx = Symbol.for(10)//Symbol(10)
// var yy = Symbol.for(10)//get--->Symbol(10)

// var myProp =Symbol('info')
// var obj ={
//     username:"ali",
//     [myProp]:"abc"
// }

// for(var i in obj){
//     console.log(obj[i])
// }

// console.log(obj[myProp])


// var result = "hello world".replace(/l/g,"_")
// console.log(result)

// // String.prototype.replace = function(obj,val){
// //     obj[Symbol.replace](this,val)
// // }

// // String.prototype.replace = function(){console.log('done')}
// var result = "hello world".replace(/l/g,"_")

// var myObj ={
//     [Symbol.replace]:function(str,val){
//         return str.substring(0,val)
//     }
// }

// var result = "hello world".replace(myObj,3)
// console.log(result)



//Generators
function * gen(){
    console.log("start function")

    yield 10
    //
    //
    //
    console.log('next step')
    yield "abc"

    console.log('again........')
    yield [1,2,3]

    console.log('done')

}

var outval = gen()
for(var elem of gen()){
    console.log(elem)//
}


function * evenNumbers(arr){
    for(var counter=0; counter < arr.length; counter++){
        if(arr[counter]%2==0){
            yield arr[counter]
        }
    }
}

var result = evenNumbers([1,2,3,4,5,6,8,12,11,9,5,22])
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next())

















