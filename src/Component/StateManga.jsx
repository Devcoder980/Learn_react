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
            <div class="flex space-x-2 justify-between">
                <div>
                    <button type="button"  onClick={()=>{setcount(count+1)}} class="inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Increment</button>
                    <button type="button" onClick={()=>{setcount(count-1)}} class="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Decrese</button>
                </div>
            </div>
            <label htmlFor="" className="mx-5">Value:</label><span>{count}</span>
        </div>
    )
}

export default StateManga