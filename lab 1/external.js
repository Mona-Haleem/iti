/* asignment 3.a 
* printing the value of number 1 before definition:
* result is undefined for number1
* ReferenceError for number3 and number 2 
assignment 3.d removing var from number 1 resault in refernce error     
*/
//console.log(number1);
//console.log(number2);
//console.log(number3);
// assignment 2
var number1 = 3;
let number2 = 2.9;
const number3 = 0xff;
let firstName = "mona";
let middleName ='Halleem';
let lastName = `Riad`;

let flag = true;
console.log('This is External JavaScript file')
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);

//assignment 3.g
// print types of the three string variables
console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);

//assignment 5 
// check if number is odd or even
if (number1 % 2 == 0)
    console.log('even')
else
    console.log('odd')

//assignment 6
//print numbers from 1 to 10
for( let i = 1; i < 11 ; i++){
    console.log(i);
}

//assignment 7
//check if number negative postive or 0
if (number1 < 0)
    console.log('-ve');
else if (number1 > 0)
    console.log('+ve');
else
    console.log('0')


//assignment 8
// print multiplication table for number 10 
for(let i = 1; i < 13; i++){
    console.log(i*10);
}

//asignment 9
// convert day number to day of week
switch (number1){
    case 1:
        console.log('Sunday');
    break;
    case 2:
        console.log('Monday');
    break;
    case 3:
        console.log('Tuesday');
    break;
    case 4:
        console.log('Wednesday');
    break;
    case 5:
        console.log('Thrusday');
    break;
    case 6:
        console.log('Friday');
    break;
    case 7:
        console.log('Saturday');
    break;
    default:
        console.log('Invalid week number');
}

// assignment 10
// a program that takes a day number and prints if it's a weekday or weekend  
if (number1 > 1 && number2 < 7){
    console.log('weekday');
}else if(number1 == 1 || number2 == 6){
    console.log('weekend');
}else{
    console.log('invalid week number');
}