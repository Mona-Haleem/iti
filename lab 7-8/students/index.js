let allStudents = [];
let filteredStudents=[]

window.addEventListener('load',function(){
    const table = this.document.querySelector('table');
    const addBtn = this.document.querySelector('button');
    const filter =this.document.querySelector('#filter');
    const sort = this.document.querySelector('#sort');
    const stdName = this.document.querySelector('#name')
    const stdGrade = this.document.querySelector('input[type=number]')

    //submit student data with btn click
    addBtn.addEventListener('click', function(){
        const stdDept = document.querySelector('input[type=radio]:checked')
        let student = {
            name:stdName.value.trim(),
            grade:stdGrade.value,
            dept:stdDept.value
        }

        //validate input
        if(!student.name){
            stdName.classList.add('invalid');
            throw new Error('No student name was Entered');
        }
        
        if(allStudents.filter(std=>std.name.toLowerCase() == student.name.toLowerCase()).length > 0){
            stdName.classList.add('invalid');
            throw new Error('the student already exist');
        }

        if(!student.grade || student.grade < 0 || student.grade > 100){
            stdGrade.classList.add('invalid');      
            throw new Error('Grades can be only between 0 and 100');
        }

        //make sure student name is capetalized
        student.name = student.name[0].toUpperCase() + student.name.substr(1).toLowerCase();
        allStudents.push(student);
        table.append(createStdRow(student));
        
        //clear the form
        stdName.parentElement.reset();

    })

    //filter students 
    filter.addEventListener('change',function(){
        table.innerHTML ='';
        filteredStudents = allStudents;
        if(this.value == 'fail')
            filteredStudents =allStudents.filter(std=>std.grade < 60);
        else if(this.value =='sucsses')
            filteredStudents =allStudents.filter(std=>std.grade >= 60); 
        for(let std of filteredStudents)
            table.append(createStdRow(std));

    })

    //sortt the displayed students
    sort.addEventListener('change',function(){
        table.innerHTML ='';
        let sortedStudents = filteredStudents;
        if(this.value == 'name')
            sortedStudents =filteredStudents.sort((a,b)=>{
                if(a.name < b.name)
                    return -1
                else if (a.name > b.name)
                    return 1
                else
                    0               
            });
        else if(this.value =='grade')
            sortedStudents = filteredStudents.sort((a,b)=>b.grade - a.grade);
        
        for(let std of sortedStudents)
            table.append(createStdRow(std));
    })

    //delete student
    table.addEventListener('click',function(event){
        if (event.target.className == 'deleteBtn'){
            let student =event.target.closest('tr');
            let name= student.querySelector('td').innerHTML;
            allStudents=allStudents.filter(std=>std.name !== name)
            student.remove();
            }
    })


    //remove invalid messege
    stdName.addEventListener('focus',function(){this.classList.remove('invalid')})
    stdGrade.addEventListener('focus',function(){this.classList.remove('invalid')})
})