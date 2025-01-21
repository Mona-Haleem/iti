import React, { useState } from 'react';
import TodoItem from "./TodoItem.jsx";

const TodoList = ({tasks,updateTaskState,deleteTask,deleteCompleted,editTask}) => {  
    return <ul>
                {tasks.sort((a,b)=>a.completed -b.completed)
                .map((task) => (<TodoItem
                                        key={task.id}
                                        task={task}
                                        updateTaskState={updateTaskState}
                                        deleteTask={deleteTask}
                                        editTask={editTask}
                                        />))}
                

                <li className='clear-completed' onClick={deleteCompleted}>
                <img src='/images/deleteall.png' />
                Clear Completed
                </li>
            </ul>
}

export default TodoList;