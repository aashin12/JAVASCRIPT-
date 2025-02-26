
n=5
h=11
for(i=1;i<=n;i++){
    str=''
    for(j=n-i;j>=1;j--)
    {
        str+="   "
    }
    for(k=1;k<=2*i-1;k++)
    {
        str+=`${h} `
         h++
    }
    console.log(str);
    
}