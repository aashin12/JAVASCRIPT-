arr=[10,11,12,2,3,4]
//wap to check whether 2 is present in the given array

fl=0
for(let num of arr)
{
    if(num==2)
      { fl=1
       break
      }
        
        
}
if(fl==1)
    console.log(`Present`);
else
    console.log(`Not present`);
    
    