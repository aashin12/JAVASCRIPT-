//wap to display 'fizz' when a num is divisible by 3,'buzz' when the num is divisible by 5 and 'fizzbuzz' when it is divisible by 15

num=15

if(num!=0){


if(num%3==0 && num%5==0){
    console.log(`FizzBuzz`);
    
}else if(num%3==0){
    console.log(`Fizz`);
    
}else if(num%5==0){
    console.log(`Buzz`);
    
}else{
    console.log(`Not divisible`);
    
}
}else{
    console.log(`num is zero`);
    
}