//    *
//   * *
//  * * *
// * * * *

n=6

for(i=1;i<=n;i++){
    str=''
    for(j=n-i;j>=1;j--){
        str+=` `
    }
    for(k=1;k<=i;k++){
        str+=`* `
    }
    console.log(str);
    
}

console.log(`-------------------------------`);

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

n=5
for(i=1;i<=n;i++){

    str=''
    for(j=n-i;j>=1;j--){
        str+=` `
    }
    for(k=1;k<=i;k++){
        str+=`* `
    }
    console.log(str);
    
}
for(i=1;i<n;i++){

    str=''
    for(j=1;j<=i;j++){
        str+=` `
    }
    for(k=1;k<=n-i;k++){
        str+=`* `
    }
    console.log(str);
    
}