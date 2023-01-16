import React, { useState } from 'react'


const ReactFragments = () => {
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <h1>Resusable React Component</h1>
            <InputWithLabel id="search" label="Search" value={searchTerm} onInputChange={handleSearch} />
        </div>
    )
}
const InputWithLabel = ({ id, label, value, type = 'text', onInputChange,}) => (
    <>
        <label htmlFor={id}>{label}</label>
        &nbsp;
        <input className='border-2'
            id={id}
            type={type}
            value={value}
            onChange={onInputChange}
        />
    </>
);


export default ReactFragments