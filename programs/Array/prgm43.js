//wap to find the duplicate numbers from an array

a=[10,20,30,20,30,30,10,40,50,60,10,10]
//0/p =[10,20,30]
len=a.length
dup=[]
for(i=0;i<len-1;i++)
{   fl=0
    for(j=i+1;j<len;j++)
    {
        if(a[i]==a[j] && a[j]!='v')
        {
            fl=1
            a[j]='v'
        }
    }
    if(fl==1)
    {
        dup.push(a[i])
    }

}

if(dup=='')
    console.log(`No duplicate`);
else
console.log(dup);


