//1. a function that takes a string and return the count of vowels
const countVowels = function(str){
    let count = 0;
    for(let c of str){
        if('aeiou'.includes(c.toLowerCase()))
            count++;
    }
    return count;
}

//2. a function that take a string and return it capetalized
const capetalizeStrings = function(str){
    let words = str.split(' ');
    for(let i in words){
        if (words[i]){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    }  
    return words.join(' ');  
}

//3. a function that gets month name from a particular date
const getMonthName = function(dayString){
    let day = new Date(dayString);
    return day.toLocaleString("default", { month: "long" });
}

//4. a function to return an array of random 5 numbers between 1 and 10
const getRandomNumbers = function(){
    let arr = [];
    for(let i = 0; i < 5; i++)
        arr.push(Math.ceil(Math.random()*10))
    return arr;
}

//5.1 display max and min numbers inn the array 
let numbers = [2,1,3,2,7,2,8,3,6,10,9,12]
console.log('Max =',Math.max(...numbers),'Min =',Math.min(...numbers));

//5.2 remove dublicates from the array
const removeDublicates = function(arr){
    let i = 0 ;
    while (i < numbers.length){
        let dublicate = -1;
        let searchStart = i+1;
        do{
            dublicate = numbers.indexOf(numbers[i],searchStart);
            if(dublicate !== -1)
                numbers.splice(dublicate,1);
            searchStart = dublicate;
        }
        while(dublicate !== -1)
        i++;
    }    
}

//5.3 count even numbers in the arr
const countEvenNumber = function(arr){
    let count = 0;
    for(let num of arr){
        if(num % 2 === 0)
            count++;
    }

    return count;
}

//5.4 display the previouse arr as string joined by "*"
removeDublicates(numbers);
console.log(numbers.join('*'));

/*const countVowels = function(str){
    let count = 0;
    for(let c of str){
        switch (c.toLowerCase()){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
        }
            
    }
    return count;
}*/
