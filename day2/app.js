const helpers = require("./helper.js");
const process = require("process");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    helpers.createFileIfNotExist();
});

app.use(express.json());

app.get(["/todolist","/todolist/:filter"], (req,res) =>{
    let result = helpers.listItems(req.params.filter);
    res.json(result);
})

app.post("/todolist", (req,res) =>{
    let result = helpers.addTodo(req.body);
    res.send(result);
})

app.put("/todolist/:id", (req,res) =>{
    let result = helpers.editItem(req.params.id,req.body);
    res.send(result);
})

app.patch("/todolist/:id", (req,res) =>{
    let result = helpers.toggleItemCheck(req.params.id,req.body.checked);
    res.send(result);
})

app.delete("/todolist/:id", (req,res) =>{
    let result = helpers.removeItem(req.params.id);
    res.send(result);
})