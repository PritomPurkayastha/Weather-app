import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Error.css"

export default function Error() {
    const navigate=useNavigate();
  return (
    <div className='error'>
        <h1>City not found</h1>
        <button onClick={() => {
            navigate("/")
        }}>Return to Home</button>
    </div>
  )
}
