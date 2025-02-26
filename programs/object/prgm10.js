products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
] 



//1. print product name only

console.log("\nProduct Names:");
products.forEach(product => console.log(product.pName));
   console.log(`--------------------------------------`);
   
//2. print all mobile details whose display is lcd

console.log("\nMobiles details with LCD Display:");
products.filter(product => product.display === 'lcd').forEach(product => console.log(product));

console.log(`----------------------------------------`);

//3. print 5g mobile phone name
     
console.log("\n5G Mobile Phones:");
products.filter(product => product.band === '5g').forEach(product => console.log(product.pName));
     
console.log(`---------------------------------`);
     
//4. sort mobile based on price
  
console.log("\nMobiles Sorted by Price:");
// let sortedProducts = [...products].sort((a, b) => a.price - b.price)
//    sortedProducts.forEach(item => console.log(item.pName))

products.sort((a,b)=>a.price - b.price).forEach(item=>console.log(item.pName))
console.log(`---------------------------------`);

//5. print costly mobile

costlyMobile = products.reduce((n1, n2) => (n1.price > n2.price ? n1: n2)).pName
console.log("\nMost Expensive Mobile:", costlyMobile);

console.log(`---------------------------------`);


//6. print low cost mobile

cheapMobile = products.reduce((n1,n2) => (n1.price < n2.price ? n1 : n2)).pName
console.log("\nLeast Expensive Mobile:", cheapMobile);