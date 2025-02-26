//wap to display the revrse of a given num

num=124
i=1
rev=0

while(num>0){

    d=num%10;
    rev=rev*10+d;
    num=Math.floor(num/10);   //parseInt - for string as well as number ,Math.floor - only for numbers
    
}
console.log(rev);

