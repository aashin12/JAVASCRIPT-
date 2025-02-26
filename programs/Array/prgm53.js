a=[1,2,3,4,5,6]
//wap to find all even numbers from the given array

even = a.filter((num)=>num%2==0)
console.log(even);

//wap to print numbers greater than or equal to 4

greater = a.filter((num)=>num>=4)
console.log(greater);

firsteven = a.find((num)=>num%2==0)
console.log(firsteven);
