window.addEventListener('load',function(){
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
    let mouseDown = false
    const ctx = canvas.getContext("2d");
   
    canvas.onmousedown = () => mouseDown = true;
    canvas.onmouseup = () => mouseDown =false;
    canvas.onmousemove = function(event){ 
        if(mouseDown){
            ctx.fillStyle = "red";
            ctx.fillRect(event.offsetX-10,event.offsetY-10,50,50);
        }
    }
})