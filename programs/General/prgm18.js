//wap to print the factorial of given number
//eg 4!=1*2*3*4

// num=5
// i=1
// product=1
// while(i<=num){
//     product*=i   //product = product * i
//     i++
// }
// console.log(`Factorial is ${product}`);


//wap to check a given num is armstrong or not
//eg 153=> (1**3)+(5**3)+(3**3)=153

num=370
len=(num+"").length
org=num
sum=0
while(num>0){
    d=num%10;
    num=parseInt(num/10)
    sum+=d**len
}

if(org==sum){
    console.log(`The num is armstrong`);
    
}else{
    console.log(`The num is not armstrong`);
}

