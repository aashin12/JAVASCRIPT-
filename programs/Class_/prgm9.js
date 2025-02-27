class A{                                               //method overriding 
    methoda(){
        console.log('Inside method a');
        
    }

    methoda(){
        console.log('inside second method');
        
    }
}

const arg = new A()
arg.methoda()