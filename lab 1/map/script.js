window.addEventListener('load',function(){
    const branches = document.querySelectorAll('.branch');
    let mainBtn = document.querySelector('#mainBranch');
    let branchBtn = document.querySelector('#sideBranch');
    mainBtn.onclick=function(){
        branches[0].classList.toggle('highlight');
        for(let i = 1; i<branches.length;i++){
            branches[i].classList.remove('highlight');
        }
    }
    branchBtn.onclick=function(){
        branches[0].classList.remove('highlight');
        for(let i = 1; i<branches.length;i++){
            branches[i].classList.toggle('highlight');
        }
    }
})