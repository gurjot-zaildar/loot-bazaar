import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/Home'
import Products from '../pages/user/Products'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'

const Mainroutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


        <Route path='/admin/create-product' element={<CreateProduct/>} />
        <Route path='/admin/update-product/:id' element={<UpdateProduct/>} />
        </Routes>       
    </div>
  )
}

export default Mainroutes
