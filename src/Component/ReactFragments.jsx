import React, { useState } from 'react'


const ReactFragments = () => {
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <h1>Resusable React Component</h1>
            <InputWithLabel id="search" isFocuse={true} value={searchTerm} onInputChange={handleSearch} >Search:</InputWithLabel>
            <InputWithLabel id="search"  value={searchTerm} onInputChange={handleSearch} >Search:</InputWithLabel>
            <InputWithLabel id="search" type="text" value={searchTerm} onInputChange={handleSearch} >First Name</InputWithLabel>
        </div>
    )
}
// const InputWithLabel = ({ id,children, value, type = 'text', onInputChange,}) => (
//     <>
//         <label htmlFor={id}>{children}</label>
//         &nbsp;
//         <input className='border-2'
//             id={id}
//             type={type}
//             value={value}
//             onChange={onInputChange}
//         />
//     </>
// );
const InputWithLabel = ({ id, type, value, isFocuse, onInputChange, children }) => {
    const inputRef=React.useRef();
    React.useEffect(()=>{
        if(isFocuse && inputRef.current){
            inputRef.current.focus();
        }
    },[isFocuse]);
    return(
    <>
        <label htmlFor={id}>{children}</label>
        &nbsp;
        <input
            ref={inputRef}
            id={id}
            type={type}
            value={value}
            onChange={onInputChange}
        />
    </>
)};


export default ReactFragments