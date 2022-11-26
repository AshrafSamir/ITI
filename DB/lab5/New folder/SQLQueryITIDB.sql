/*1.	Retrieve number of students who have a value in their age. */
select count(Student.St_Age)
from Student where Student.St_Age is not null

/*2.	Get all instructors Names without repetition */
select  distinct Instructor.Ins_Name from Instructor

/*3.?	Display student with the following Format (use isNull function)*/
select Student.St_Id as 'Student ID', Student.St_Fname+' '+Student.St_Lname as 'Student Full Name', Student.Dept_Id as 'Department name'
from Student

/* 4.	Display instructor Name and Department Name 
Note: display all the instructors if they are attached to a department or not
*/
select Instructor.Ins_Name,Department.Dept_Name
from Instructor left outer join Department
on Instructor.Dept_Id = Department.Dept_Id

/*5.	Display student full name and the name of the course he is taking
For only courses which have a grade  
*/
select Student.St_Fname+' '+Student.St_Lname, Course.Crs_Name
from Student, Stud_Course, Course
where Student.St_Id = Stud_Course.St_Id and Stud_Course.Crs_Id = Course.Crs_Id and Stud_Course.Grade is not null

/*6.	Display number of courses for each topic name*/
select Topic.Top_Name, COUNT(Course.Crs_Id)
from Course, Topic where Course.Top_Id = Topic.Top_Id 
group by Topic.Top_Name

/*7.	Display max and min salary for instructors*/
select max(Instructor.Salary), min(Instructor.Salary)
from Instructor

/*8.	Display instructors who have salaries less than the average salary of all instructors.s */
select Instructor.Ins_Name
from Instructor where Instructor.Salary < (select avg(Salary) from Instructor)

/*9.	Display the Department name that contains the instructor who receives the minimum salary.*/
select distinct Department.Dept_Name
from Department, Instructor
where Department.Dept_Id = Instructor.Dept_Id and
Instructor.Salary = (select min(Instructor.Salary)from Instructor)

/*10.	 Select max two salaries in instructor table. */
select top(2) Instructor.Salary from Instructor
order by Salary desc

/*11.    Select instructor name and his salary but if there is no salary display instructor bonus keyword. “use coalesce Function”*/
select Instructor.Ins_Name, coalesce(convert(char,Instructor.Salary),'instructor bonus')
from Instructor

/*12.	Select Average Salary for instructors */
select avg(salary) from Instructor

/*13.	Select Student first name and the data of his supervisor */
select x.St_Fname ,y.*
from Student as x, Student as y 
where x.St_super = y.St_Id

/*14.	Write a query to select the highest two salaries in Each Department for instructors who have salaries. “using one of Ranking Functions”*/
select *
from (select Department.Dept_Id, Instructor.Salary,Row_number() over(Partition by department.Dept_Id order by Instructor.salary desc) as RN
	  from Instructor, Department) as X
where  RN between 1 and 2


/*15.	 Write a query to select a random  student from each department.  “using one of Ranking Functions”*/
select *
from (select *,Row_number() over(order by newID() desc) as RN
	  from student) as X
where RN=1



