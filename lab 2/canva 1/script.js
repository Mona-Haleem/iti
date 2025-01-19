window.addEventListener('load',function(){
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.onclick = function(event){
        canvas.width = window.innerWidth;  
        canvas.height = window.innerHeight;
        ctx.fillStyle = "black";
        ctx.fillRect(event.offsetX-10,event.offsetY-10,50,50);
    }
})