import React from 'react'
import './App.css'
import AschoransState from './Component/AschoransState';
// import Counter from './Component/Counter';
// import Hero from './Component/Hero';
// import List from './Component/List';
// import Search from './Component/Search';
import StateManga from './Component/StateManga';
// import WordClass from './Component/WordClass';



// const title='react';
// const welcome={
//   greeting:'hey',
//   title:'React',
// };

function getTitle(title){
  return title;
}

const App = () => {
  return (
    <div className='capitalize text-center'>
      <h1 className="bg-green-500 cursor-auto my-5">Hello {getTitle('React')}</h1>
      {/* <h1>{welcome.greeting} {welcome.title}</h1> */}
      {/* <label htmlFor="search">search:</label>
      <input className="rounded-b-sm" type="text" id='search' /> */}

      {/* <Hero/>
      <List/>
      <Search/> */}
      <hr /><hr />
      {/* <WordClass/> */}
      <hr /><hr />
      {/* <Counter/> */}

      <StateManga/>
      <AschoransState/>
    </div>
  )
}

export default App