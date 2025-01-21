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
          }]);
      }
  }

  const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const deleteCompleted = () => {
    setTasks(tasks.filter((task) => task.completed === false));
  }

  const updateTaskState = (taskId) => {
    setTasks(
              tasks.map((task) =>
                (task.id === taskId)?
                {...task,completed:!task.completed}:
                task
                )
            );
  }

  const editTask = (e,taskId) => {
    if (e.target.value.trim() !== '') {
      setTasks(tasks.map((task) =>
                    (task.id === taskId)?
                    {...task,name:e.target.value}:
                    task
                  )
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