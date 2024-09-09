import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'

const Routing = () => {
  return (
    <>
    
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
    
    </>
  )
}

export default Routing