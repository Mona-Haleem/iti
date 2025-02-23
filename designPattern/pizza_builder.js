class Pizza{
    constructor(name,size){
        this.name = name;
        this.size = size;
        this.ingredients = [];
    }

    addToppings(...ingredients){
        this.ingredients.push(...ingredients)
    }

    bake(){
        console.log(`a ${this.size} ${this.name} pizza is backed`)
    }
}




class PizzaBuilder{
    constructor(name ,size , ...ingredients){
        this.pizza = null
        this.name = name ;
        this.size = size;
        this.ingredients = ingredients
    }

    create(){
        this.pizza = new Pizza(this.name , this.size);
    }

    addIngredient(){
        this.pizza.addToppings(this.ingredients);
    }

    getResult(){
        return this.pizza
    }
}


class BuilderObject{
    build(builder){
        builder.create();
        builder.addIngredient();
        return builder.getResult()
    }
}

console.log('-------------Builder-------------');

let pizzaBuilder = new PizzaBuilder('margrita' , 'medium' , 'mozzarila', 'basil' , 'tomato')
let pizza = new BuilderObject().build(pizzaBuilder);
pizza.bake()