/*1.	Display (Using Union Function)
a.	 The name and the gender of the dependence that's gender is Female and depending on Female Employee.
b.	 And the male dependence that depends on Male Employee.
*/ select Dependent.Dependent_name, Dependent.Sex
from Employee, Dependent
where Employee.SSN = Dependent.ESSN and Dependent.Sex ='f' and Employee.Sex ='f'
union
select Dependent.Dependent_name, Dependent.Sex
from Employee, Dependent
where Employee.SSN = Dependent.ESSN and Dependent.Sex ='m' and Employee.Sex ='m'

/*2.	For each project, list the project name and the total hours per week (for all employees) spent on that project.*/
select Project.Pname, sum(Works_for.Hours)
from  Works_for, Project
where  Works_for.Pno = Project.Pnumber
group by Project.Pname

/*3.	Display the data of the department which has the smallest employee ID over all employees' ID.*/select Departments.*
from Departments,Employee
where Departments.Dnum = Employee.Dno
and Employee.SSN = (select min(Employee.SSN) from Employee)

/*4.	For each department, retrieve the department name and the maximum, minimum and average salary of its employees.*/
select Departments.Dname, min(Employee.Salary), max(Employee.Salary), avg(Employee.Salary)
from Departments, Employee
where Departments.Dnum = Employee.Dno
group by Departments.Dname

/*5.?	List the full name of all managers who have no dependents.*/select y.Fname+' '+y.Lname
from Employee as x,Employee as y
where x.Superssn = y.SSN  
except
select Employee.Fname+' '+Employee.Lname
from Employee, Dependent
where Employee.Superssn = Dependent.ESSN  

/*6.	For each department-- if its average salary is less than the average salary of all employees-- display its number, name and number of its employees.*/
select Departments.Dnum, Departments.Dname, count(Employee.SSN),AVG(salary)
from Departments, Employee
where Departments.Dnum = Employee.Dno --and Employee.Salary < (select avg(Employee.salary)from Employee)
group by Departments.Dnum, Departments.Dname
having AVG(salary)< (select avg(Employee.salary)from Employee)

/*7.	Retrieve a list of employees names and the projects names they are working on ordered by department number and within each department, ordered alphabetically by last name, first name.*/select Employee.Fname, Employee.Lname, project.Pname
from Employee, Project, Departments
where Employee.Dno = Departments.Dnum and Departments.Dnum = Project.Dnum
order by Departments.Dnum, Employee.Fname, Employee.Lname

/*8.	Try to get the max 2 salaries using subquerys*/ select  (select MAX(salary ) from Employee)max1,max( Employee.salary )Max2
from employee where Employee.Salary < (select max(Employee.Salary) from Employee) 
--order by Employee.salary desc

/*9.	Get the full name of employees that is similar to any dependent name*/select Employee.Fname+' '+Employee.Lname ,Dependent.Dependent_name
from Employee, Dependent
where Dependent.Dependent_name  = Employee.Fname+' '+Employee.Lname

insert Dependent(essn, Dependent_name) values(112233,'Ahmed Ali')

/*10.	Display the employee number and name if at least one of them have dependents (use exists keyword) */
/*11.	In the department table insert new department called "DEPT IT" , with id 100, employee with SSN = 112233 as a manager for this department. The start date for this manager is '1-11-2006'*/insert Departments values('DEPT IT' ,100, 112233, '2006-11-01')

/*12.	Do what is required if you know that : Mrs.Noha Mohamed(SSN=968574)  moved to be the manager of the new department (id = 100), and they give you(your SSN =102672) her position (Dept. 20 manager) */
update Departments
set MGRSSN = 102672 where Departments.Dnum = 20
update Departments 
set MGRSSN = 968574 where Departments.Dnum = 100
update Employee
set Superssn = 102672 where SSN = 102660 


/*13.	Unfortunately the company ended the contract with Mr. Kamel Mohamed (SSN=223344) so try to delete his data from your database in case you know that you will be temporarily in his position.
Hint: (Check if Mr. Kamel has dependents, works as a department manager, supervises any employees or works in any projects and handle these cases).
*/
select * from Departments where Departments.MGRSSN = 223344
select * from Employee where Employee.Superssn = 223344
select * from Works_for where Works_for.ESSn = 223344
select * from Dependent where Dependent.ESSN = 223344

update Departments set Departments.MGRSSN = 102672 where Departments.MGRSSN = 223344
update Employee set Employee.Superssn = 102672 where  Employee.Superssn = 223344
update Works_for set ESSn = 102672 where  ESSn= 223344
delete Dependent where essn = 223344

/*14.	Try to update all salaries of employees who work in Project ‘Al Rabwah’ by 30%*/
update Employee 
set Salary += Salary*0.3 where Employee.SSN
in
(select Employee.SSN from Employee, Works_for, Project 
where Employee.SSN = Works_for.ESSn and Works_for.Pno = Project.Pnumber and Project.Pname ='Al Rabwah')
