class Bank{
    //property
    accountDetails = {
        1000 :{acno:1000,username:"userone",password:"userone",balance:5000},
        1001 :{acno:1001,username:"usertwo",password:"usertwo",balance:10000},
        1002 :{acno:1002,username:"userthree",password:"userthree",balance:1000},
        1003 :{acno:1003,username:"userfour",password:"userfour",balance:2000},
    }


    //wap to validate a given account number
        validate(accountnum){
           return accountnum in this.accountDetails
                
    
    }
    
    //wap to authenticate a given account

        authenticate(num1,password1){

            if(this.validate(num1)){
                if(this.accountDetails[num1].password == password1)
                    console.log("Valid Account Details...Authenticated");
                else
                    console.log("Invalid Account or Password");
                    
            }
            else{
                console.log("Invalid Account or Password");
                
            }
           
                    

            
        }
    //wap to check the balance of a given account nmber

            checkbalance(num1,password1){
                if(this.validate(num1)){
                     if(this.accountDetails[num1].password==password1)
                        {
                            console.log("Account balance is:");
                            
                            console.log(this.accountDetails[num1].balance);
                        }
                        
                }
                else{
                    console.log("Invalid acount number or password");
                    
                }

            }
    //wap to transfer money btw 2 accounts

    transfer(num1,num2,password1,amt){
        if(this.validate(num1)){
             if(this.validate(num2)){
                if(this.accountDetails[num1].password==password1){
                    if(this.accountDetails[num2].balance>=amt)
                    {
                    console.log("Current Balance of",num1,"is: Rs",this.accountDetails[num1].balance);
                    console.log("Current Balance in",num2,"is: Rs",this.accountDetails[num2].balance);
                    this.accountDetails[num2].balance+=amt
                    this.accountDetails[num1].balance-=amt
                    
                    console.log("Balance Debited After money transfer of Rs",amt,": Rs",this.accountDetails[num1].balance);
                    console.log("Balance Credited After money transfer of Rs",amt,": Rs",this.accountDetails[num2].balance);

                    }
                    else{
                        console.log("Insuficient Balance");
                        
                    }
                    
                }
                else{
                    console.log("Invalid Account number or password");
                }
             }
        }
        else{
            console.log("Invalid Account number or password");
            
        }
    }

}

const arg1= new Bank()

console.log(arg1.validate(1001)?'Account Exist':'Acoount Not Exist')
console.log(`----------------------------------`);


arg1.authenticate(1001,'usertwo')
console.log(`------------------------------------------`);

arg1.checkbalance(1001,'usertwo')
console.log(`-------------------------`);

arg1.transfer(1001,1002,'usertwo',1000)