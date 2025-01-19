window.addEventListener('load',function(){
    let main= document.querySelector('main');
    let [mainSection , dropSection] = document.querySelectorAll('section');
    let dragEle = null;

    main.ondragstart = function(event){
        console.log(event.target.tagName == 'IMG');
        if(event.target.tagName == 'IMG'){
            dragEle = event.target;
        }
    }

    dropSection.ondragenter = function(event){
        event.preventDefault();
        dropSection.style.background ='radial-gradient(rgba(47, 247, 234, 0.5),rgba(255,255,255,0.3))';
    }
   
    dropSection.ondragover = (event) => event.preventDefault();
   
    dropSection.ondragleave = (event) => event.preventDefault();
 
    
    dropSection.ondrop = function(event){
        event.preventDefault();
        console.log(dragEle,dragEle.outerHTML,dragEle.parentElement == mainSection);
        if (dragEle.parentElement == mainSection){
            dropSection.innerHTML += dragEle.outerHTML;
            dragEle.style.transition = 'none';
            dragEle.style.visibility = 'hidden';
            if (dropSection.children.length == mainSection.children.length){
                mainSection.innerHTML = '<h2>Empty</h2>';
                mainSection.style.background = 'radial-gradient(rgba(47, 247, 234, 0.5),rgba(255,255,255,0.3))';
            }
        }

    }

   
  
})