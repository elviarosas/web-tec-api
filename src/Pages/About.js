import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    let navigate = useNavigate();
  return (
    <div>About <button 
        onClick={() => {
            navigate("/")

        }}  
    > Ir a Home</button>
    </div>
  )
}

export default About