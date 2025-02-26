//wap to display the following output
//i/p = [4,5,6]
//o/p = [11,10,9]

arr=[4,5,6]
len=arr.length
arr1=[]
for(let num of arr)
{
    num+=5
    arr1[len-1]=num
    len--

}
console.log(arr1);
