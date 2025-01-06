let car1 = new Car(0,0 ,'images/1.png');
let car2 = new Car(500,400 ,'images/2.png');


car2.changeStyle({
    transform:'scale(-1,1)'
})

car1.moveLeft();
car2.moveRight();

/************************************************************ */

//create img and div container
let imgContainer = document.createElement('div');
let img = document.createElement('img')

// apply styles 
img.style.height = '200px'
let containerStyle ={
    border:'2px solid blue',
    position:'absolute',
    top:'25%',
    left:'25%',
    margin:'auto',
    width:'450px',
    height:'200px',
    textAlign:'center',
}

for(let property in containerStyle){
    imgContainer.style[property] = containerStyle[property];
}

document.body.append(imgContainer);
imgContainer.append(img);

let timerID =  startSliding(img);

setTimeout(() => {
    stopSliding(timerID);
},30000)    
    

