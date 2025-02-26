//write a prog to swap between 2 given numbers

a=10
b=20
console.log(`The initial values are ${a} && ${b}`);


c=a
a=b
b=c
console.log(`The swapped values are ${a} && ${b}`);

console.log("----------------------------------------");

a=10
b=20
a=a+b
b=a-b
a=a-b
console.log(`The swapped values are ${a} && ${b}`);