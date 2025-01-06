import {Car} from './car.js'

export class FlyingCar extends Car{
    constructor(model,year,canFlying=true){
        super(model,year);
        this.canFlying =canFlying;
    }

    toString(){
        return super.toString() +'\n' + 'I can Fly';
    }
}