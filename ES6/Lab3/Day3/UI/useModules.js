// import * as myMod from './MathLib.js'
import {add as myFun,sub,User } from './MathLib.js'
// console.log(myMod.add(1,2))
console.log(myFun(1,2))
console.log(sub(1,2))

class Employee extends User{
    constructor(nm,id){
        super(nm,id)
    }
}

var emp =new Employee("ahmed",10)
console.log(emp)