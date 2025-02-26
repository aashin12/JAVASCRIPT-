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

console.log("All employee name ");

for(x of employee)
{
    console.log(x[1]);
    
}
console.log(`----------------------------------------`);

console.log("Total no of emplyee",employee.length);

console.log(`-----------------------------------------------`);

console.log(" Developer employee details");

for(x of employee)
{
    if(x[2]=='developer')
        console.log(x);
        
}
console.log(`------------------------------------------------`);

console.log("Employee whose salary > 30000");

for(x of employee)
{
    if(x[4]>30000)
        console.log(x[1]);
        
}

console.log(`---------------------------------------------------`);

console.log("Details of employee Laisha");
for(x of employee)
{
    if(x[1]=='Laisha')
        console.log(x);
        
}

