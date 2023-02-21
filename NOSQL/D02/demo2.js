//Array
db.instructors.updateMany({_id:6},{$set:{courses:"es6"}})

db.instructors.updateMany({_id:7},{$set:{"courses.0":"JS"}})

//anonymouse
db.instructors.updateMany({_id:7 ,courses:"mvc"},{$set:{"courses.$":"mongodb"}})

//push new ele
db.instructors.updateMany({_id:7},{$push:{courses:"nodeJs"}})

db.instructors.updateMany({_id:7},{$addToSet:{courses:"mvc"}})

//remove
db.instructors.updateMany({_id:7},{$pop:{courses:-1}})
//specified ele
db.instructors.updateMany({_id:7},{$pull:{courses:"nodeJs"}})

db.instructors.find({_id:7})