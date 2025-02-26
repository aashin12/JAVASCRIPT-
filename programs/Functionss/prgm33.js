//wap tp find a given num is odd or even using function
//wap to find a given n um is positive or negative using function
//wap to find the cube of a given  num using funcions

function oddeven(num){
    if(num%2==0)
        console.log(`The number is even`);
    else
        console.log(`The number is odd`);
           
}



function posneg(num){
    if(num>0)
        console.log(`The number is positive`);
    else if(num==0)  
        console.log(`The number is neither positive nor negative`);
    else
        console.log(`the number is negatve`);
        
        
}


function cube(num){
    console.log("The cube is ",num**3);
    
}

oddeven(4);
posneg(-5);
cube(3);