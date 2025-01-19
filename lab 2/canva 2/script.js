window.addEventListener('load',function(){
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    canvas.onclick = function(event){ 
        ctx.fillStyle = "black";
        ctx.fillRect(event.offsetX-10,event.offsetY-10,50,50);
    }

    canvas.onresize = function(){
        canvas.width = window.innerWidth;  
        canvas.height = window.innerHeight;
    }    
})


