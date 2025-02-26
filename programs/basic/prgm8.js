// wap to check a num is positive or negative

num = 0
if(num>0)
{
    console.log(`The num is positive`);
    
}else if(num==0){
    console.log(`The num is zero`);
    
}else{
    console.log(`The num is negative`);
    
}

console.log(`---------------------------`);

console.log(num>0?`The num is positive`:num==0?`The num is zero`:`The num is negative`);

