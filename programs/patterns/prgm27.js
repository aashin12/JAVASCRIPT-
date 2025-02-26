n=6

for(i=1;i<=n;i++){
    str=''
    for(j=1;j<=2*n-1;j++){
        if(j+i==n+1 || j-i==n-1 || i==n)
        str+=`* `
        else
        str+=`  `
    }

    console.log(str);
}
