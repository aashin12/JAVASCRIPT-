text = 'HAI HELLO ALL HELLO WORLD'
//wap to print the word count from the given string
//o/p = {HAI:1, HELLO:2, ALL:1, WORLD:1}

words = text.split(' ')
i=0
j=i+1
obj={}

for(let x of words){
  if(x in obj)
    obj[x]+=1
  else
    obj[x]=1
}
console.log(obj);

//
text.split(' ').forEach((item) => item in obj?obj[item]+=1: obj[item]=1);
console.log(obj);
