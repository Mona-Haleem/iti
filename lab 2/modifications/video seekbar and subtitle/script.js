window.addEventListener('load', function () {
    myvideo = document.getElementById('myvideo');
    myvideo.addEventListener('timeupdate',updateseekbarfun)
});

function updateseekbarfun(e) {
    document.querySelector('#seekBar').value  = this.currentTime / this.duration * 100;
}

function playpausefun(e) {
    if (myvideo.paused) {
        myvideo.play();
        e.target.value = "Pause";
    } else {
        myvideo.pause();
        e.target.value = "Play";
    }
}

function changemediasize(e) {
    switch (e.target.value) {
        case "small":
            myvideo.width = myvideo.height = 400;
            break;
        case "medium":
            myvideo.width = myvideo.height = 500;
            break;
        case "large":
            myvideo.width = myvideo.height = 600;
            break;
        case "fullscreen":
            myvideo.requestFullscreen();
            break;

    }
}
function changevolume(e) {
    myvideo.volume = e.target.value;
}

function mutefun() {
  
    myvideo.muted ^= true;
}
function loopfun() {
    
    myvideo.loop ^= true;
}

function changeseekbarfun(e) {
    myvideo.currentTime = e.target.value * myvideo.duration / 100;
}

function forwardfun() {
    myvideo.playbackRate++;
}
function backwordfun() {
     myvideo.playbackRate = 0.5;
   
}