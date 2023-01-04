
import React from 'react'

import {list} from '../source/List'

// function search(){
    
//     list.map((item)=>{
//         return <div key={item.objectId}>
//         <span>
//             <a href={item.url}></a>
//         </span>
//         <span>{item.author}</span>
//         <span>{item.num_comments}</span>
//         <span>{item.points}</span>
//     </div>
//     })
    
// }

function List() {
  return (
    <div>
        <h1>Welcome to my List componet</h1>                                                                                                                                                                                                                                  
        {
            list.map((item)=>{
                return <div key={item.objectId}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                        
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                </div>
            })
        }
        <hr />
        <hr />
       
    </div>

  )
}

export default List