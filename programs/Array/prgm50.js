//foreach - access each items from a given array

a=[1,4,2,14,25]

//wap to find the square of each elements in the given array

a.forEach(num => {
    console.log(num**2);
    
});

sq = a.map((num)=>num**2)
console.log(sq);
console.log(`-----------------------------------`);

//wap to find thecube of the given array using map

pq = a.map((num)=>num**3)
console.log(pq);


