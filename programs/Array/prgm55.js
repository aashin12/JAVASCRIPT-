a=[1,2,3,4,5,6]
//wap to check whether the given array contains even number

even = a.some((num)=>num%2==0)
console.log(even);

//splice

colours = ['red','blue','green','yellow','white']
console.log(colours);
//delete blue and add purple

colours.splice(1,1,'purple')
console.log(colours);

colours.splice(2,0,'black')
console.log(colours);

console.log(colours.includes('green'));
console.log(colours.indexOf('green'));

x = colours.slice(0,3)
console.log(x);

y=colours.slice(-3)  //this will give 3rd item from last till end
console.log(y);

