function Agecheck(){
    let data = document.getElementById('para')
    if(!Age.value)
    {
       data.innerHTML = 'Please Enter a value'
       data.style.color = 'blue'
    }
    else
    {
        if(Age.value>=18)
           { 
            data.innerHTML = 'Eligible '
             data.style.color = 'green'
           }
        else if(Age.value<18)
        {
          data.innerHTML = 'Not Eligible '
          data.style.color = 'red'
        }
        else
        {
            data.innerHTML = 'Not a number '
            data.style.color = 'orange'
        }
            
    }
}