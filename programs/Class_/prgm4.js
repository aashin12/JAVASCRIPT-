//INHERITENCE

class A{
    methoda(){
        console.log('inside method A');
        
    }
}
class B extends A{
    methodb(){
        console.log('inside method B');
        
    }
}
const arg = new B()

arg.methodb()
arg.methoda()