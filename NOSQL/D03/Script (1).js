use facultySystemV2

db.createCollection("student", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                firstName: {
                    bsonType: "string"
                },
                lastName: {
                    bsonType: "string"
                },
                isFired: {
                    bsonType: "bool"
                },
                facultyId: {
                    bsonType: "number"
                },
                courses: {
                    bsonType: "array",
                    additionalProperties: false,
                    items: {
                        bsonType: "object",
                        additionalProperties: false,
                        properties: {
                            courseId: {
                                bsonType: "number"
                            },
                            grade: {
                                bsonType: "number"
                            }
                        }
                    }
                }
            }//end of properties
        }//end of schema 

    }//end of validator
})

db.createCollection("faculty", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                facultyName: {
                    bsonType: "string"
                },
                address: {
                    bsonType: "string"
                }
            }//end of properties
        }//end of schema 

    }//end of validator
})

db.createCollection("course", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                courseName: {
                    bsonType: "string"
                },
                finalMark: {
                    bsonType: "number"
                }
            }//end of properties
        }//end of schema 

    }//end of validator
})

db.course.insert([{ _id: 1, courseName: "course1", finalMark: 80 }, { _id: 2, courseName: "course2", finalMark: 80 }, { _id: 3, courseName: "course3", finalMark: 80 }
    , { _id: 4, courseName: "course4", finalMark: 80 }]);
db.faculty.insert([{ _id: 1, facultyName: "faculty1", address: "address1" }, { _id: 2, facultyName: "faculty2", address: "address2" },
{ _id: 3, facultyName: "faculty3", address: "address3" }, { _id: 4, facultyName: "faculty4", address: "address4" }])
db.student.insert([{ firstName: "mm", lastName: "mmm", isFired: false, facultyId: 2, courses: [{ courseId: 2, grade: 80 },{ courseId: 3, grade: 50 }] }]);
db.student.insert([{ firstName: "Ashraf", lastName: "samir", isFired: false, facultyId: 2, courses: [{ courseId: 2, grade: 80 },{ courseId: 3, grade: 50 }] }]);


//2. Display each student Full Name along with his average grade in all courses. $concat
    db.student.aggregate([
    {
        $match:{
            $or:[{firstName:{$exists:true}},{lastName:{$exists:true}}]
        }
    }//end of $match
    ,
    {
        $project:{
            fullName:{$concat:["$firstName", " " ,"$lastName"]},
            grade:"$courses.grade"
        }
    },
    {
        $unwind:{
            path:"$grade"
        }
    }
    ,
    {    
        $group:{
            _id:"$fullName",
            averageGrades:{
                $avg:"$grade"
            }
        }
    }
    
    ]//end of aggregate
    )
// 3. Using aggregation display the sum of final mark for all courses in Course collection.
db.course.find({});
db.course.aggregate([{
        
        $group:{
            _id:"null",
            sum_final_mark:{
                $sum:"$finalMark"
            }
        }
    }])
    
    
/*4. Implement (one to many) relation between Student and 
Course, by adding array of Courses IDs in the student object. 
• Select specific student with his name, and then display 
his courses. */    
db.student.find({})

db.student.aggregate([{    
       $match:{
            firstName:"Ashraf"
        }},{
        $lookup:{
            from: "course",
            localField: "courses.courseId",
            foreignField: "_id",
            as: "student_courses"  
        }
    }])

       /*4.Implement relation between Student and faculty by adding 
the faculty object in the student using _id Relation using 
$Lookup. 
• Select specific student with his name, and then display 
his faculty */
 
db.student.aggregate([{    
       $match:{
            firstName:"Ashraf"
        }},{
        $lookup:{
            from: "fauclty",
            localField: "facultyId",
            foreignField: "_id",
            as: "fc_course"  
        }
    }])
    
    
    

    