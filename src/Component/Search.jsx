
import React from 'react'
import { list } from '../source/List';

let a = document.getElementById('search');
function Search() {
    return (
        <div>
            <label htmlFor="search">search:</label>
            <input  type="text" id='search' name='Jordan Walke' className=" rounded-sm border-2 m-2 outline-none" />
            {
                list.map((item)=>{
                    console.log(a)
                    if(item.author==a){
                        return(
                            <div className='flex' key={item.objectId}>
                                <span className='flex-1'>{item.author}</span>
                                <span className='flex-1'>{item.title}</span>
                                <span className='flex-1'>
                                    <a href={item.url}>{item.num_comments}</a>
                                </span>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className='flex' key={item.objectId}>
                                <span className='flex-1'>{item.author}</span>
                                <span className='flex-1'>{item.title}</span>
                                <span className='flex-1'>
                                    <a href={item.url}>{item.num_comments}</a>
                                </span>
                            </div>
                        )
                    }
                    
                    
                })
            }

           
        </div>
    )
}

export default Search