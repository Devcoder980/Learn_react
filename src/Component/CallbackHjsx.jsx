import React from 'react'
import { useState } from 'react'



function CallbackHjsx() {
  return (
    <Search/>
  )
}


const Search=()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const handleChange=event=>{
        setSearchTerm(event.target.value);
    }

    return(
        <div>
        <h1>My Hacker Stories</h1>
        <label htmlFor="search">Search:</label>
        <input type="text" className="border-2" onChange={handleChange} />
        <p>
            Searchin for <strong>{searchTerm}</strong>
        </p>
    </div>
    )
}

export default CallbackHjsx