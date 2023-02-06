import React from 'react'
import { useState,useEffect,useRef } from 'react'


const UseRef = () => {
    const [inputValue, setInputValue] = useState("");
    //  const count=useRef(0);

    // const inputElement = useRef();
    // const focusInput=()=>{
    //     inputElement.current.focus();
    // };

    //  useEffect(()=>{
    //     count.current=count.current+1;
    //  })

    const previousInputValue = useRef("");


    useEffect(() => {
        previousInputValue.current = inputValue;
      }, [inputValue]);


  return (
    <div>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

        <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>


        {/* <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus INput</button>
        <input type="text" className='border-4 border-green-600' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <h1>Render Count :{count.current}</h1> */}
    </div>
  )
}

export default UseRef