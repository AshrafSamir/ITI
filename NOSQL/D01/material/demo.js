db.getName();
show collections
db.Employees.insertOne({name:"hhgh"})
db.Employees.insertOne({name:"hadeer"})
show collections
//createCollection
//db.createCollection("")
//db.Employees.insertOne({name:"hhgh"})
db.Employees.find()
db.students.insertOne({_id:1,name:"hadeer"})
db.students.insertOne({_id:1,name:"hadeer"})
db.students.find()
db.students.insertOne({_id:"a",name:"hadeer"})

//primarykey
//_id ,, objectId   bson

db.Employees.drop()

db.instructors.insertOne({_id:82,firstName:"samia",lastName:"Ahmed" ,age:33})
db.instructors.find()

let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
               
		
		];


db.instructors.insertMany(instructorsArray)
//selsct * from instructors
db.instructors.find()   //findall 
db.instructors.findOne() 

//find(condition,projection) 
db.instructors.find({})    //findall 


db.instructors.find({},{_id:0,firstName:true,lastName:1})
db.instructors.find({},{salary:0,firstName:0})
db.instructors.find({age:21},{firstName:1,lastName:1})
db.instructors.find()
db.instructors.find({age:21,lastName:"hesham"},{firstName:1,lastName:1})


db.instructors.find({firstName:"mona"},{lastName:"omar"},{firstName:1,lastName:1})







