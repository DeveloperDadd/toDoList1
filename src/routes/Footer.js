import React from 'react';

export default function Footer({ count, clearCompleted, setAll, setActive, setComplete }) {
    return(
    <div className='d-flex align-items-center justify-content-around'>
        <p className='m-4'>{count}</p>
        <div>
        <button onClick={setAll} className='btn btn-primary m-1'>All</button>
        <button onClick={setActive} className='btn btn-primary m-1'>Active</button>
        <button onClick={setComplete} className='btn btn-primary m-1'>Completed</button>
        </div>
        <button onClick={clearCompleted} className='btn btn-danger m-4'>Clear Completed</button>
    </div>
    )
}

