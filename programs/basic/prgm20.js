//wap tp print whole numbers from 1 to 5 using for loop

for(i=1;i<=5;i++){
    console.log(i);
    
}

console.log(`----------------------------------------`);
//wap to print 10-1 using for loop

for(j=10;j>=1;j--){
    console.log(j);
    
}

console.log(`----------------------------------------`);

//wap to print factorial of givn num using for loop

num=5
fact=1
for(k=1;k<=num;k++){
    fact*=k;
}
console.log(fact);

console.log(`----------------------------------------`);

//wap to create a loop which have the potential to print 1-10 numbers but print only 1-5

for(a=1;a<=10;a++){
    if(a<=5){
        console.log(a);
        
    }
    else
    break;
}