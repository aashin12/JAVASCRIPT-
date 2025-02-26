//input = 2  3   4        
//o/p =  24 369  4936

//2*12  3*123     4*1234
//2+22  3+33+333  4+44+444+4444 

input =4
i=1
str=''
while(i<=input){
   str=str+i
   i++
}
console.log(str*input);

console.log(`------------------------`);

input=3
i=1
num=0
while(i<=input){
  num= num *10+i
  i++
}
console.log(num*input);


console.log(`------------------------`);

input=2
i=1
sum=0
str=''
while(i<=input){
    str=str+input
    sum+=Number(str)
    i++
}
console.log(sum);




