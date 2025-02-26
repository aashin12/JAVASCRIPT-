//wap to print all armstrong num btw 8-500

for(num=8;num<=500;num++)
{
len=(num+"").length
org=num
sum=0
while(num>0){
    d=num%10;
    num=parseInt(num/10)
    sum+=d**len
}
if(org==sum){
    console.log(sum);
    
}
num=org
}

// wap to display hcf of given two numbers

a1=12
b1=28
hcf=0
for(i=1;i<=Math.min(a1,b1);i++){
    if(a1%i==0 && b1%i==0){
        hcf=i;
    }
}
console.log(hcf);
