const startSliding = function(imgObject){
    let imgIndex =0;
    let slider = setInterval(() => {
        imgObject.src= `images/slider/${imgIndex}.jpg`;
        imgIndex = (imgIndex + 1) % 8;


    },1000)
    return slider
}

const stopSliding = function(timerId){
    clearInterval(timerId);
}