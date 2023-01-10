import React from 'react'
import post from '../source/Posts.json'
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
    <div className="my-4 text-start" >
        <div className="fill-black bg-yellow-700 ">Hello buddys</div>
        <Todo todolist={post}/>
        <Lists todolist={post}/>
    </div>
  )
}
const Todo =props=>{
    return props.todolist.map(item=>(
        <div className='flex  text-center border-2 border-violet-800' key={item.id}>
            <h1 className='flex-1   my-2 '>{item.title}</h1>
            <span className='flex-1  my-2 border-2 border-l-indigo-800'>{item.body}</span>
        </div>
    ))
}
const Lists = props => {
 
    return props.todolist.map(item => {
        <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
        </div>
    })

}

export default List