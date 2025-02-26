//1
//1 2
//1 2 3
//1 2 3 4

n=4
for(i=1;i<=n;i++){
    str=''
    for(j=1;j<=i;j++){
        str+=`${j} `
    }
        console.log(str);
              
}

console.log(`----------------------------------`);

n=4
for(i=1;i<=n;i++){
    str=''
    for(j=1;j<=n;j++){
        str+=`${j} `
    }
        console.log(str);
              
}

console.log(`----------------------------------`);

n=4
for(i=1;i<=n;i++){
    str=''
    for(j=1;j<=n;j++){
        str+=`${i} `
    }
        console.log(str);
              
}

console.log(`----------------------------------`);

n=4
for(i=n;i>=1;i--){
    str=''
    for(j=1;j<=i;j++){
        str+=`* `
    }
        console.log(str);
              
}

console.log(`-------------------------------`);

//*
//* *
//* * *
//* * * *
//* * * * * 
//* * * *
//* * * 
//* *
//*

n=5
for(i=1;i<=n;i++){
    str=''
    for(j=1;j<=i;j++){
        str+=`* `
    }
    console.log(str);
    
}
for(i=n-1;i>=1;i--){
    str=''
    for(j=1;j<=i;j++){
        str+=`* `
    }
    console.log(str);
    
}

console.log(`-----------------------`);

 n = 5;

for ( i = 1; i < 2 * n; i++) {
     str = '';
     if(i<=n)
     {
        k=i
     }
     else{
        k=2*n-i
     }
    for (let j = 1; j <=k ; j++) {
        str += '* ';
    }
    console.log(str);
}
