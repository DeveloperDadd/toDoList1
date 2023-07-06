import React from "react";

export default function Task({ placeholder, handleKeyDown }) {
    return (
        <input className="w-100 mt-4" type="text/submit" value={placeholder} onChange={handleKeyDown} onKeyDown={handleKeyDown}></input>
    )
}