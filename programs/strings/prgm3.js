//wap to display all the vowels from the given string

str = 'Good afternoon'
i=0
vowels=['a','A','i','I','o','O','u','U']
while(i<str.length)
{
    if(vowels.includes(str[i]))
        console.log(str[i]);
        i++
}

// Array.from(str).filter((item)=>vowels.includes(item)).forEach((item)=>console.log(item))
console.log(`------------------------------------`);

//wap to check a given string is palindrom or not

str='malayalam'
len = str.length
fl=0
i=0
while(i<(len/2))
{
    if(str[i]!=str[len-1-i])
        fl=1
    i++
}
if(fl)
    console.log("not a palindrome");
else
  console.log("palindrome");
    