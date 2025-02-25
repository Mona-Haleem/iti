console.log('\n-------------Decorator-------------\n ');

class Teacher{
    constructor(name,age,major){
        this.name = name;
        this.age = age;
        this.major = major;
    }

    display(){
        console.log(this.name , this.age , this.major);
    }
}

class TeacherDecorator{
    constructor (Teacher,salary, nationality, street){
    this.Teacher = Teacher;
    this.name = Teacher.name;
    this.age = Teacher.age;
    this.major = Teacher.major;
    this.salary = salary;
    this.nationality = nationality;
    this.street = street;
    }
    display(){
        this.Teacher.display()
        console.log(this.salary,this.nationality,this.street);
    }
}

let mathTeacher = new Teacher("manar",24,"Math");
mathTeacher.display();
console.log('after decorator applied')
let mathTeacherDeco = new TeacherDecorator(mathTeacher,5000,"egyptian","xxx");
mathTeacherDeco.display()