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
    
    console.log("hello");
    const searchedStories = Post.filter(function(story) {
        return story.title.includes(searchItem);
    });
    return (
        <div className='border-2 bg-yellow-500 my-6'>
            <Search onSearch={handleSearch} />
            <h1>Value of List</h1>
            <h1>{searchItem}</h1>
            <Lists todolist={searchedStories} />
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

const Lists = props => {
    return props.todolist.map(item => (
        <div className="flex border-blue-800 my-2" key={item.id} >
            <h1 className='flex-1 text-lg'>{item.title}</h1>
             <p className='flex-1 text-sm border-2 border-l-blue-800'>{item.body}</p>
        </div>
    ))

}
export default SearchFilter