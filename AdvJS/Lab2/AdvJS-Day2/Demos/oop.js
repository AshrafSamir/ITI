
function Ahmed(){
    
    this.val="ahmed"
}

//Ahmed()











//constructor Pattern
//class Employee{
//ctor
var Employee = function (nm="ali", age=10, id="123-UI") {//overloading
    if(typeof arguments[0]=="string"){
        
    }
    //default args|params
    this.empName = nm||"Ali";
    this.empAge = age===undefined?10:age;
    this.empID = id;
    this.disp = function (x) {
        console.log(this.empName+" "+x);
    }
}

//member fun

//}

obj={
    empName:"kareem"
}
var emp = new Employee("ali",10,"123-ui");
var emp2 = new Employee(10,"ali");
var emp3 = new Employee("abc");//brand new object
emp.disp.call(obj);//obj--->explicit binding
var objFun=emp.disp.bind(obj,"---");//obj--->explicit binding
objFun()
emp.disp()//caller Obj--->Implicit binding
//disp()//window-->Global Obj--->Default Binding



//Factory function pattern
//var Employee = function (nm, age, id) {
    /* var obj = {};
     obj.empName = nm;
     obj.empAge = age;
     obj.empID = id;
     */
  /*  return {
        empName: nm,
        empAge: age,
        empID: id
    };

}

var emp = Employee("ali", 10, "SD-123-UI");
*/