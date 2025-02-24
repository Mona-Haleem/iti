console.log('\n-------------Facade-------------\n ');

class ContainerManger{
    constructor(type){
        if(new.target == ContainerManger)
            throw new Error("can\'t create objects from abstract class")  
        this.items = [];
        this.type = type;
    }
  
    addItems(items){
        this.items.push(...items)
        console.log(`adding ${items} to ${this.type}`);
        
    }
    
    findItem(item){
        return this.items.indexOf(item) ;
    }

    removeItem(item){
        let id = this.findItem(item);
        if(id !== -1)
            this.items.splice(id,1);
        console.log(`${item} removed from ${this.type}`);

    }
}
class StockManger extends ContainerManger{
    constructor(){
        super('stock');
    }
    getItem(item){
        const itemIndex = this.findItem(item);
        if(itemIndex !== -1 ){
            console.log(`retreving ${item} from stock`);
            return this.items[itemIndex];
        }else{
            console.log(`no ${item} available in stock`);
        }
    }

}

class CartManger extends ContainerManger{
    constructor(){
        super("cart")
    }
}

class OrderManger{
    placeOrder(){
        console.log("your order is placed");
    }
    proccessPayment(){
        console.log("order payment currently in progress...");
    }
    shipOrder(){
        console.log("the order is being shipped");
    }
}

class StoreFacade{
    constructor(){
        this.cart = new CartManger();
        this.stock = new StockManger();
        this.order = new OrderManger();
    }

    launchStore(items){
        this.stock.addItems(items)
    }

    orderItems(items){
        let availableItems = [];
        for(let i = 0; i < items.length;i++){
           let found = this.stock.getItem(items[i]);
           if(found){
                this.cart.addItems(items[i])
                this.stock.removeItem(items[i])
                availableItems.push(items[i]);
            }
        }

        if(availableItems.length > 0){
            this.order.placeOrder();
            this.order.proccessPayment();
            this.order.shipOrder();
        } else {
            console.log("sorry none of the items you ordered is available,can\'t procced with the order .");
        }

    }
}

let facade = new StoreFacade();
facade.launchStore(['bananas','apples', 'kiwis','oranges','strawberries'])
facade.orderItems(['bananas','strawberries','avocado']);
console.log('--------------------------')
facade.orderItems(['milkshake','juice']);
