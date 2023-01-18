import React from 'react'
import './App.css'
import Header from './Component/Header';
// import AdvanceState from './Component/AdvanceState';
// import AschoransState from './Component/AschoransState';
// import CallbackHjsx from './Component/CallbackHjsx';
// import PropsInAdvance from './Component/PropsInAdvance';
import ReactSideEffect from './Component/ReactSideEffect';
// import CustHooks from './Component/CustHooks';
// import SearchFilter from './Component/SearchFilter.jsx';
// import Counter from './Component/Counter';
// import Hero from './Component/Hero';
// import List from './Component/List';
// import Search from './Component/Search';
// import StateManga from './Component/StateManga';
// import WordClass from './Component/WordClass';
import ReactCustomHooks from './Component/ReactCustomHooks';
import ReactFragments from './Component/ReactFragments';
import Inlinehandler from './Component/Inlinehandler';


// const title='react';
// const welcome={
//   greeting:'hey',
//   title:'React',
// };

// function getTitle(title){
//   return title;
// }

const App = () => {
  return (

    <div className='capitalize '>
      <Header/>
    {/* //   <h1 className="bg-green-500 cursor-auto my-5">Hello {getTitle('React')}</h1> */}
      {/* <h1>{welcome.greeting} {welcome.title}</h1> */}
      {/* <label htmlFor="search">search:</label> <input className="rounded-b-sm" type="text" id='search' /> */}

      {/* <Hero/>
    
      <Search/> */}
      {/* // <hr /><hr /> */}
      {/* <WordClass/> */}
      {/* // <hr /><hr /> */}
      {/* <Counter/> */}

      {/* // <StateManga/>
      // <AschoransState/>
      // <hr className="my-2 border-red-700 h-4 bg-red-500" />
      // <hr />
      // <CallbackHjsx/>
      // <hr />
      // <hr />
      // <AdvanceState/>
      // <SearchFilter/> */}
      {/* <List/> */}
      {/* <PropsInAdvance/> */}
      {/* <ReactSideEffect/> */}
      {/* <ReactCustomHooks/> */}
      {/* <ReactFragments/> */}
      <Inlinehandler/>
    </div>
  )}

export default App