document.body.onclick = function(event){
    console.log(!event.target.dataset.cloned)
    if (!event.target.dataset.cloned){
        let newDiv = document.createElement('div');
        newDiv.className = event.target.className;
        document.body.append(newDiv);
        event.target.dataset.cloned=true;
    }
}