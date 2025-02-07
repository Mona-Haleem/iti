const fs = require("fs");
const { title } = require("process");
const FILE_PATH = process.env.FILE_PATH || './db.json'

function createFileIfNotExist(){
    if(!fs.existsSync(FILE_PATH))
        fs.writeFileSync(FILE_PATH,JSON.stringify([]),"utf-8")
}


function formatParams(params){
    return params.reduce((acc,ele) =>{
        const[key , value] = ele.split('=');
        acc[key] = value;
        return acc;
    },{})
}

function addTodo(params){

    if(!("title" in params || "body"in params)){
        console.log("please provide the body or the title as such: 'title=title body=body'");
        return;
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
}

function editItem(params){
    const todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    const listItem = todoList.find(obj => obj.id == params.id);
    if(listItem){
        if (params.title) listItem.title = params.title;
        if (params.body) listItem.body = params.body;
        fs.writeFileSync(FILE_PATH,JSON.stringify(todoList),"utf-8")
    }
}

function listItems(filter){
    const todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    switch (filter){
        case "all":
            console.log(todoList);
        break
        case "checked":
            console.log(todoList.filter(obj => obj.checked))
        break
        case "unchecked":
            console.log(todoList.filter(obj => !obj.checked))
        break
        default:
            console.log("invalid Filter")
        break
    }
}

function removeItem(id){
    let todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    todoList = todoList.filter(obj => obj.id != id);
    fs.writeFileSync(FILE_PATH,JSON.stringify(todoList),"utf-8")
}

function toggleItemCheck(id, checked){
    const todoList = JSON.parse(fs.readFileSync(FILE_PATH,"utf-8"));
    const listItem = todoList.find(obj => obj.id == id);
    if(listItem) listItem.checked = checked;
    fs.writeFileSync(FILE_PATH,JSON.stringify(todoList),"utf-8")
} 

module.exports={
    createFileIfNotExist,
    formatParams,
    addTodo,
    editItem,
    removeItem,
    toggleItemCheck,
    listItems
}