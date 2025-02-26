
class student{

    stdid
    stdname
    stdcourse

    constructor(id,name,course){
   
        this.stdid=id
        this.stdname=name
        this.stdcourse=course
        this.display()
    }

    display(){
        console.log(`Student id is ${this.stdid}`);
        console.log(`Student name is ${this.stdname}`);
        console.log(`Student course is ${this.stdcourse}`);
        console.log(`---------------------------------`);
        
    }
}
const stud1 = new student(1,'max','cs')
const stud2 = new student(2,'ram','eee')
const stud3 = new student(3,'rahul','ec')