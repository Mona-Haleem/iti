//Task 1.1
//get 3 grades and display them in console
/*const getStudentsGrades = function(){
    for(let i = 0; i < 3 ; i++){
        let number = prompt(`Enter Grade ${i+1}`);
        console.log(number);
    }
}*/

//Task 1.2
//display the sum of the grades
/*const getStudentsGrades = function(){
    let result = 0;
    for(let i = 0; i < 3 ; i++){
        let number = parseInt(prompt(`Enter Grade ${i+1}`));
        result+=number;
    }
    console.log(result);
}*/

//task 1.3 
//let the user enter the number of grades
/*const getStudentsGrades = function(){
    let gradeCount = parseInt(prompt("How many students grades is there ?"));
    let result = 0;
    for(let i = 0; i < gradeCount ; i++){
        let number = parseInt(prompt(`Enter Grade ${i+1}`));
        result+=number;
    }
    console.log(result);
}*/

//Task 1.4
//validate gradeCount to be a valid number between 2 and 10
/* const getStudentsGrades = function(){
    let gradeCount = Number(prompt("How many students grades is there ?"));
    if(Number.isNaN(gradeCount)){
        alert("Please Enter a Valid Number");
    }else if ( gradeCount > 10 || gradeCount < 2){
        alert("Invalid Number Grade Count can only be a number between 2 and 10");
    }else{   
        let result = 0;
        for(let i = 0; i < gradeCount ; i++){
            let number = Number(prompt(`Enter Grade ${i+1}`));
            result+=number;
        }
        console.log(result);
    }
}*/

//Task 1.5
//validate the entered grade to be a valid number otherwise set it to zero 
/*const getStudentsGrades = function(){
    let gradeCount = Number(prompt("How many students grades is there ?"));
    if(Number.isNaN(gradeCount)){
        alert("Please Enter a Valid Number");
    }else if ( gradeCount > 10 || gradeCount < 2){
        alert("Invalid Number Grade Count can only be a number between 2 and 10");
    }else{   
        let result = 0;
        for(let i = 0; i < gradeCount ; i++){
            let number = Number(prompt(`Enter Grade ${i+1}`));
            if(Number.isNaN(number)){
                number = 0;
            }
            result+=number;
        }
        console.log(result);
    }
}*/

//Task 1.6
// ensure grades are a valid number
/*const getStudentsGrades = function(){
    let gradeCount = Number(prompt("How many students grades is there ?"));
    if(Number.isNaN(gradeCount)){
        alert("Please Enter a Valid Number");
    }else if ( gradeCount > 10 || gradeCount < 2){
        alert("Invalid Number Grade Count can only be a number between 2 and 10");
    }else{   
        let result = 0;
        for(let i = 0; i < gradeCount ; i++){
            let number;
            do {
                number = Number(prompt(`Enter Grade ${i+1}`));
            }
            while(Number.isNaN(number));
            
            result+=number;
        }
        console.log(result);
    }
}*/

//Task 1.7
//Ensure grades are between 0 and 100
const getStudentsGrades = function(){
    let gradeCount = Number(prompt("How many students grades is there ?"));
    if(Number.isNaN(gradeCount)){
        alert("Please Enter a Valid Number");
    }else if ( gradeCount > 10 || gradeCount < 2){
        alert("Invalid Number Grade Count can only be a number between 2 and 10");
    }else{   
        let result = 0;
        for(let i = 0; i < gradeCount ; i++){
            let number;
            do {
                number = Number(prompt(`Enter Grade ${i+1}`));
            }
            while(Number.isNaN(number) || number > 100 || number < 0);
            
            result+=number;
        }
        console.log(result);
    }
}

getStudentsGrades()
