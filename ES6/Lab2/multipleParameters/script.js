let courseInfo = function (obj) {
  let defaultCourse = {
    courseName: "JS",
    courseDuration: 3,
    courseOwner: "Ashraf",
  };

  let keys = Object.keys(obj);

  if (keys.length > 3) throw "Don't pass more than 3 parameters";
  for (let key in obj) {
    if (!defaultCourse.hasOwnProperty(key)) throw "Wrong parameter name";
  }

  let result = Object.assign({}, defaultCourse, obj);

  return `course name is ${result.courseName} and course duration is ${result.courseDuration} and course owner is ${result.courseOwner}`;
};

console.log(courseInfo({ courseName: "React", courseDuration: 2000 }));

// console.log(courseInfo({courseName:"React",coursePrice:2000}))
