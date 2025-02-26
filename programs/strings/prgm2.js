str = 'luminar'
x = str.substring(2,7)
console.log(x);

j=str.slice(-5)
console.log(j);

str1 ='     hel  lo'
console.log(str1);

console.log(str1.trim());

text = 'Good evening all'

arr = text.split(' ')
console.log(arr);

arr = text.split('')
console.log(arr);


arr = text.split('e')
console.log(arr);

sentance = 'I come from kakkanad . i also work in kakkanad'
a=sentance.replace('kakkanad','kochi')
console.log(a);

sentance = 'I come from kakkanad . i also work in kakkanad'
a=sentance.replaceAll('kakkanad','kochi')
console.log(a);

str='luminar'
c=Array.from(str)
console.log(c);

console.log([...str]);
