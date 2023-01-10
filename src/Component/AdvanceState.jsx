import React, { useState } from 'react'

const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectId: 0,
    },
    {
      title: 'Redux',
      url: 'https://reactjs.org/',
      author: 'Miss',
      num_comments: 2,
      points: 99,
      objectId: 1,
    }
  ]


function AdvanceState() {
  const [searchTerm,setSearchTerm]=React.useState('');
const handleSearch=event=>{
    setSearchTerm(event.target.value);
}

const searchStoreis=list.filter(function(story){
    return story.title.includes(searchTerm);
});

  return (
    <div>
        <h1>My Hacker Stories</h1>
        <Search onSearch={handleSearch}/>
    </div>
  )
}

const Search =props=>{
    <div>
        <label htmlFor="search">Search:</label>
        <input type="text" id='search' onChange={props.handleSearch}  />
    </div>
}
export default AdvanceState