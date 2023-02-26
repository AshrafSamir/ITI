/*obj={
    alert:function(){},
    setTimeout:function(cb,ms){
        //
        //
        //after ms
        cb()//global object---->window object
        
        
        
        
    }
}
*/

/*
function Person(nm, id) {
    var obj = {}
    Object.defineProperties(obj, {
        objNm: {
            value: nm,
            writable: true,
            configurable: true,
            enumerable: true
        },
        objID: {
            value: id,
            writable: true,
            configurable: true,
            enumerable: true
        }
    })

    Object.defineProperty(obj, "objNm", {
        value: nm,
        writable: true,
        configurable: true,
        enumerable: true
    });

    Object.defineProperty(obj, "objID", {
        value: id,
        writable: true,
        configurable: true,
        enumerable: true
    });


    return obj

}

*/
//ctor
function Employee(nm, id, yrbrn) {
    //private members
    var yearBorn = yrbrn; ///private member
    //var self=this;

    //private Method
    //inner function
    var privateFun = (function () {
        console.log(this.empName + " " + this.empID);

    }).bind(this); //hard binding

    this.show = function () {
        //var x=this;//_this|that|self|_self|_that
        //

        // setTimeout(function () {

        console.log(this.empName + " " + this.empID);

        //}, 2000)

    }
    //this.empName = nm

    Object.defineProperty(this, "empName", {
        value: nm,
        //writable:
    })

    //this.empID = id

    //accessor descriptor
    Object.defineProperty(this, "empID", {
        get: function () {
            return id;
        },
        set: function (val) {
            id = val
        }

    })


    this.disp = function () {
        this.empID = "123";
        privateFun(); ///
    }

    privateFun() ///window

    this.getYearBorn = function () { //privilged function----
        return yearBorn
    } //inner
    /*
        this.setYearBorn = function (val) {
            yearBorn = val;
        }
    */
}

//function Object
//Class Property=Static Prop
Employee.Location = "Cairo";

//Class Method=Static Method
Employee.getInfo = function () {
    console.log(this.Location);
}

Employee.getInfo();







console.log(Employee.Location);

var emp = new Employee("ali", "SD-123-UI", 1990);
/*for (var i in emp) {
    console.log(i);

}
*/

emp.getYearBorn();
//emp.privateMethod();
