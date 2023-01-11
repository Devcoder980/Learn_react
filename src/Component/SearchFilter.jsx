import React,{useState} from 'react'

import Post from '../source/Posts.json'

function SearchFilter() {
    const [item, setitem] = useState('')
    const handleclick=event=>{
        console.log("Asign value"+item);
        setitem(event.target.value)
    }
    const searchfilter=Post.filter((story)=>{
        return(story.body.includes(item));
    })
  return (
    <div>
        <h1>Practice Make Searc</h1>
        <Search onsearchclick={handleclick}/>
        <Lists list={searchfilter}/>
    </div>
  )
}
const Search=props=>{
    return(
        <div>
            <label htmlFor="Search">Search: </label>
            <input type="text" className='border-2' id='Search' onChange={props.onsearchclick} />
        </div>
    )
}

const Lists=props=>{
    return props.list.map(item=>(
        <div className="flex border-2 bg-green-500" key={item.id}>
            <div className="flex-1">
                <div><h1>{item.title}</h1></div>
            </div>
            <div className="flex-1">
                <dir><p>{item.body}</p></dir>
            </div>
        </div>
    ))
}
export default SearchFilter