/**
 * Inhirtance-adv-js
 * Classes
 * modules
 * proxy
 * promises
 */


// /**Inheritance */
// var Employee = function(nm,salary,id,dept){
//     /**constructor person() */
//     // Person(nm,id)
//     Person.call(this,nm,id)
//     // this.empName = nm
//     // this.empId=id
//     this.empSalary=salary
//     this.empDept=dept

// }

// // Employee.prototype.displayInfo = function(){
// //     return `your name is ${this.empName}`
// // }


// var Person =function(nm,id){
//     if(this.constructor== Person){
//         throw 'Abstract Class'
//     }
//     this.name = nm
//     this.id = id
// }

// Person.prototype.addr = "cairo"
// Person.prototype.setAdd = function(val){
//     this.addr = val
// }

// // Employee.prototype = Person.prototype
// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee
// Employee.prototype.displayInfo = function(){
//     return `your name is ${this.empName}`
// }





// var emp1 = new Employee("ahmed",5000,123,"sd")

/**Classes */

class User{

    // var addrr="123"//XXXXXXXXXError
    abc = 10
    #userName//private
    constructor(nm,id){
        if(this.constructor== User){
            throw 'Abstract Class'
        }
        this.userId = id//public
        this.#userName = nm
    }

    get UserName(){
        return this.#userName
    }

    set UserName(val){
        this.#userName = val
    }

    display(){
        return `your name ${this.#userName} 
        your id ${this.userId}`
    }

    static fun(){
        return 'abc'
    }

    static key ="10"

    toString(){
        return `${this.#userName}`
    }
}


User.prototype.displayInfo = function(){
    return `Id :: ${this.userId}`
    
}

// var u1 = new User("ahmed",10)
// console.log(u1)


class Employee extends User{
    constructor(nm,id,Salary){
        super(nm,id)        
        this.empSalary = Salary        
    }

    toString(){
        return `i am new Employee and my name is ${this.UserName}`
    }
}

// var emp1 = new Employee("ali",123,1)
/************************************** */
