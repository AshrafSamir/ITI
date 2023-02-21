//    1)
// a- Display all documents in instructors collection
db.Instructors.find({});

// b- Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.Instructors.find({ salary: { $gt: 4000 } }, { firstName: 1, salary: 1 });

// c- Display all instructors with ages less than or equal 25.
db.Instructors.find({ age: { $lte: 25 } });

// d- Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).
db.Instructors.find(
  {
    $and: [
      { "address.city": "cairo" },
      { "address.street": { $in: [10, 14] } },
    ],
  },
  { firstName: 1, address: 1, salary: 1 }
);

// e- Display all instructors who have js and jquery in their courses (both of them not one of them).
db.Instructors.find({ courses: { $all: ["jquery", "js"] } });

// f-Display number of courses for each instructor and display first namewith number of courses
db.Instructors.find({ courses: { $exists: true } }).forEach((elem) => {
  print(
    `Instructor name : ${elem.firstName} , Courses Number : ${elem.courses.length}`
  );
});

/* g- Write mongodb query to get all instructors that have firstName and
    lastName properties , sort them by firstName ascending then by
    lastName descending and finally display their data FullName and age
    Note: use mongoDb sort method not javascript array method
*/

//db.Instructors.find({firstName:{$exists:true},lastName:{$exists:true}},).sort("firstName":1,last)
db.Instructors.find(
  { firstName: { $exists: true }, lastName: { $exists: true } },
  { firstName: 1, lastName: 1, age: 1 }
).sort({ firstName: 1, lastName: -1 });
// h- Find all instructors that have fullName that contains “mohammed”.

db.Instructors.find({
  $or: [
    { firstName: { $regex: "mohammed", $options: "i" } },
    { lastName: { $regex: "mohammed", $options: "i" } },
  ],
});
db.Instructors.find({
  $or: [{ firstName: "mohammed" }, { lastName: "mohammed" }],
});
// i- Delete instructor with first name “ebtesam” and has only 5 courses in courses
db.Instructors.deleteOne({ firstName: "ebtesam", courses: { $size: 5 } });

// j- Add active property to all instructors and set its value to true.
db.Instructors.updateMany({}, { $set: { active: true } }, { upsert: true });
// k- Change “EF” course to “jquery” for “mazen mohammed” instructor(without knowing EF Index)
db.Instructors.updateMany(
  { firstName: "mazen", lastName: "mohammed", courses: "EF" },
  { $set: { "courses.$": "jquery" } }
);
// l- Add jquery course for “noha hesham”.
db.Instructors.updateMany(
  { $and: [{ firstName: "noha" }, { lastName: "hesham" }] },
  { $addToSet: { courses: "jquery" } }
);

// m- Remove courses property for “ahmed mohammed ” instructor
db.Instructors.updateMany(
  { $and: [{ firstName: "ahmed" }, { lastName: "mohammed" }] },
  { $unset: { courses: 40 } }
);

// n- Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.Instructors.updateMany(
  { courses: { $size: 3 } },
  { $inc: { salary: -500 } }
);

// o- Rename address field for all instructors to fullAddress.
db.Instructors.updateMany({}, { $rename: { address: "fullAddress" } });

// p- Change street number for noha hesham to 20
db.Instructors.updateMany(
  { $and: [{ firstName: "noha" }, { lastName: "hesham" }] },
  { $set: { "fullAddress.street": 20 } }
);
