// creation of engine object result in Erorr can't create objects of abstrcat class
//let engine = new Engine('red'); 


let redCar = new Car('BMW','2010',200000,'red');
let BlueCar = new Car('Ford','2015',180000,'gray');
let GreenCar = new Car('verna','2010',120000,'white');

console.log(redCar.toString());
redCar.moveCar('left');

console.log(BlueCar.toString());
BlueCar.moveCar('right');

console.log(GreenCar.toString());
GreenCar.moveCar('forward');


let flyingCar = new FlyingCar(true,'Sky','2015',180000,'blue');
let nonFlyingCar = new FlyingCar(false,'earth','2015',180000,'blue');


console.log(flyingCar.toString());
flyingCar.moveCar('left');

console.log(nonFlyingCar.toString());
nonFlyingCar.moveCar('right');
