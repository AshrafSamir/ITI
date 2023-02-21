db.instructors.find()
db.instructors.insertOne({ firstName: "dummy", lastName: "dummy 2" })
db.instructors.deleteOne({ firstName: "dummy" })
db.instructors.deleteMany()
db.instructors.findOne({ age: 21, lastName: "hesham" }, { _id: 0, firstName: 1 }) //ifage==21

let instructorsArray = [{
    _id: 10, firstName: "noha", lastName: "hesham",
    age: 27, salary: 3500,
    address: { city: "cairo", street: 10, building: 8 },
    courses: ["js", "mvc", "signalR", "expressjs"]
},

{
    _id: 11, firstName: "mona", lastName: "ahmed",
    age: 30, salary: 3600,
    address: { city: "cairo", street: 20, building: 8 },
    courses: ["es6", "mvc", "signalR", "expressjs"]
},

{
    _id: 12, firstName: "mazen", lastName: "mohammed",
    age: 23, salary: 7040,
    address: { city: "Ismailia", street: 10, building: 8 },
    courses: ["asp.net", "mvc", "EF"]
},

{
    _id: 13, firstName: "ebtesam", lastName: "hesham",
    age: 11, salary: 7500,
    address: { city: "mansoura", street: 14, building: 3 },
    courses: ["js", "html5", "signalR", "expressjs", "bootstrap"]
}


];

db.instructors.insertMany(instructorsArray)
db.instructors.find()
//condition find operators
//1-comparisons
//2-logical operator
//3-Array
//4-element operator
//5-embeded object

//embeded object
db.instructors.find({ "address.city": "cairo" })
db.instructors.find({ address: { city: "cairo" } })  //address==={city:"cairo"}
//db.instructors.find({'address["city"]':"cairo"},{"address.city":1})
db.instructors.find({ "address.city": "cairo" }, { address: { city: 1 } })
//comparison  (gt,lt,lte, ne , e)
db.instructors.find({ age: { $gte: 21 } })  //age>21
db.instructors.find({ age: { $gte: 21 }, firstName: "mazen" })

db.instructors.find({ age: { $in: [21, 27] } })

//logical operators
db.instructors.find({ $or: [{ age: { $gt: 21 } }, { lastName: "hesham" }] })

//elementOperator
db.instructors.find().forEach((ins) => {
    print(`${ins.firstName} ,courses ,${ins.courses ?.length}`)
})

//1-exists
db.instructors.find({ courses: { $exists: true } }).forEach((ins) => {
    print(`${ins.firstName} ,courses ,${ins.courses.length}`)
})

//2-type
db.instructors.find({ salary: { $type: "number" } })
db.instructors.find()

//Array operator
db.instructors.find({ courses: "html5", courses: "mvc" }, { courses: 1 })
db.instructors.find({ $and: [{ courses: "html5" }, { courses: "js" }] })

//all
db.instructors.find({ courses: { $all: ["html5", "js"] } })
//size
db.instructors.find({ courses: { $size: 3 } })

///update
//update, updateOne, updatemany

updateMany("condition", "updateCommand", "options")
//change field value
db.instructors.updateMany({ firstName: "ebtesam" }, { $set: { lastName: "ali" } })
db.instructors.find()
//add field
db.instructors.updateMany({ firstName: "samia" }, { $set: { salary: 3000 } })

//remove field
db.instructors.updateMany({ firstName: "samia" }, { $unset: { salary: "lkhj" } })

//rename
db.instructors.updateMany({}, { $set: { Gender: "male" } })
db.instructors.updateMany({}, { $rename: { Gender: "gender" } })

db.instructors.updateMany({ firstName: "mirah" }, { $set: { lastName: "anas" } }, { upsert: true })
//////////
//upnormal
//objects  address
db.instructors.updateMany({ _id: 7 }, { $set: { "address.street": 10 } })
db.instructors.updateMany({ _id: 7 }, { $set: { "address.floor": 40 } })
db.instructors.updateMany({ _id: 7 }, { $rename: { "address.floor": "address.floor Num" } })
    db.instructors.updateMany({ _id: 7 }, { $unset: { "address.floor Num": 40 } })
                                                                                        



db.instructors.find