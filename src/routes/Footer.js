import React from 'react';

export default function Footer({ count, all, active, completed, clearCompleted}) {
    return(
        <>
            <div>
                <p>{count}</p>
                <div>
                <button className='btn btn-primary'>{all}</button>
                <button className='btn btn-primary'>{active}</button>
                <button className='btn btn-primary'>{completed}</button>
                </div>
                <button className='btn btn-danger'>{clearCompleted}</button>
            </div>
        </>
    )
}