class Student{
    constructor(name,major){
        this.name = name;
        this.major = major;
    }
}

class SpeciliezedStudent extends Student{
    constructor(name,major){
        super(name,major)
    }
}


class Factory{
    constructor(){}
    factoryMethod(){}
    operation(...props){
        return this.factoryMethod(props);
    }
}

class StudentFactory extends Factory{
    constructor(){
        super()
    }

    factoryMethod([name , major]){
        return new SpeciliezedStudent(name,major);
    }
}


console.log('-------------Factory-------------');


let stdFactory = new StudentFactory()
let std1 = stdFactory.operation("Alaa" , "math");
let std2 = stdFactory.operation("Sara" , "science");
console.log(std1,std2);

