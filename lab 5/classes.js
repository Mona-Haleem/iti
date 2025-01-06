/// creating class with ES5 

const Paint = function (color="black",width="10",height="10",price="10"){
    this.color = color;
    this.width = width;
    this.height = height;
    this.price = price;
    Paint.count++;
}

//adding methods to class
Paint.prototype.draw = function(){
    return "display paint"
}

//adding static property
Paint.count = 0;

//overriding tostring method
Paint.prototype.toString = function(){
    return `{ color : ${this.color}, width : ${this.width}, height : ${this.height}, price : ${this.price} }`
}

/******************************************************************************************** */
// creating classes with ES6

//abstract class
class Engine{
    static #count = 0;
    constructor(color){
        if(new.target.name === 'Engine')
            throw new Error("can't create object of abstrct class");
        this.color = color;
        Engine.#count++;
    }

    static get count(){return Engine.#count;}
}


class Car extends Engine{
    constructor(model,productionYear,price,color){
        super(color);
        this.model = model;
        this.productionYear = productionYear
        this.price = price;
    }

    toString(){
        return `{color : ${this.color}, model : ${this.model}, productionYear : ${this.productionYear} , price : ${this.price}}`
    }

    moveCar(direction){
        console.log(`The ${this.color} ${this.model} is moving ${direction}`);
    }

}

class FlyingCar extends Car{
    constructor(isFlying,model,productionYear,price,color){
        super(model,productionYear,price,color);
        this.isFlying =isFlying;
    }

    toString(){
        let props = `${super.toString().slice(0,-1)}, isFlying : ${this.isFlying}} \n`;
        if(this.isFlying)
            return props +"Can Fly";
        else
            return props + "Can't FLy";
    }
}