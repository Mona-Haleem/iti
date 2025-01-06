const createPost = function(data){
    let post = document.createElement('div');
    post.classList.add('post');
    post.dataset.id =data.id;
    
    let title = document.createElement('h3');
    title.innerHTML = data.title;
    post.append(title);
    
    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delBtn')
    deleteBtn.innerHTML ='🗑️';
    post.append(deleteBtn);

    let editBtn = document.createElement('span');
    editBtn.classList.add('editBtn')
    editBtn.innerHTML ='📝';
    post.append(editBtn);
    
    let body = document.createElement('p');
    body.innerHTML = data.body;
    post.append(body);
    return post;
}

const addPost = function(title,body){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            mainContent.prepend(createPost(data));
        });    
}

const updatePost = function(id,title,body){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          id: id,
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let oldPost = document.querySelector(`[data-id="${id}"]`);
            let newPost = createPost(data)
            console.log(oldPost,newPost,mainContent);
            mainContent.replaceChild(newPost,oldPost);
            postId.value ='';
        });
      

}





