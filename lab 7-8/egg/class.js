class ImgElement{
    constructor(top,left,imageSrc){
        if (new.target.name == 'ImgElement')
            throw new Error("can't create objects from abstract class Element")
        this.top = top;
        this.left = left;
        this.imageSrc = imageSrc;
        this.createElement()
    }
    
    createElement(){
        this.element = document.createElement('img');
        this.element.src = this.imageSrc;
        document.body.append(this.element);
    }

    applyStyles(classes,styles){
        this.element.classList.add(...classes);
        for(let property in styles){
            this.element.style[property] = styles[property];
        }
    }

}
class Egg extends ImgElement{
    constructor(){
        super(0,Math.ceil(Math.random()*(window.innerWidth - 200)),'images/egg.png')
        this.applyStyles(['egg'],{top:this.top+'px',left:this.left+'px'});
    }
    
    startFall(basket){
        // set car to move with a new interval
        this.move = setInterval(()=>{
            if (this.top >= (window.innerHeight -  this.element.height)){
                // stop moving at the end of the window
                this.element.src = 'images/brockenEgg.png';
                clearInterval(this.move);
            }else{
                this.top +=10;
                this.element.style.top = this.top+'px';
                if(this.detectCollision(basket)){
                    clearInterval(this.move);
                    this.element.remove();
                }
            }
        },100); 
    }

    detectCollision(basket){
        let eggDim = {
            top:this.top,
            bottom:this.top + this.element.height,
            left:this.left,
            right:this.left + this.element.width
        }
        let basketDim = {
            top:basket.top,
            bottom:basket.top + this.element.height ,
            left:basket.left,
            right:basket.left + basket.element.width
        }
        return((eggDim.bottom > basketDim.top + 50 && (
             (eggDim.left >= basketDim.left && eggDim.left < basketDim.right) ||
            ( eggDim.right <= basketDim.right && eggDim.right > basketDim.left)
        )))
    }
    
    
}

class Basket extends ImgElement{
    
    constructor(){
        super(window.innerHeight-210,Math.ceil(Math.random()*(window.innerWidth - 200)),'images/basket.png')
        this.applyStyles(['basket'],{top:this.top+'px',left:this.left+'px'});
    }
    
    move(direction){
        if(direction ==  1)
            this.left = Math.min(this.left+10 ,window.innerWidth-200);
        else
            this.left = Math.max(this.left-10 ,0);
        this.element.style.left = this.left+'px';       
    }

}


