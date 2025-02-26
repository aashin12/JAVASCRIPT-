//to find the largest word from the given string

str='my first programme e'

words=str.split(' ')
i=0
big=0
j=0
while(i<words.length)
{
    if(big<words[i].length)
        {
            big=words[i].length
            j=i
        }
    i++
}
console.log("largest string is:",words[j]);

//can also use split() and reduce() function 
