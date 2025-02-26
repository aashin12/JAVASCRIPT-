//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
//print total numbers of employee
//print developer employee details
//print employee whose salary > 30000
// print details of employee Laisha

employee.forEach(num => {
  console.log( num[1]);
   
});

console.log(`-----------------------------------`);

console.log("Total no of employee",employee.length);

console.log(`-----------------------------------`);

developer= employee.filter((emp)=>emp[2]=='developer')
console.log(developer);

console.log(`-----------------------------------`);

employee.filter((emp)=>emp[4]>30000).forEach((item)=>console.log(item[1]))

console.log(`-----------------------------------`);

laisha= employee.filter((emp)=>emp[1]=='Laisha')
console.log(laisha);

console.log(`-----------------------------------`);


//arrange the employee based on salary in descending order

console.log("employee based on salary in descending order");

 employee.sort((emp1,emp2)=>emp2[4]-emp1[4]).forEach(item=>console.log(item[1]))
console.log(`-----------------------------------`);

//arrange the employee based on experience in ascending order

console.log(`employee based on experience in ascending order`);

employee.sort((emp1,emp2)=>emp1[5]-emp2[5]).forEach(item=>console.log(item[1]))
console.log(`-----------------------------------`);

//find the total salary expense of the company
sum=0
employee.forEach((num)=>
    sum+=num[4]
 )
 console.log("Total salary expense of company is",sum);
 console.log(`---------------------------------------`);
 
 //find the highest salary

 highest = employee.reduce((n1,n2)=>n1[4]>n2[4]?n1:n2)[4]
 console.log(highest);
 console.log(`---------------------------------------`);

 //find the lowest salary

 lowest = employee.reduce((n1,n2)=>n1[4]<n2[4]?n1:n2)[4]
 console.log(lowest);