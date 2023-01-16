import { data } from 'autoprefixer';
import React from 'react'
import product from '../source/Product.json'
console.log(product)



function ReactCustomHooks() {
    const [searchTerm, setSearchTerm] = useSemiPersistentStat(
        'search', ''
    );
    console.log(searchTerm);
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };
    const searchProducts = product.filter(story =>
        story.brand.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <Search searchValue={searchTerm} onchageSearch={handleSearch} />
            <div className="flex flex-wrap justify-center my-7 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <Post data={searchProducts} />
            </div>
        </div>
    )
}

const Search = ({ searchValue, onchageSearch }) => {
    return (
        <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
                <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700 my-3">Search</label>
                <input type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="search" value={searchValue} onChange={onchageSearch}/>
            </div>
        </div>
    )
}

const useSemiPersistentStat = (key, initialState) => {
    const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
};

console.log(product.map(item => { console.log(item.title) }))

const Post = ({ data }) => data.map(item => <Posts key={item.id} item={item} />);

const Posts = ({ item: { title, id, images, description } }) => (

    <div className="flex justify-center my-2 mx-2 py-2 px-2" key={id}>
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={images[1]} alt="sdfsd" />
            <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {description}
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
        </div>
    </div>

)
export default ReactCustomHooks