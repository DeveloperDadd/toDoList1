import React from 'react';

export default function Tasklist ({ filteredTasks }) {
    return(
        <div id="test">
         <ul className='list-group'>
         {filteredTasks.map(task => {return (<li key={task.id} className='list-group-item d-flex justify-content-between align-items-center'><input type="checkbox" className='form-check-input'></input><p className='my-1'>{task.text}</p><button className='btn btn-danger'>X</button></li>)})}
         </ul>
        </div>
    )
};