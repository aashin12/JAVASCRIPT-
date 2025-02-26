a=[1000,'Neel','developer','kochi',25000,3]

//key:value
employee = {
    empid:1000,
    empname:'Neel',
    empDesg:'developer',
    empLoc:'Kochi',
    empsal:25000,
    empExp:3
}

console.log(a);
console.log(employee);

console.log(employee['empDesg']);
console.log(employee.empDesg);
console.log(`------------------------------`);

//display all keys in an given object

for(let key in employee){
    console.log(key);
    console.log(employee[key]);  //here we cannot give employee.key - it wont work
    
}
console.log(`----------------------------`);
//add
employee['empAtten'] ='90%'
console.log(employee);

console.log(`---------------------------`);

Object.assign(employee,{'status':'true'})
console.log(employee);

console.log(`----------------------------`);
//update
console.log(employee['empExp'])

employee['empExp']+=5
console.log(employee['empExp'])

console.log(`-------------------------`);

//delete
delete employee.status
console.log(employee);
