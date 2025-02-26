//wap to find the highest expense
//wap to find the lowest expense
//wap to find the total expense

expense=[12000,5000,60000,1200,50]
max=expense[0]
min=expense[0]
sum=0

for(let num of expense)
{
    if(num>max)
        max=num
    if(num<min)
        min=num
    sum+=num

}
console.log("Highest expense is",max);
console.log("Lowest expense is",min);
console.log("The total expense is",sum);
