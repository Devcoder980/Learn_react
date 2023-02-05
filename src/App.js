import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import A from './FilesAll';
import Head from './Head';
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
    </>
  )
}

export default App