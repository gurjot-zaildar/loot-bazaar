import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/Home'
import Products from '../pages/user/Products'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'

const Mainroutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>       
    </div>
  )
}

export default Mainroutes
