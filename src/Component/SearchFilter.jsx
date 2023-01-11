import React, { useState } from 'react'

import Post from '../source/Posts.json'

function SearchFilter() {
    const [item, setitem] = useState('')
    const handleclick = event => {
        console.log("Asign value" + item);
        setitem(event.target.value)
    }
    const searchfilter = Post.filter((story) => {
        return (story.body.includes(item));
    })
    return (
        <div >
            <h1>Practice Make Searc</h1>
            <Search values={item} onsearchclick={handleclick} />
            <div className='flex flex-wrap '>
            <Lists  list={searchfilter} />
            </div>
            
        </div>
    )
}
const Search = props => {
    return (
        <div>
            <label htmlFor="Search">Search: </label>
            <input type="text" className='border-2' value={props.values} id='Search' onChange={props.onsearchclick} />
        </div>
    )
}

const Lists = props => {
    return props.list.map(item => (
        <div class="flex justify-center m-4">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <img class="rounded-t-lg" src={item.img} alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{item.title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {item.body}
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
    ))
}
export default SearchFilter