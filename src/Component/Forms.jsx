import React from 'react'
import { useState } from 'react';
// Rendering lists 

function MyButton({count,onClick}){
    return(
        <button className='border-2' onClick={onClick}>Click {count}</button>

    )
} 

function Forms() {
    const [count,setCount]=useState(0);
    function handleClick(){
        setCount(count+1);
    }
    const product=[
        {title:'cabbage',isFruit:false,id:1},
        {title:'GArlic',isFruit:false,id:2},
        {title:'Apple',isFruit:true,id:3},
    ];

    const listItem=product.map(product=>
        <li key={product.id} style={{color:product.isFruit ? 'magenta' :'darkgreen'}}>
            {product.title}
        </li>);


  return (
    <div>
        <ul>
            {listItem}
        </ul>
        <span>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </span>
    </div>
  )
}


export default Forms