
//3.2 calculate avg with reduce
const getAverge = function(array){
    return array.reduce((acc,a,i) => {
        if (i === array.length -1)
            return (acc+a)/array.length;
        else
            return acc+a;
    })
}


//3.3 find the highest grade
const getHighestGrade = function(array){
    return array.reduce((acc,a) => (a > acc)?a:acc)
}

//3.4 find lowest grade
const getLowestGrade = function(array){
    return array.reduce((acc,a) => (a < acc)?a:acc)
}

//3.5 replace grade 90 to 91 
const replaceGrades = function(array,grade,newGrade){
    return array.map(a => (a === grade)?newGrade:a);
}

//3.6 sort grade in ascending order
const sortNumbersAsc = function(array){
    return array.sort((a,b)=>a-b);
}

//3.7 find grades greater than or equal to number
const filterByGrade = function(array,grade){
    return array.filter(a => a>= grade);
}

//3.8 convert numbers to %
const convertGradesToPrecentages = function(array){
    return array.map(a => `${a}%`);
}


//3.11 order the names asc
const sortNamesAsc = function(array){
    return array.sort((a,b) => {
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
        else if (a.toLowerCase() < b.toLowerCase())
            return -1;
        else
            return 0;
    })
}

//3.12 convert to pascale case
const convertToPascale = function(str){
    return str.match(/[a-zA-Z]+/g,' ').map(a => a[0].toUpperCase() + a.substr(1)).join('');
}

const findSTudentWithNameLength = function(array,nameLength){
    return array.find(ele => ele.length >= nameLength);
}

//3.15 combine names and grades in string

const combineArraysAsStr = function(names,grades){
    return names.map((ele,i) => `${ele} ${grades[i]}`);
}

//3.1 combine names and grades in string

const combineArraysAsArray = function(names,grades){
    return names.map((ele,i) => [ele, grades[i]]);
}

/************************************************************************ */

    
//4.1  register student data through prompt
const registerStudent = function (data){
    let student = {};
    for (let key of data){
        let value;
        do{
            value = prompt('Enter '+ key);
        }while((key ==='age' && Number.isNaN(Number(value)))||
                (key ==='email' && !validateEmail(value))||
                !value)
         
        student[key] = (key === 'age')?Number(value):value;
    }
    
    return student;
}

//4.3 find the oldest student
const findOldestStudent = function(objArray){
    return objArray.reduce((acc,a) => (a.age > acc.age)?a:acc);
}

//4.4 return names in pascal case
const getPascalFullName = function(objArray){
    return objArray.map(a => convertToPascale(`${a.firstName} ${a.lastName}`));
}

//4.5 find students older than 20
const findStudentsOlderThan = function(objArray,age){
    return objArray.filter((a) => (a.age > age));
}


//4.6 get avg age
const getAvgAge = function(objArray){
    return getAverge(objArray.map(a => a.age));
}

//4.7 get avg age
const sortStudents = function(objArray){
    return objArray.sort((a,b) =>{
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
            return 1;
        else if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
            return -1;
        else if (a.lastName.toLowerCase() > b.lastName.toLowerCase())
            return 1;
        else if (a.lastName.toLowerCase() < b.lastName.toLowerCase())
            return -1;
        else
            return 0;            
    });
}

//4.8 get students full name and age
const getStudentsBrief = function(objArray){
    return objArray.map((obj) => {
        return {
                  fullName :convertToPascale(`${obj.firstName} ${obj.lastName}`),
                  age:obj.age
               }
    })
}

const validateEmail = function(value){
     return /^.+@.+(\..+)+$/.test(value);
}
