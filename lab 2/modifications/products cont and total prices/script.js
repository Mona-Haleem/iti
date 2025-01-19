window.addEventListener('load', function () {
    const allimages = document.images;
    
    for (let i = 0; i < allimages.length; i++) {
        //add and display products data
        let imgStock = Math.ceil(Math.random()*5);
        let price = Math.ceil(Math.random()*5)*500
        
        allimages[i].dataset.stock = imgStock;
        allimages[i].dataset.price = price ;
        
        let container = allimages[i].parentElement;
        container.style.setProperty('--pseudo-content', `"x${imgStock}"`);
        container.innerHTML += `<span>${price}</span>`
        // add drag events
        allimages[i].addEventListener('dragstart', startdrag);
        allimages[i].addEventListener('dragend', enddrag);
    }
    
    const left = document.getElementById('left');
    left.addEventListener('drop', dropped);
   
    left.addEventListener('dragenter', enterdrag);
    left.addEventListener('dragover', overdrag);

    const right = document.getElementById('right');
    right.addEventListener('dragleave', leavedrag);

});

function startdrag(e) {
    e.dataTransfer.setData('myimg', e.target.closest('div').outerHTML);
}

function enddrag(e) {
    e.preventDefault();
}

function dropped(e) {
    e.preventDefault();
    let img = e.dataTransfer.getData('myimg');
    let imgId =  `[${img.match(/data-id="x\d+"/g)}]`;
    
    // check for img ele in both boxes 
    let exist = document.querySelector(`#left ${imgId}`);
    let orginImg = document.querySelector(`#right [${img.match(/data-id="x\d+"/g)}]`);
    
    // update stock count and display amont in both boxes 
    orginImg.dataset.stock--;
    if (exist){
        let inCart = getComputedStyle(exist).getPropertyValue('--pseudo-content').match(/(\d+)/)[0];
        exist.parentElement.style.setProperty('--pseudo-content', `"x${+inCart +1 }"`);
    }else{
        left.innerHTML+= img;
        left.lastElementChild.style.setProperty('--pseudo-content', `"x1"`);
    }
    orginImg.parentElement.style.setProperty('--pseudo-content', `"x${orginImg.dataset.stock}"`);

    // update the total price
    const totalPrice = document.querySelector('#totalPrice span');
    totalPrice.innerHTML = Number(totalPrice.innerHTML) +Number(orginImg.dataset.price)
    
    // remove element when stock is empty
    if (orginImg.dataset.stock == 0)
        orginImg.parentElement.style.display="none";

    console.log(orginImg);
}

function leavedrag(e) {
    e.preventDefault();
}

function overdrag(e) {
    e.preventDefault();
}

function enterdrag(e) {
    e.preventDefault();
    e.target.style.backgroundColor = 'yellow';
}