let egg,basket;

window.addEventListener('load',function(){
    egg = new Egg();
    basket = new Basket();
    egg.startFall(basket);
})

window.addEventListener('keydown',function(event){
    if(event.key == 'ArrowRight'){
        basket.move(1);

    }else if(event.key =='ArrowLeft'){
        basket.move(-1);
    }
    
})


