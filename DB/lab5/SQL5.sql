--Transact_sqL

select  Top(5) *
from student

select  Top(1) *
from student

select  Top(1) st_fname
from student

select Max(salary)
from Instructor

select top(2) salary
from Instructor
order by salary desc

select top(5) with ties *
from student
order by st_age desc
 
select Newid()  --GUID

select *,newID() as X
from Student
order by X

select top(1)*
from Student
order by newid()

-----------------------
--fullpath
--SErverName.DBname.SchemaName.objectName

select *
from Student

select *
from [DESKTOP-NQV7E6M].ITI.dbo.student

select *
from Company_SD.dbo.Project


select dept_name from Department
union all
select dname from Company_SD.dbo.Departments
---------------------
--select into    --DDL
select * into tab2
from Student

select * into tab3
from Student

select * into db2.dbo.student
from Student

select st_id,st_fname into tab4
from Student
where st_address='cairo'

select * 
from Student
where 1=2  --false condition  age<0

----------------------------
select st_fname+' '+st_lname as fullname
from Student
order by fullname

select st_fname+' '+st_lname as fullname
from Student
where fullname='ahmed hassan'

select st_fname+' '+st_lname as fullname
from Student
where st_fname+' '+st_lname='ahmed hassan'

select *
from (select st_fname+' '+st_lname as fullname
	  from Student) as newtable
where fullname='ahmed hassan'

select *
from (select *,Row_number() over(order by st_age desc) as RN
	  from student) as X
where RN=1

select *
from (select *,Dense_rank() over(order by st_age desc) as DR
	  from student) as X
Where DR=1
 

select *
from (select *,Row_number() over(Partition by dept_id order by st_age desc) as RN
	  from student) as X
where RN=1

select *
from (select *,Dense_rank() over(Partition by dept_id order by st_age desc) as DR
	  from student) as X
Where DR=1
 
select *
from (select *,Ntile(3) over(order by st_id) as G
		from student) as X
where G=1
------------------------------------------

select upper(st_fname),lower(st_lname)
from Student

select len(st_fname),st_fname
from Student

select substring(st_fname,1,3)
from Student

select substring(st_fname,3,3)
from Student

select *
from Student
where substring(st_fname,1,1)='a'

select *
from Student
where st_fname like 'a%'

select substring(st_fname,1, len(st_fname)-1)
from Student

--math
select Power(salary,2)
from Instructor

--case
select ins_name,salary,
               case
				when salary>=3000 then 'high salary'
				when salary<3000 then 'low'
				else 'No Data'
			   end as SAl
from Instructor

select ins_name,iif(salary>=3000,'high','low')
from Instructor

update instructor
	set salary=
	       case
		   when salary>=3000 then salary*1.20
		   else salary*1.10
		   end

insert into student(st_id,st_fname)
values(400,'ahmed')

insert into student(st_id,st_fname)
values(401,'ahmed'),(),(),()


insert into tab4
select st_id,st_fname from Student where St_Address='cairo'

















--execution order
--from
--join
--on
--where 
--group by
--having
--select
--order by
--top














