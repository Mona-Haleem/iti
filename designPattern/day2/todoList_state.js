console.log('\n-------------State-------------\n ');

class ToDoListItem{
    constructor(title){
        if(new.target == ToDoListItem)
         throw new Error("can\'t create objects from abstract class")
        this.title = title;
    }
    handle(){
        throw new Error("handel fun must be implemented")
    }
}
class InProgressTodoItem extends ToDoListItem{
    handle(context){
        console.log(this.title,"STATE_IN_PROGRESS");
        context.setState(new ReadyTodoItem(this.title));
    }
}

class ReadyTodoItem extends ToDoListItem{
    handle(context){
        console.log(this.title ,"STATE_READY_FOR_REVIEW");
        context.setState(new DoneTodoItem(this.title));
    }
}

class DoneTodoItem extends ToDoListItem{
    handle(){
        console.log(this.title , "STATE_DONE");
    }
}
class Context{
    constructor(title,state){
        switch(state){
            case "ready":
                this.state = new ReadyTodoItem(title);
                break;
            case "done":
                this.state = new DoneTodoItem(title);
                break;
            default:
                this.state = new InProgressTodoItem(title);
        }
    }
    setState(state) {
        this.state = state;
    }
    request(){
        this.state.handle(this)
    }
}


let newTodo = new Context("item1")
newTodo.request(this)
newTodo.request(this)
newTodo.request(this)

let readyTodo = new Context("item2","ready")
readyTodo.request(this)
readyTodo.request(this)

let doneTodo = new Context("item3","done")
doneTodo.request(this)