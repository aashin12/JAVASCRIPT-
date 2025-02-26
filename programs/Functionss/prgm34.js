//wap to find the sum of 2 num using arrow fuction

const sum = (num1,num2)=>{
    console.log("The sum is",num1+num2);
    
}
sum(3,4)

//////////////////////////////////////////

const add =(n1,n2)=> n1+n2
console.log(add(5,6));

// if there is only 1 statemnt the we can romve the curly bracket and return is done automatically.these steps can be ommited
// for the same reason arrow function is preffered from ES6

////////////////////////////////////////////

//wap to find odd or even
const oddeven = (num)=>{
    if(num%2==0)
        console.log(`The number is even`);
    else
        console.log(`The number is odd`);
}
oddeven(6)

//wap to find the cube

const cube = (num)=>num**3
console.log(cube(3));
