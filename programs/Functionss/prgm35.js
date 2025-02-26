//callback function

function greet(name,callback){
    console.log(`HAI ${name}`);
    callback()
    console.log('exe');
    
    
}

function A(){
    console.log('i am call back function');
    
}

greet('peter',A)