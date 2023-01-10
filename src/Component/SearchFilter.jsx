import React, { useState } from 'react'
import Post from '../source/Posts.json'

// Post.map(item=>{
//     console.log(item.body)
// })

function SearchFilter() {

    const [searchItem, setsearchItem] = useState('');
    const handleSearch = event => {
        setsearchItem(event.target.value);
    };

    return (
        <div className='border-2 bg-yellow-500 my-6'>
            <Search onSearch={handleSearch} />

            <hr />
            <h1>Value of List</h1>
            <h1>{searchItem}</h1>
            {/* <Lists todolist={Post} /> */}
        </div>

    )
}

const Search = props => {
    return (

        <div>
            <label htmlFor="search">Search:</label>
            <input type="text" onChange={props.onSearch} />
        </div>
    )
}


export default SearchFilter