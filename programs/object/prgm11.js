accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts

        console.log("Number of accounts",accounts.length)
    
        console.log(`--------------------------------------`);
        

//2. print account number whose ac_type is savings

console.log("account number whose ac_type is savings");

       accounts.forEach(item => {
        if(item.ac_type=='savings')
            console.log(item.acno)
            });


        console.log(`------------------------------------`);
        
//3.print the balance of accnount number 1000
     
console.log("balance of accnount number 1000");

        accounts.forEach(item=>{
            if(item.acno==1000)
                console.log(item.balance);
                
        })

        console.log(`--------------------------------------`);
        
//4. print all gpay transactions

console.log("all gpay transactions");

accounts.forEach(item=>{
    item.transaction.forEach(a1=>{
        if(a1.mode=='gpay')
            console.log(a1);
            
    })
})

console.log(`--------------------------------------`);



//5. print all transaction whose amount > 5000

console.log("transaction whose amount > 5000");

accounts.forEach(item=>{
    item.transaction.forEach(a1=>{
        if(a1.amount>5000)
            console.log(a1);
            
    })
})

console.log(`----------------------------------------`);

//6. print credit transaction of account 1002

console.log("credit transaction of account 1002");

accounts.forEach(item=>{
    item.transaction.forEach(a1=>{
        if(a1.to==1002)
            console.log(a1);
            
    })
})
console.log(`-----------------------------------`);

//7. print debit transaction of account 1002

console.log("debit transaction of account 1002");

accounts.forEach(item=>{
    if(item.acno==1002)
    {
        console.log(item.transaction);
        
    }
})
    console.log(`----------------------------------`);
    
//8. print transaction history of 1002     
//print as array

console.log("transaction history of 1002");

console.log("credit transaction of account 1002");
sum=0
accounts.forEach(item=>{
    item.transaction.forEach(a1=>{
        if(a1.to==1002){
            console.log(a1);
            sum+=a1.amount
        }
    })
})
console.log("\nTotal amount credited:",sum);

console.log("\nDebit transaction of account 1002");
sum1=0
accounts.forEach(item=>{
    if(item.acno==1002)
    {
        item.transaction.forEach((a1)=>{
            console.log(a1);
            sum1+=a1.amount
            
        })
        
    }
})
console.log("\nTotal amount debited:",sum1);

console.log("\nAccount balance:",sum-sum1);


console.log(`-----------------------------------------------`);

//9. print highest balance account details

highbalance = accounts.reduce((a1,b1)=>a1.balance>b1.balance?a1:b1)
console.log("Highest balance account:",highbalance);

//his = {
// credit:credit,
// debit:debit
// }
// console.log(his);


//print history has an array
//spread - to join two array
// transHis = [...credit,...debit]
// console.log(transHis);
