const fs = require("fs");
const process = require("process");
const FILE_PATH = process.env.FILE_PATH || './db.json'

function createFileIfNotExist(){
    if(!fs.existsSync(FILE_PATH))
        fs.writeFileSync(FILE_PATH,JSON.stringify([]),"utf-8")
}


function addTodo(params){

    if(!("title" in params )){
        return "failed to add list item No title was provided"
    }

    const todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    const id = todoList.length ? todoList[todoList.length-1].id + 1 : 1;
    todoList.push( {
        id:id,
        title:params.title || '',
        body:params.body || '',        
        checked:false
    })
    fs.writeFileSync(FILE_PATH,JSON.stringify(todoList),"utf-8")
    return "data added sucssesfully";
}

function editItem(id, params){
    const todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    const listItem = todoList.find(obj => obj.id == id);
    if(!listItem){
        return `no item found with id = ${id}`;
    }
    if (params.title) listItem.title = params.title;
    if (params.body) listItem.body = params.body;
    fs.writeFileSync(FILE_PATH,JSON.stringify(todoList),"utf-8")
    return `element with id=${id} updated sucssesfully`;
}

function listItems(filter){
    const todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    let result;
    switch (filter){
        case "checked":
            result = todoList.filter(obj => obj.checked);
        break
        case "unchecked":
            result = todoList.filter(obj => !obj.checked);
        break
        default:
            result = todoList; 
        break
    }
    return result;
}

function removeItem(id){
    let todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    const listItem = todoList.find(obj => obj.id == id);
    if(!listItem)
        return `no item found with id = ${id}`;
    todoList = todoList.filter(obj => obj.id != id);
    fs.writeFileSync(FILE_PATH,JSON.stringify(todoList),"utf-8")
    return `element with id=${id} removed sucessfully`;
}

function toggleItemCheck(id, checked){
    const todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    const listItem = todoList.find(obj => obj.id == id);
    if(!listItem)
        return `no item found with id = ${id}`;
    listItem.checked = checked;
    fs.writeFileSync(FILE_PATH,JSON.stringify(todoList),"utf-8")
    return `element with id=${id} updated sucssesfully`;
} 

module.exports={
    createFileIfNotExist,
    addTodo,
    editItem,
    removeItem,
    toggleItemCheck,
    listItems
}