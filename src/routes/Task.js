import React from "react";

export default function Task({ placeholder, handleKeyDown }) {
    return (
        <input className="w-100 mt-4" type="text/submit"  placeholder={placeholder} onChange={handleKeyDown} onKeyDown={handleKeyDown}></input>
    )
}