//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 

console.log("District having Highest +ve case: ");

highestcase = covid_data.reduce((n1,n2)=>(n1[3] > n2[3] ? n1 : n2));
console.log(highestcase[1]);
console.log(`----------------------------------------`);


//2. district having Highest 1st dose vaccine

console.log("District having Highest 1st dose vaccine:");

highest1stvaccine = covid_data.reduce((n1,n2)=>(n1[5] > n2[5] ? n1 : n2));
console.log(highest1stvaccine[1]);
console.log(`----------------------------------------`);


//3. district having lowest death rate
 console.log("District having lowest death rate");
 
 lowestdeath = covid_data.reduce((n1,n2)=>(n1[3] < n2[3] ? n1 : n2));
 console.log(lowestdeath[1]);
 
console.log(`----------------------------------------`);


//4. sort data with +ve case in descending order

console.log("Data with +ve case in descending order");

covid_data.sort((a,b)=>b[2]-a[2]).forEach((item)=>console.log(item[1]))
console.log(`--------------------------------------------`);


//5. is district with +ve cases > 15000
 console.log("Is District with +ve cases > 15000");
 
positivecase = covid_data.some(p => p[2]>15000)
console.log(positivecase);
console.log(`------------------------------------`);


//6. sort data with 1st dose vaccine ascending order

console.log("Data with 1st dose vaccine ascending order");

covid_data.sort((a,b)=>a[5]-b[5]).forEach((item)=>console.log(item[1]))
console.log(`------------------------------------------------`);

//7. Print Thrissur details

console.log("Thrissur details:");

thrissurdetails = covid_data.find((item)=>item[1] === 'Thrissur')
console.log(thrissurdetails);
console.log(`--------------------------------------------`);


  


//8. Print total number of positive cases

console.log("Total number of positive cases");

totalpositive = covid_data.map((num)=>num[2]).reduce((n1,n2)=>n1+n2)
console.log(totalpositive);
console.log(`-------------------------------------------`);



//9. Print total number of curred cases

console.log("Total number of cured cases");

totalcured = covid_data.map((num)=>num[4]).reduce((n1,n2)=>n1+n2)
console.log(totalcured);
console.log(`-------------------------------------------`);


//10. Print curred cases in Idukki

console.log("Curred cases in Idukki");

idukkicuredcase = covid_data.find((item)=>item[1] === 'Idukki')
console.log(idukkicuredcase[4]);
