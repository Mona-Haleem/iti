import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState:{
        todoList: []
    },
    reducers:{
        setTodo:(state,action) =>{
            state.todoList = action.payload;
        },
        addItem:(state, action) =>{
            state.todoList.push(action.payload);
        },
        toggleCompletion:(state, action) =>{
            let item = state.todoList.find(item => item.id == action.payload)
            item.done = !item.done 
        },
        deleteItem:(state, action) =>{
           state.todoList = state.todoList.filter(item => item.id != action.payload)
        },
        editItem:(state, action) =>{
            let item = state.todoList.find(item => item.id == action.payload.id)
            item.title = action.payload.title;
            item.desc = action.payload.desc; 
        },
    }
})



export const { addItem, deleteItem, toggleCompletion,editItem ,setTodo} = todoSlice.actions;
export default todoSlice