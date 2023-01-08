import React from 'react'
import { useState } from 'react'

const handleSearch=event=>{
    console.log(event.target.value);
};

const show=()=>{
    console.log("hello World");
}

function CallbackHjsx() 
{
  return (
    <div>
        <h1>My Hacker Stories</h1>
        <Search onSearch={handleSearch} onPoint={show}/>
    </div>
  )
}

const Search=props=>{
    const [searchTerm,setSearchTerm]=useState('');
    const handleChange=event=>{
        setSearchTerm(event.target.value);
        props.onSearch(event);
        props.onPoint();
    };

   return(
    <div>
        <label htmlFor="search">Search:</label>
        <input type="text" onChange={handleChange} />
        <p>
            <strong>{searchTerm}</strong>
        </p>
    </div>
   )
}

export default CallbackHjsx