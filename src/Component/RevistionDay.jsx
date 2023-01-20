import React from 'react'
const title="Hello React";


// let option;
// if (isDarkMode) { option = 'Set Light Mode' }
// else { option = 'Set Dark Mode' }
// const toggleMode = <button>{ option }</button>

const welcome={
    gereeting:"hey",
    title:'react',
};

function getTitle(title){
    return title;
}

// Using the && operator

export const RevistionDay = () => {
    let sum=<p>{20+20}</p>;
  return (
    <div>
        <h1 className="text-lg">{title}</h1>
        
        <p>{sum}</p>
        <h1>{welcome.title} {welcome.gereeting}</h1>
        <button className='border-2 px-4 py-4'>{getTitle("dev")}</button>
        {/* <p>{isTrue && "This is also true"}</p> */}
        <button ></button>

    </div>
  )
}
// let isDarkMode='';


   
