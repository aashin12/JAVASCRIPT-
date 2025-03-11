class Landing{
    //properties
    database = {
        'milan':{Username:'milan',password:'milan123'},
        'manu':{Username:'manu',password:'manu123'},
        'mini':{Username:'mini',password:'mini123'},
        'mikki':{Username:'mikki',password:'mikki123'},
    }

    //methods
    saveData(){
        if(this.database){
            localStorage.setItem('database',JSON.stringify(this.database))  //both arguments should be string,so converting object to string using json.stringify
        }
    }

    //retrieve data
    getData(){
        this.database = JSON.parse(localStorage.getItem("database"))
        console.log(this.database);
        
    }

    register(){
        this.getData()
        // console.log(user.value);
        // console.log(pswd.value);
        if(user.value=='' || pswd.value=='')
            alert('Please fill the form completely')
        else{
            if(user.value in this.database){
                alert('User already Exist')
            }
            else{
                this.database[user.value] = {
                    username:user.value,password:pswd.value}
                    console.log(this.database);
                    this.saveData()
                    alert('Registration Successful')

                    //js navigate
                    window.location = 'login.html'
                    
                }
            }
    }

    login(){
        this.getData()
        // console.log(loguser.value);
        // console.log(logpswd.value);
        if(loguser.value=='' || logpswd.value=='')
            alert('Please fill the form completely')
        else{
            if(loguser.value in this.database){
                if(this.database[loguser.value].password == logpswd.value)
                   { 
                    localStorage.setItem('user',loguser.value)
                    alert('Login succesful')
                    window.location = 'home.html'
                   }
                else
                alert('Invalid password or username')
                    
            }else{
                alert("User does not exist")
            }
        }

        
        
    }
}


const obj = new Landing()

obj.getData()