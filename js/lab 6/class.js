class Engine{
    static #count = 0;
    constructor(){
        if(new.target.name === 'Engine')
            throw new Error("can't create object of abstrct class");
        Engine.#count++;
    }

    static get count(){return Engine.#count;}
}


class Car extends Engine{
    #top;
    #left;
    constructor(top,left,imageSrc){
        super();
        this.top = top;
        this.left = left;
        this.imageSrc = imageSrc;
        this.#createElement()
    }
    
    set top(value){
        this.#top = value;
    }

    set left(value){
        this.#left = value;
    }

    #createElement(){
        this.element = document.createElement('img');
        this.element.src = this.imageSrc;
        this.changeStyle({
            position:'absolute',
            top : this.#top+'px',
            left: this.#left+'px',
            maxWidth: '300px',
            transition:'all ease-in 0.1s'
        })
        document.body.append(this.element);
    }

    moveLeft(){
        //change direction
        this.changeStyle({
            transform :'',
        })

        //clear existing interval
        if (this.move){
            clearInterval(this.move);
        }

        // set car to move with a new interval
        this.move = setInterval(()=>{
            if (this.#left >= (window.innerWidth -  this.element.width)){
                // stop moving at the end of the window
                clearInterval(this.move);
            }else{
                this.#left +=20;
                this.changeStyle({
                    left: this.#left+'px'
                })
            }
        },100); 
    }

    moveRight(){
        //change direction
        this.changeStyle({
            transform :'scale(-1,1)',
        })

        //clear existing interval
        if (this.move)
            clearInterval(this.move);
        // set car to move with a new interval
        this.move = setInterval(()=>{
            if (this.#left === 0){
                 // stop moving at the end of the window
                clearInterval(this.move);
            }else{
                this.#left -=20;
                this.changeStyle({
                    left: this.#left+'px'
                })
            }
            
        },100);
    }

    changeStyle(styleList){
        for(let property in styleList){
            this.element.style[property] = styleList[property];
        }


    }

}
