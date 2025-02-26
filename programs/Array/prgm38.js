fruits = ['Apple','Orange','kiwi','pineapple']

for(i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}

console.log(`--------------------------------`);

for(let x in fruits)
{
    console.log(fruits[x]);
    
}

console.log(`---------------------------------`);

for(let x of fruits)
{
    console.log(x);
    
}