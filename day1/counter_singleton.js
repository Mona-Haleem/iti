class Counter{
    constructor(){

        if(!Counter.instance){
            this.count = 0;
            Counter.instance = this;
            this.count++;
        }
        return Counter.instance
    }

    getCount(){
        return this.count;
    }
} 


console.log('-------------Singleton-------------');

const CounterA = new Counter();
console.log("Active Instances:", CounterA.getCount());

const CounterB = new Counter();
console.log("Active Instances:", CounterB.getCount());

const CounterC = new Counter();
console.log("Active Instances:", CounterC.getCount());