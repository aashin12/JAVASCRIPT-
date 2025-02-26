//wap to return a new array with elemnts with following condition

//if the parent array contains elemnts greater than or equal to 13 then decremnt by 1
//if the parent array contains elemnts less than 13 then incremnt with 1
// a=[10,11,12,13,14]

a=[10,11,12,13,14]
sq = a.map((num)=>
    num>=13?--num:++num)
console.log(sq);


