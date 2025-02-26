//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,0]
]
//1. display all product name
              console.log("Product names:");
              
             products.forEach(num => {
                console.log(num[1]);
                
                
             });
          
 console.log(`-----------------------------`);
 
//2. display product whose price < Rs.50
        
        console.log("Product whose price is < Rs 50");
        
       products.filter((x)=>x[2]<50).forEach(num=>{
                console.log(num[1]);
                
        })
 console.log(`---------------------------------`);
 
//3. print price of oreo
       console.log("The price of oreo is:");

       oreo = products.find((pro)=>pro[1]=='oreo')
            console.log(oreo[2]);
            
       
       console.log(`---------------------------------`);
//4. print costly product name
          
          costarray = products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
           console.log("Costly product is:",costarray[1]);
           
           console.log(`---------------------------------`);      
//5. display out of stock product
     
       console.log("Out of stock products:");
        products.filter(p => p[3] === 0).forEach((item)=>console.log(item[1]));
        
        
        
        console.log(`---------------------------------`);

//6. sort products based on stock in decsending order
            
// sortedByStockNames = [...products].sort((a, b) => b[3] - a[3]).map(p => p[1]); 
// console.log("Product names sorted by stock (descending):", sortedByStockNames);

          // spread operator - [...]  The spread operator (...) in JavaScript is used to expand an array (or any iterable) into its individual elements. It is commonly used for copying, merging, and spreading elements inside another array.
          //.sort() works on a copy
          //.map() works correctly
          
          products.sort((a,b)=>b[3]-a[3]).forEach((item)=>console.log(item[1]))

          console.log(`---------------------------------`);

//7. print product having maximum available stock
      
maxStockProduct = products.reduce((n1, n2) => (n1[3] > n2[3] ? n1 : n2));
console.log("Product with maximum stock:", maxStockProduct[1]);
console.log(`---------------------------------`);

//8. is there any product that can be purchased by Rs. 10

isProductFor10 = products.some(p => p[2] <= 10);
console.log("Is there any product for Rs. 10?", isProductFor10);
console.log(`---------------------------------`);

//9. Is there any product in the range of rs 10 to 30

isProductInRange = products.some(p => p[2] >= 10 && p[2] <= 30);
console.log("Is there any product in the range of Rs. 10 to 30?", isProductInRange);
console.log(`---------------------------------`);

//10. print all products in the range of rs 10 to 30

productsInRange = products.filter(p => p[2] >= 10 && p[2] <= 30).map((num)=>num[1]);
console.log("Products in the range of Rs. 10 to 30:", productsInRange);
console.log(`---------------------------------`);