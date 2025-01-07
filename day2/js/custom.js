$(document).ready(function(){ 
    let i = 1;
    // 4- add content / text append & before
    $('#addBtn').click(function(){
        let course = $('input').val();
        if(course){       
            $('ul').append(`
                            <li>
                                <span>${course}</span>
                                <button class="deleteBtn">delete</button>
                                <button class="copyBtn">copy</button>
                            </li>`)
            $('h2').before('<span>New Course Added<span>')
        }
        
        // 7- find method
        let newElement = $('ul').find('li:last');

        // 3- set attribute .
        newElement.attr("id",`course${i}`);

        i++;

        console.log(newElement); 

    })
    

    // 5- remove element using remove
    $('ul').click(function(e){
        if(e.target.tagName == 'BUTTON' && e.target.className == 'deleteBtn')
            $(e.target).parent().remove();
        else if(e.target.tagName == 'BUTTON' && e.target.className == 'copyBtn'){
            // 1- get content html()
            let course = $(e.target).parent().find('span').html();
            console.log(course);
            // 2 set content input.
             $('input').val(course)
        }
    })
    
    
   
    // 6- toggle & css 
    $('li').click(function(){
        $('li').toggleClass('selected');
    })
    
    
});

