/*1.	Display the SalesOrderID, ShipDate of the SalesOrderHeader table (Sales schema) to show SalesOrders
that occurred within the period ‘7/28/2002’ and ‘7/29/2014’*/
select Sales.SalesOrderHeader.SalesOrderID from Sales.SalesOrderHeader 
where Sales.SalesOrderHeader.ShipDate between '2002-07-28' and '2014-07-29'

/*2.	Display only Products(Production schema) with a StandardCost below $110.00 (show ProductID, Name only)*/
select Production.Product.ProductID, Production.Product.Name from Production.Product where Production.Product.StandardCost < 110

/*3.	Display ProductID, Name if its weight is unknown*/
select Production.Product.ProductID, Production.Product.Name from Production.Product
where Production.Product.Weight is null

/*4.	 Display all Products with a Silver, Black, or Red Color*/
select Production.Product.* from Production.Product where Product.Color in ('Silver','Black','Red')

/*5.     Display any Product with a Name starting with the letter B*/
select Production.Product.* from Production.Product where Production.Product.name like 'B%'

/*
6.	Run the following Query
UPDATE Production.ProductDescription
SET Description = 'Chromoly steel_High of defects'
WHERE ProductDescriptionID = 3
Then write a query that displays any Product description with underscore value in its description.
*/
UPDATE Production.ProductDescription
SET Description = 'Chromoly steel_High of defects'
WHERE ProductDescriptionID = 3

select * from Production.ProductDescription where  Production.ProductDescription.Description like '%_%'

/*7.	Calculate sum of TotalDue for each OrderDate in Sales.SalesOrderHeader table for the period between
'7/1/2001' and '7/31/2014'*/

select sum(Sales.SalesOrderHeader.TotalDue) from Sales.SalesOrderHeader 
where Sales.SalesOrderHeader.DueDate between '2001-07-01' and '2014-07-31'

/*8.    Display the Employees HireDate (note no repeated values are allowed)*/

select distinct HumanResources.Employee.HireDate from HumanResources.Employee

/*9.?    Calculate the average of the unique ListPrices in the Product table*/
select distinct  avg(Production.Product.ListPrice) from Production.Product

/*10.	Display the Product Name and its ListPrice within the values of 100 and 120 the list should has the following format
"The [product name] is only! [List price]" 
(the list will be sorted according to its ListPrice value)*/
select concat('The '+Production.Product.Name,' is only! ',Production.Product.ListPrice) from Production.Product
where Product.ListPrice between  100 and 120

/*11.
a)	 Transfer the rowguid ,Name, SalesPersonID, Demographics from Sales.Store table  in a newly created table named [store_Archive]
Note: Check your database to see the new table and how many rows in it?
b)	Try the previous query but without transferring the data? 
*/
select rowguid ,Name, SalesPersonID, Demographics  into store_Archive
from Sales.Store

select * from store_Archive

drop table store_Archive

select rowguid ,Name, SalesPersonID, Demographics  into store_Archive
from Sales.Store
where 1=2

select * from store_Archive

/*12.	Using union statement, retrieve the today’s date in different styles using convert or format funtion*/
select convert(varchar,getdate(),1)
union
select format(GETDATE(),'yy-mm-dd' )