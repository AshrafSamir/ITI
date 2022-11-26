/* 1 */ select * from employee
/* 2 */ select fname,lname,salary,dno from employee
/* 3 */ select pname,plocation,dnum from project
/* 4 */ select fname+' '+lname, salary*12.1 as [ANNUAL COMM] from employee
/* 5 */ select ssn, fname+' '+lname from employee where salary > 1000
/* 6 */ select ssn, fname+' '+lname from employee where salary*12 > 10000
/* 7 */ select fname +' '+lname,salary  from employee where employee.Sex = 'f' 
/* 8 */ select dnum , dname from departments where MGRSSN = 968574
/* 9 */ select plocation , pnumber , pname from project where dnum = 10
 
