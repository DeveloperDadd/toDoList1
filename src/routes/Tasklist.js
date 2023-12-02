import React from 'react';
import { useState } from 'react';

export default function Tasklist({ filteredTasks, deleteTask, markComplete, handleKeyDown }) {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [text, setText] = useState("");

    const handleDoubleClick = (taskId) => {
        setEditingTaskId(taskId);
        setText(filteredTasks.find(task => task.id === taskId).text)
    };

    const handleChange = (event) => {
        setText(event.target.value);
    }

    // When element loses focus, invoke the updateTask function
    const handleBlur = () => {
        updateTask();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            updateTask();
        }
    }

    const updateTask = () => {
        // assign the value of the task ID to the task index variable
        const taskIndex = filteredTasks.findIndex(task => task.id === editingTaskId);

        if (taskIndex !== -1) {
            // create a copy of the filteredTasks
            const updatedTasks = [...filteredTasks];

            //update the 'text' property of the task with the specified ID from the start of this function
            updatedTasks[taskIndex].text = text;
        }

        // reset the editing task ID to null
        setEditingTaskId(null);
        // reset the 'text' state variable to an empty string
        setText("");
    }




    return (
        <div id="test">
            <ul className='list-group'>
                {filteredTasks.map(task => {
                    return (<li key={task.id} className='list-group-item d-flex justify-content-between align-items-center'>
                        <input type="checkbox" checked={!task.isActive} isActive={task.isActive} onChange={e => markComplete(task.id, e.target.check)} className='form-check-input'></input>

                        <div className="col-8" onDoubleClick={() => handleDoubleClick(task.id)}>
                            {editingTaskId === task.id ? (
                                <input
                                    type='text'
                                    value={text}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyPress}
                                    onBlur={handleBlur}
                                />
                            ) : (
                                <p className='my-1 col-8'>{task.text}</p>
                            )}
                        </div>



                        <div className='col-1'>
                            <button className='btn btn-danger btn-sm' onClick={() => deleteTask(task.id)}>X</button>
                        </div>

                    </li>)
                })}
            </ul>
        </div>
    )
};