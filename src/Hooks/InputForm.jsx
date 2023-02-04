import {useState} from 'react';

const InputForm = () => {
    const  [name, setName] = useState('');
    const sumbitForm=(e)=>{
        e.preventDefault();
        alert("Hello "+ name);
    }
    const handlechange=(e)=>{
        setName(e.target.value);
        console.log(name)
    }
  return (
    <form onSubmit={sumbitForm} className='text-center border-2 bg-yellow-300  mt-5 '>
        <label htmlFor="name">Name:
            <input type="text"
            onChange={handlechange}
            className='border-2 ml-4 h-10 border-blue-600' />
        </label>
        <br />
        <input className='border-2 px-3 h-10 bg-blue-500 border-none rounded-sm text-center mt-2' type="submit" value="submit" />
        
    </form>
  )
}

export default InputForm