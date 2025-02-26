//wap to print the lcm of two given num

a1=90
b1=100

num=Math.max(a1,b1)
val=num

while(true){
    if(num%a1==0 && num%b1==0){
        console.log(num);
        break
    }
    num+=val
}