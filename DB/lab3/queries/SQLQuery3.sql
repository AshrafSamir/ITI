/*1*/ select dnum,dname,fname,ssn from departments inner join Employee on MGRSSN = SSN
/*2*/ select pname, dname from Departments inner join Project on Departments.Dnum = Project.Dnum
/*3*/ select  Employee.Fname, Dependent.* from Employee inner join Dependent on Dependent.ESSN = Employee.SSN
/*4*/ select Project.Pnumber, Project.Plocation, Project.Pname from Project where City like '%Alex%' or Plocation like '%Cairo%'
/*5*/ select * from Project where Project.Pname like 'a%'
/*6*/ select Employee.* from Employee inner join Departments on Employee.Dno = Departments.Dnum and Departments.Dnum = 30
/*7*/ select Employee.Fname from Employee, Departments, Project, Works_for where Employee.Dno = Departments.Dnum and Works_for.ESSn =Employee.SSN and Works_for.Pno = Project.Pnumber and Project.Dnum = Departments.Dnum and Departments.Dnum = 10 and Project.Pname = 'AL Rabwah'  and Works_for.Hours >= 10
/*8*/ select x.Fname as empl, y.Fname as super from Employee as x, Employee as y where x.Superssn = y.SSN and y.Fname like 'kamel%'
/*9*/ select Employee.Fname, Project.Pname from Employee, Works_for, Project where Employee.SSN = Works_for.ESSn and Works_for.Pno = Project.Pnumber order by Project.Pname
/*10*/ select Project.Pnumber, Departments.Dname, Employee.Lname, Employee.Address, Employee.Bdate from Project, Departments, Employee where Project.Dnum = Departments.Dnum and Departments.MGRSSN = Employee.SSN and Project.Plocation like '%cairo%'
/*11*/ select * from Employee as x , Employee as y where x.Superssn = y.SSN 
/*12*/ select * from Employee left outer join Dependent on Employee.SSN = Dependent.ESSN
/*13*/ insert into Employee (Dno, SSN, Superssn, Salary) values(30, 102672, 112233, 3000)
/*14*/ insert into Employee (Dno, SSN) values(30, 102660)
/*15*/ update Employee set salary+=Salary*0.2 where Employee.SSN = 102672 
