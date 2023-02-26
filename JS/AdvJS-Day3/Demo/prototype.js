//ctor for Employee Objects
function Employee(nm, id, addr, yrbrn, age) {
    var yearBron = yrbrn; //private

    this.getYearBorn = function () {
        return yearBron;
    }

    this.empName = nm;
    this.empID = id;
    this.empAge = age;
    this.empAddr = addr;

    /*
    //override 
    this.toString = function () {
        return "this is employee " + this.empName +" was born in "+yearBron; // + " lives in " + this.empAddr;

    }
    */
    //this.toString();

}


Employee.prototype.show = function () {
    return this.empName + " " + this.empID + " " + this.empAddr;
}

//override
Employee.prototype.toString = function () {
    return "this is employee " + this.empName + " lives in " + this.empAddr;

}

Employee.prototype.valueOf = function () {
    return this.empAge;
}




//searching for obj prop-->prototype chaining------->__proto__------>[[P]]
//ctor
//protype property--(extension)
//parent Object
//GrandParent Object
//
//
//null

//searching for var value-->scope chaining
//local scope--innerFun
//outer--outerFun
//outermost
//global scope







var emp = new Employee("ali", "SD_123-UI", "123 st.", 1990, 10);
var emp2 = new Employee("kareem", "SD_155-UI", "123 st.", 1990, 15);
emp.empName;
emp.show();
emp.custFun = function () {
    console.log("ziad");
}

//var emp2 = new Employee("ali", "SD_123-UI", "123 st.", 1990);
//emp2.custFun()
