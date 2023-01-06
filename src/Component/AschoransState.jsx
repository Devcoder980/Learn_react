import React, { useState } from 'react'

function AschoransState() {
    const [count,setcount]=useState(0);

    const handleclick=()=>{
        setTimeout(()=>{
            setcount(count+1)
        },1000)
    }

  return (
    <div>
        <button onClick={handleclick} className="border-1 bg-purple-800 text-white">Incress</button>
        <button>count with set interval use</button>
        <label htmlFor="">value:</label><span>{count}</span>
    </div>
  )
}

export default AschoransState