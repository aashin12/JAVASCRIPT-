NewArray = [10,20,30,10,50,20,30,30,60]
//wap to find the number count
//{10:2,20:2,30:3,50:1,60:1}

obj={}
for(let x of NewArray){
    if(x in obj)
        obj[x]+=1
    else
       obj[x]=1
}
console.log(obj);


// 
console.log(`------------------------------`);

pattern = 'ABCBCDA'
//wap to find the first repeated letter
// B

obj={}
letters = [...pattern]
for(let x of letters){
    if(x in obj){
        console.log("The first repeated letter is:",x);
        break
    }
    else
    obj[x]=1
}