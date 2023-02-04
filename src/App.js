import React from 'react'
import './App.css'
// import Composition from './Component/Composition';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header,InputForm,Head,Dataremive, Forms, TocTacToe, LastDay, Data_fetch, AdvanceState, AschoransState, CallbackHjsx, PropsInAdvance, ReactSideEffect, SearchFilter, Counter, Hero, List, Search, StateManga ,ReactCustomHooks, ReactFragments, Inlinehandler, RevistionDay } from './FilesAll';

import A from './FilesAll';
import Head from './Head';
import Hero from './Component/Hero';
console.table(A);
const App = () => {
  return (

    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Head/>}>
            {A.map((e,index)=>(
              <Route key={index} path={e.name.name} element={e.name()} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter> 
        <Header/>
        <Routes>
           <Route path="/" element={<Hero/>} />
          <Route path='/' element={<Head/>}>
            <Route path="/hero" element={<Hero />} />
            <Route path="/list" element={<List />} />
            <Route path="/inputform" element={<InputForm />} />
            <Route path="/header" element={<Header />} />
            <Route path='/search' element={<Search />} />
            <Route path='/WordClass' element={<WordClass />} />
            <Route path='/Counter' element={<Counter />} />
            <Route path='/StateManga' element={<StateManga />} />
            <Route path='/Data_fetch' element={<Data_fetch />} />
            <Route path='/ReactCustomHooks' element={<ReactCustomHooks />} />
            <Route path='/ReactFragments' element={<ReactFragments />} />
            <Route path='/PropsInAdvance' element={<PropsInAdvance />} />
            <Route path='/TocTacToe' element={<TocTacToe />} />
            <Route path='/Dataremive' element={<Dataremive />} />
            <Route path='/AdvanceState' element={<AdvanceState />} />
            <Route path='/AschoransState' element={<AschoransState />} />
            <Route path='/CallbackHjsx' element={<CallbackHjsx />} />
            <Route path='/Forms' element={<Forms />} />
            <Route path='/ReactSideEffect' element={<ReactSideEffect />} />
            <Route path='/SearchFilter' element={<SearchFilter />} />
            <Route path='/Inlinehandler' element={<Inlinehandler />} />
            <Route path='/RevistionDay' element={<RevistionDay />} />
            <Route path='/Lastday' element={<LastDay />} />
           </Route>
        </Routes>
      </BrowserRouter> */}
    </>

    // <div className='capitalize '>
    //   <Header />
    //   {/* //   <h1 className="bg-green-500 cursor-auto my-5">Hello {getTitle('React')}</h1> */}
    //   {/* <h1>{welcome.greeting} {welcome.title}</h1> */}
    //   {/* <label htmlFor="search">search:</label> <input className="rounded-b-sm" type="text" id='search' /> */}


    //   {/* <Hero/> */}


    //   {/* // <hr /><hr /> */}
    //   {/* <Counter/> */}

    //   {/* // <StateManga/>
    //   // <AschoransState/>
    //   // <hr className="my-2 border-red-700 h-4 bg-red-500" />
    //   // <hr />
    //   // <CallbackHjsx/>
    //   // <hr />
    //   // <hr />
    //   // <AdvanceState/>
    //   // <SearchFilter/> */}
    //   {/* <List/> */}
    //   {/* <PropsInAdvance/> */}
    //   {/* <ReactSideEffect/> */}
    //   {/* <ReactCustomHooks/> */}
    //   {/* <ReactFragments/> */}
    //   {/* <Inlinehandler/> */}
    //   {/* <RevistionDay/> */}
    //   {/* <Composition/> */}
    //   {/* <Dataremive username="Prabhu"/> */}
    //   {/* <Forms/> */}
    //   {/* <TocTacToe/> */}
    //   {/* <LastDay/> */}

    //   {/* <Data_fetch/> */}
    //   {/* <UseCall/> */}
    //   {/* <InputForm /> */}
    // </div>
  )
}

export default App