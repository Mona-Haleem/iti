//3.1 intialize array with students grades
let grades = [85,92,78,90,87,61,73];

//3.2
console.log('The avg of Grades =',getAverge(grades));

//3.3
console.log('The avg of highest =',getHighestGrade(grades));

//3.4
console.log('The avg of lowest =',getLowestGrade(grades));

//3.5
console.log('replaced array',replaceGrades(grades,90,91));

//3.6
console.log('Sorted Numbers',sortNumbersAsc(grades));

//3.7
let successeStudents = filterByGrade(grades,60); 
console.log('successed Students',successeStudents);

//3.8
console.log('% array',convertGradesToPrecentages(grades))

//3.9
console.log(grades.join(','));

//3.10
let names = ["Elina","ahmed","Mona","eman","Ali","maha","zyad"];

//3.11
console.log('Sorted Names',sortNamesAsc(names));

//3.12
let input = prompt('Enter text');
console.log('PascalForm:', convertToPascale(input))

//3.13
console.log(names.map(a=>convertToPascale(a)));

//3.14
console.log(findSTudentWithNameLength(names,4))

//3.15
console.log(combineArraysAsStr(names,grades));

//3.16
console.log(combineArraysAsArray(names,grades));

/*************************************************************************** */
//4.2
let students = [];
let studentData = ["firstName","lastName","age","email","department"];
for(let i = 0;i< 3;i++){
    students.push(registerStudent(studentData));
}
console.log(students);
//4.3
console.log(findOldestStudent(students));


//4.4
console.log(getPascalFullName(students));


//4.5
console.log(findStudentsOlderThan(students,20));


//4.6
console.log(getAvgAge(students));


//4.7
console.log(sortStudents(students));


//4.8
let studentsBrief = getStudentsBrief(students);
console.log(studentsBrief);

console.log(studentsBrief[0]+'');

//4.10
studentsBrief[0].toString = function (){
    return this.fullName; 
}

//4.11
console.log(JSON.stringify(studentsBrief));

