import React from "react";

export default function Task({ placeholder, handleKeyDown }) {
    return (
        <div className="container-fluid">
                    
            <input className="w-100 mt-4" type="text/submit"  placeholder='Enter an item to be completed' onChange={handleKeyDown} onKeyDown={handleKeyDown}></input>


        </div>
    )
}