import React, { useState } from 'react';


const AddItemForm = ({addTask}) => {   
    const [newTask, setNewTask] = useState('');
    
    return <div>
                <input
                    type="text"
                    value={newTask}
                    placeholder='What do you need to do?'
                    onChange={(e)=>setNewTask(e.target.value)}
                 />
                <button onClick={() => {addTask(newTask);setNewTask('')}}>ADD</button>
            </div>
}

export default AddItemForm;