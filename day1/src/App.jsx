import React, { useState } from 'react'
import { v4 } from 'uuid';
import AddItemForm from  "./componanents/AddItem.jsx" ;
import TodoList from "./componanents/TodoList.jsx";

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
      if (newTask.trim() !== '') {
          setTasks([...tasks, {
              id:v4(),
              name: newTask,
              completed: false
          }].sort((a,b)=>a.completed -b.completed));
      }
  }

  const deleteTask = (x) => {
      setTasks(tasks.filter((task) => task.id !== x));
  }

  const deleteCompleted = () => {
    setTasks(tasks.filter((task) => task.completed === false));
  }

  const updateTaskState = (x) => {
    setTasks(
              tasks
                .map((task) =>(task.id === x)?{...task,completed:!task.completed}:task)
                .sort((a,b)=>a.completed -b.completed)
            );
  }

  const editTask = (e,taskId) => {
    if (e.target.value.trim() !== '') {
      let newTask = {...tasks.find(task => task.id == taskId ) , name : e.target.value};
      setTasks([...tasks
              .map((task) => (task.id != taskId )?task:newTask)]
              .sort((a,b)=>a.completed -b.completed)
            );
  }
  }

  return (
    <>
      <header>
        <img src="/images/To-Do-Logo.png"  />
      </header>
      <div className='container'>
        <AddItemForm addTask={addTask}></AddItemForm>
        <TodoList
          tasks={tasks}
          updateTaskState={updateTaskState}
          deleteTask={deleteTask}
          deleteCompleted={deleteCompleted}
          editTask={editTask}
        />
      </div>
    </>
  );
}


export default TodoApp