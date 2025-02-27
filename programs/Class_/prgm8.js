class B{                                                        //method overloading
    methoda(...arg){
        console.log(arg);

        let sum = arg.reduce((n1,n2)=>n1+n2)
        console.log(sum);
            
    }
    
}

const obj = new B()
obj.methoda(1,2,3)
