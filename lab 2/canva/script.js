let isDown = false;
let savedDrawing;

window.addEventListener('resize', restoreDrawing);

window.addEventListener('load',function(){
    
    displayColors()   
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
    canvas.addEventListener('mousedown',(e)=>isDown = e.which == 1) ;
    canvas.addEventListener('mouseup',()=>isDown = false) ;
    canvas.addEventListener('mousemove',draw) ;
    canvas.addEventListener('click',draw) ;
    
    canvas.addEventListener('mouseup', () => savedDrawing=canvas.toDataURL());
    
    let colors = document.querySelector('#colors');
    colors.addEventListener('click',changeColor);
   
    applySetting();


    let fontControls = document.querySelector('#brushSize');
    fontControls.addEventListener('click',resizeFont);

    const saveBtn = document.querySelector('#saveBar span')
    saveBtn.onclick = function(){
        const link = document.createElement('a');
        link.download = 'canvas-drawing.png'; 
        link.href = canvas.toDataURL('image/png'); 
        link.click();
    }
})

function displayColors(){
    let colors = [ "#f00" , "#fa0" ,"#fd0" ,"#0f0" ,"#00F", "#a0f" ,"#fff"," #000"]
    let colorBar = document.querySelector('#colors');
    
    for(let i=0 ;i <colors.length ; i++){
        let colorBtn = document.createElement('div');    
        colorBtn.style.backgroundColor = colors[i];
        colorBar.append(colorBtn);
    }
        
}

function applySetting(){
    let colorIndex = localStorage.getItem('colorIndex');
    if (colorIndex)
        document.querySelector('#colors').children[colorIndex].click();
    else
        document.querySelector('#colors div:last-child').click()
    let fontSize = localStorage.getItem('fontSize') || 10
    document.querySelector('#brshSizeValue').textContent = fontSize 
}


function changeColor(e){
    if (e.target.id != 'colors'){
        let oldColor = document.querySelector('.selected');
        if (oldColor) oldColor.classList.remove('selected');
        e.target.classList.add('selected')
        let colorIndex = Array.from(e.target.parentElement.children).indexOf(e.target)
        localStorage.setItem('colorIndex',colorIndex)
    }
}

function resizeFont(e){
    let rad = document.querySelector('#brshSizeValue');
    if(e.target.id == 'plus')
        rad.textContent = Math.min(50,Number(rad.textContent) + 1) ;
    else if (e.target.id == 'minus')
        rad.textContent = Math.max(5,Number(rad.textContent)-1);
    localStorage.setItem('fontSize',rad.textContent);

}

function draw(event){
    if (event.type == 'mousemove' && !isDown ){
        return
    }
    let rad = Number(document.querySelector('#brshSizeValue').textContent)
    let selectedColor = document.querySelector('.selected');
    let color = selectedColor.style.backgroundColor;
    let canvas = document.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(event.offsetX,event.offsetY,rad,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();

}

function restoreDrawing() {
    canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (savedDrawing) {
      const img = new Image();
      img.src = savedDrawing;    
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.drawImage(img, 0, 0);  
      };
    }  
  }
