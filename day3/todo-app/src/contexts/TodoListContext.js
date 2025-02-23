import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListContext = createContext();



export const TodoListProvider = ({ children }) => {
  const [TodoList, setTodoList] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
        const storedTodos = await AsyncStorage.getItem('todoList');
        if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
        }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
         await AsyncStorage.setItem('todoList', JSON.stringify(TodoList));
        };

    saveTodos(TodoList);
  }, [TodoList]);

  const toggleCompletion = function(e,id){
    e.stopPropagation()
    setTodoList((oldList) =>{
        let newList = oldList.map(item => item.id == id ?{...item,done:!item.done}:item)
        return newList;
    })
  }
   
  const deleteItem = function(e,id){
    e.stopPropagation()
    setTodoList((oldList) =>{
        let newList = oldList.filter(item => item.id != id )
        return newList;
    })
  }

  const editItem = function(e){
    e.stopPropagation()
  }

    const addItem = function(title,desc){
    const newItem = {
        id :new Date(),
        title,
        desc,
        done:false
    }
    setTodoList((oldList) =>[...oldList,newItem])
  }

  return (
    <TodoListContext.Provider value={{ 
        TodoList, 
        toggleCompletion, 
        deleteItem, 
        editItem, 
        addItem 
    }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContext;