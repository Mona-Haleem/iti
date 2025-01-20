import React, { useState } from 'react'


const TodoItem = ({task,updateTaskState,deleteTask,editTask}) =>{
    return <li key={task.id}>
                <div>
                    <input type="checkbox" onChange={() => updateTaskState(task.id)}/>
                    <input type="text" value={task.name} onChange={(e) => editTask(e,task.id)}/>

                    {/* <span>{task.name}</span> */}
                </div>
                <img src="/images/delete.png" width="32px" onClick={() => deleteTask(task.id)} />
            </li>
                
}

export default TodoItem;