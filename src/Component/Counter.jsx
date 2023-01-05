import React from 'react'

const handleChange=event=>{
    console.log(event.target.value);
};
function Counter() {
    return (
        <div>
            <div>My hacker Storeis day 3</div>
            <label htmlFor="search">Search:</label>
            <input className="border-2" type="text" id='search'  onChange={handleChange} />
            
        </div>
    )

}

export default Counter