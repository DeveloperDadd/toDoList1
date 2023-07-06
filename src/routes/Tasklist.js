import React from 'react';

export default function Tasklist ({ filteredTasks }) {
    return(
        <div id="test">
         <ul>
         {filteredTasks.map(task => {return (<li key={task.id}><input type="checkbox"></input><p>{task.text}</p></li>)})}
         </ul>
        </div>
    )
};