window.addEventListener('load',function(){
    let main = this.document.querySelector('main');
    let [plusA ,plusB ,multiA,multiB] = document.querySelectorAll('input');
    main.onchange = function(e){
        if(e.target.tagName == 'INPUT'){
            let output = e.target.parentElement.querySelector('output')
            if(output.id == 'sum')
                output.value = Number(plusA.value) + Number(plusB.value)
            else
                output.value = Number(multiA.value) * Number(multiB.value); 
        }
    }
})

