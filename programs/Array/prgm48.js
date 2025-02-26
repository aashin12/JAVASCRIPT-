//nested array

arr=[[1,2],[3,4],[5,6]]
sum=0
for(let a of arr)
{
    for(let x of a)
    {
        sum+=x
    }
}
console.log(sum);
console.log(`-----------------------`);

//wap to find all even numbrs from the given array

arr=[[1,2],[3,4],[5,6]]
sum=0
for(let a of arr)
{
    for(let x of a)
    {
        if(x%2==0)
            console.log(x);
            
    }
}
console.log(`----------------------------`);
arr=[[1,2],[3,4],[5,6]]
k=arr.flat(Infinity)
console.log(k);
