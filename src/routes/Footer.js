import React from 'react';

export default function Footer({ count, all, active, completed, clearCompleted}) {
    return(
    <div className='d-flex align-items-center justify-content-around'>
        <p className='m-4'>{count}</p>
        <div>
        <button className='btn btn-primary m-1'>{all}</button>
        <button className='btn btn-primary m-1'>{active}</button>
        <button className='btn btn-primary m-1'>{completed}</button>
        </div>
        <button className='btn btn-danger m-4'>{clearCompleted}</button>
    </div>
    )
}