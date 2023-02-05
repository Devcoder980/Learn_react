import {useState} from 'react'

import Todos from './Todos';
const Memos = () => {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState(["todo 1","todos 2"]);

    const increment=()=>{
        setCount((c)=>c+1);
    }
  return (
    <>
        <Todos todos={todos}/>
        <hr />
        <div>
            Count:{count}
            <button className='border-2 p-5 cursor-pointer' onClick={increment}>+</button>
        </div>
    </>
  )
}



export default Memos;