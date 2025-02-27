class A{
    methoda(){
        console.log('Inside method a');
        
    }

    methoda(num2){
        console.log('inside second method',num2);
        
    }
}

const arg = new A()
arg.methoda(6)