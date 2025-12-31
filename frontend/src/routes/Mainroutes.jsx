import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/Home'
import Products from '../pages/user/Products'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetail from '../pages/admin/ProductDetail'
import { useSelector } from 'react-redux'
import UserProfile from '../pages/user/UserProfile'
import PageNotFound from '../pages/user/PageNotFound'

const Mainroutes = () => {
  const {users}= useSelector((state)=> state.userReducer);
  return (
    <div>
     <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


        <Route path='/admin/create-product' element={<CreateProduct/>} />
        <Route path='/admin/user-profile' element={<UserProfile/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='*' element={<PageNotFound/>} />
        </Routes>       
    </div>
  )
}

export default Mainroutes
