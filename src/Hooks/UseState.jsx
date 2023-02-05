import PreviousMap from 'postcss/lib/previous-map';
import React from 'react'
import { useState } from 'react'

// Hook Rules
// There are 3 rules for hooks:

// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional
const UseState = () => {
    // useState accepts an initial state and returns two values:

    // The current state.
    // A function that updates the state
    const [color, setColor] = useState("red");

    // UseState hold any type of Data string nubmer boolean array object array any combinatihin of these
    const [brand, setBrand] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"yellow"
    });

    const updateColor=()=>{
        setBrand(previousState=>{
            return{...previousState,color:"red"}
        });
    }


    return (
        <>
            <h1 style={{ background: color }}>My favorite Color is {color} </h1>
            <button className='border-2 bg-blue-800 text-white roun p-4 text-center' type='button' onClick={() => setColor("blue")}>Blue</button>
            <button className='border-2 bg-blue-800 text-white roun p-4 text-center' onClick={() => { setColor("green") }}>green</button>
            <button className='border-2 bg-blue-800 text-white roun p-4 text-center' onClick={() => { setColor("pink") }}>Pink</button>


            {/* Brand useState variable acces vlue */}
            <h1 className='mt-10 text-center'>My {brand.brand}</h1>
            <p className='text-center'>
                It is a {brand.color} {brand.model} from {brand.year}
            </p>

            {/*  Updating Objects and Arrays in State */}
            <button className='border-2 px-6 py-2 text-center' onClick={updateColor}>red</button>
        </>
    )
}

export default UseState