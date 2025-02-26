// * * * * *
// *       *
// *       *
// *       *
// * * * * *


n=5

for(i=1;i<=n;i++){
    str=''
    for(j=1;j<=n;j++)
    {
        if(j==1 || j==n || i==1 || i==n)
        {
            str+=`* `
        }
        else
        {
            str+="  "
        }
    }
    console.log(str);
    
}