window.addEventListener('load',function(){
    let video = document.querySelector('video');
    let videoListContainer = document.querySelector('section div')
    let videoList = videoListContainer.children;
    video.onclick = function(){
        if(video.paused)
           video.play()
       else
           video.pause()
    }
    video.ondblclick = function(){
        video.requestFullscreen();
    }
    
    videoListContainer.onclick = function(e){
        if(e.target.tagName == 'BUTTON'){
            console.log(e.target.dataset);
            video.src = e.target.dataset.videosrc
            let prevClicked = document.querySelector('.clicked')
            if(prevClicked)
                prevClicked.classList.remove('clicked');
            e.target.classList.add('clicked')
        }
    }
    
    window.onkeydown = function(event){
        console.log(event.key)      
        if (event.key == 'ArrowUp' || event.key == 'ArrowDown'){
            event.preventDefault();
            let newBtn, currBtn = document.querySelector('.clicked');
            if (event.key == 'ArrowUp'){ 
                newBtn = (currBtn == videoList[0])?videoList[videoList.length-1]:currBtn.previousElementSibling;
                if(newBtn.getBoundingClientRect().top < 100)
                    videoListContainer.scrollBy(0,-64)
            }else{
                newBtn = (currBtn == videoList[videoList.length-1])?videoList[0]:currBtn.nextElementSibling;
                if(newBtn.getBoundingClientRect().bottom > 740)
                    videoListContainer.scrollBy(0,64)
                    
            }
            newBtn.click()  
        }
    
    }
   })
   

