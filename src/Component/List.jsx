import React from 'react'
const stories = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];
    
function List() {
  return (
    <div className="my-4">
        <div className="fill-black bg-yellow-700 ">Hello buddys</div>
        <Todo todolist={stories}/>
    </div>
  )
}
const Todo =props=>{
    return props.todolist.map(item=>(
        <div key={item.objectID}>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
        </div>
    ))
}

export default List