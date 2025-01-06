
let displayBtn = document.querySelector('button');
let mainContent = document.querySelector('.main-content');
let titleInput = document.querySelector('input[name=title]');
let bodyInput = document.querySelector('textarea');
let addBtn = document.querySelector('input[value="save"]');
let postId = document.querySelector('input[type=hidden]');
let cancelBtn = document.querySelector('input[value="cancel"]');

cancelBtn.onclick = function(){
    postId.value ='';
}

//display posts
displayBtn.onclick=function(){
    mainContent.innerHTML = ''
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        for(let i=0; i< data.length ; i++){
            mainContent.append(createPost(data[i],'post'));
        }
    })

}

mainContent.onclick=function(event){
    let ele = event.target;
    if(ele.tagName == 'SPAN' && ele.className.includes('delBtn')){
        //delete posts 
        let post = ele.closest('div');
        console.log(ele,post,post.dataset.id);
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.dataset.id}`, {
            method: 'DELETE',
        })
        .then(()=>{
            post.remove();
            cancelBtn.click();
        });
    }else if(ele.tagName == 'SPAN' && ele.className.includes('editBtn')){
        //edit post
        titleInput.value = ele.parentElement.querySelector('h3').textContent;
        bodyInput.value =ele.parentElement.querySelector('p').textContent;
        postId.value = ele.parentElement.dataset.id;
    
    }

}

//add post
addBtn.onclick =function(){
    let title = titleInput.value.trim();
    let body = bodyInput.value.trim();
    console.log(title ,body)
    if ((title && body)){
        if (postId.value){
            updatePost(postId.value,title,body);
        }else{
            addPost(title,body);
        }
        bodyInput.value ='';
        titleInput.value = '';
    }
}



