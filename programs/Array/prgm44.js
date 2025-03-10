//wap to find the pairs that give pairsum as 6 from the given array
a=[2,3,4,5]
len=a.length
fl=0
for(i=0;i<len;i++)
{
    for(j=i+1;j<len;j++)
    {
        if(a[i]+a[j]==6)
        {
            console.log("Pairs are",a[i],a[j]);
            fl=1
            
        }
          
    }
}
//condition && statement   - Truthy operator
fl==0 &&  console.log("There are no pairs with paisum 6");

   
    