import React from 'react'
import { useState } from 'react';

function StateManga() {

    const [searchTerm, setSearchTeam] = React.useState('');
    /*
    const list=['a','b'];
    const itemOne=list[0];
    const itemtwo=list[2];

    const [firstItem,secondItem]=list;

    function getAlphabet(){
        return['a','b'];
    }

    const searchTermstate=React.useState('');
    const searchTerm=searchTermstate[0];
    const setSearchTerm=searchTermstate[1];*/
    const handleChange = event => {
        setSearchTeam(event.target.value);
    }
    // make function to class in jsx
    const [count, setcount] = useState(0);

    return (
        <div className="text-lg text-start mx-4" >
            <h1>Stage Managesment</h1>
            <label htmlFor="search">Search:</label>
            <input type="text" id='search' onChange={handleChange} className="border-2" />
            <p className="my-3">
                Searching for <strong>{searchTerm}</strong>
            </p>
            <button onClick={() => { setcount(count+1); }} className='border-1 rounded-sm px-3 bg-emerald-400 text-white'>Add</button>
            <button onClick={() => { setcount(count -1) }} className='border-1 rounded-sm px-3 bg-emerald-400 text-white'>Sub</button>
            <label htmlFor="" className="mx-5">Value:</label><span>{count}</span>
        </div>
    )
}

export default StateManga