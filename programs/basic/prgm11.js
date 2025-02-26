//wap to display the largest num amomg 3 given numbers and arrange in descending order

num1=100
num2=200
num3=150

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`The second largest is ${num2}`);
        mid =num2
    }else{
        console.log(`The second largest is ${num3}`);
        mid=num3
    }
}else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`The second largest is ${num1}`);
        mid=num1
    }else{
        console.log(`The second largest is ${num3}`);
        mid=num3
    }
}else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`The second largest is ${num1}`);
        mid=num1
    }else{
        console.log(`The second largest is ${num2}`);
        mid=num2
    }
}

if(num1>mid){
    first=num1
}else if(num1<mid){
    last=num1
}


if(num2>mid){
    first=num2
}else if(num2<mid){
    last=num2
}


if(num3>mid){
    first=num3
}else if(num3<mid){
    last=num3
}

console.log(`The decreasing order is ${first}>> ${mid}>> ${last}`);




   
