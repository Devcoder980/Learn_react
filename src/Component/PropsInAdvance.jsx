import React,{useState} from 'react'
import Post from '../source/Posts.json'

const user = {
    firstName: 'Robin',
    lastName: 'Wieruch',
};
// With out object destructuring


function PropsInAdvance(props) {

    const [item, setitem] = useState('')
    const handleclick = event => {
        console.log("Asign value" + item);
        setitem(event.target.value)
    }
    const searchfilter = Post.filter((story) => {
        return (story.body.includes(item));
    })
    return (
        <div >
            <Search values={item} onsearchclick={handleclick} />
            <div className='flex flex-wrap '>
            <Lists  list={searchfilter} />
            </div>
            
        </div>
    )
}

const Search=({search,onSearch})=>{
    return(
        <div className="flex justify-center my-4">
        <div className="mb-3 xl:w-96">
            <label htmlFor="" className="form-label inline-block mb-2 text-gray-700">Search:</label>
            <input
                type="text"
                className=" form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id={search}
                onChange={onSearch}
            />
        </div>
    </div>
    )
}

const Lists=({list})=>list.map(item=><Item key={item.id} item={item}/>)

const Item=({item}) => (
    <div className="flex justify-center m-4">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
                <img className="rounded-t-lg" src={item.img} alt="" />
            </a>
            <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{item.title}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {item.body}
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
    </div>
)

export default PropsInAdvance