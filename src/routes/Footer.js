import React from 'react';

export default function Footer({ count, clearCompleted, setAll, setActive, setComplete }) {
    return(
    <div className='row my-4'>
    <div className='col-2'>
    <p className='col-xs-2 text-center'>{count}</p>
    </div>
    <div className='col-2'>
    <button onClick={setAll} className='btn btn-primary btn-sm col-xs-2'>All</button>
    </div>    
    <div className='col-2'>
    <button onClick={setActive} className='btn btn-primary btn-sm col-xs-2'>Active</button>
    </div>    
    <div className='col-2'>
    <button onClick={setComplete} className='btn btn-primary btn-sm col-xs-2'>Completed</button>
    </div>    
    <div className='col-2'>
    <button onClick={clearCompleted} className='btn btn-danger btn-sm col-xs-4'>Clear Completed</button>
    </div>     
    </div>
    )
}

