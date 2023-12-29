
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Product from './Page/Product'
import Login from './Page/Login'
import Signup from './Page/Signup'
import About from './Page/About'

const AllRouter = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route parth='/About' element={<About/>}></Route>
       <Route path='/Product' element={<Product/>}></Route>
       <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRouter
