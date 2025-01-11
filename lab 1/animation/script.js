window.addEventListener('load',function(){
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const box = this.document.querySelector('#box');
    let animation = this.document.getAnimations()[0];
    startBtn.onclick = function(){
        animation.play();
    }
    stopBtn.onclick = function(){
        animation.cancel()
    }
    box.onmouseover = function(){
        animation.pause();
    }
    box.onmouseleave = function(){
        animation.play();
    }
})