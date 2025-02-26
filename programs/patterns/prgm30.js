n=3

for(i=1;i<=n;i++)
{
    str=''
    for(j=1;j<i;j++)
    {
      str+='  '
    }
    for(k=2*n-2*i+1;k>=1;k--)
    {
        str+='* '
    }
    
     console.log(str);
     
}

console.log(`------------------------------------`);

n=5
for(i=1;i<=n;i++)
{
    str=''

  for(j=1;j<=n;j++)
{
    if(i==1 || i==n || i==j || i+j==n+1)
    {
        str+="* "
    }
    else{
        str+="  "
    }
}
  console.log(str);
  
}
