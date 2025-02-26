//1
//0 1
//1 0 1 
//0 1 0 1 

n=4

for(i=1;i<=n;i++)
{
    str=''
    for(j=1;j<=i;j++)
    {
        if((i+j)%2==0)
            str+="1"
        else
        str+="0"
    }
    console.log(str);
    
}