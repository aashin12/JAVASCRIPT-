//wap to check whether a given num is palindrom or not

num=121
rev=0
org=num
while(num>0){

    d=num%10;
    rev=rev*10+d;
    num=Math.floor(num/10);   //parseInt - for string as well as number ,Math.floor - only for numbers
    
}

if(org==rev){
    console.log(`The number is plaindrome`);
    
}else{
    console.log(`The number is not plaindrome`);
}