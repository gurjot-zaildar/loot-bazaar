import { Route, Routes } from 'react-router-dom'
import Products from '../pages/user/Products'
import Login from '../pages/user/Login'
import Register from '../pages/user/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetail from '../pages/admin/ProductDetail'
import UserProfile from '../pages/user/UserProfile'
import PageNotFound from '../pages/user/PageNotFound'
import AuthWrapper from './AuthWrapper'
import Cart from '../pages/user/Cart'

const Mainroutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        
        
        <Route path='/admin/create-product' element={<AuthWrapper><CreateProduct/></AuthWrapper>} />
        <Route path='/admin/user-profile' element={<AuthWrapper><UserProfile/></AuthWrapper>} />
        <Route path='/cart' element={<AuthWrapper><Cart/></AuthWrapper>} />
        <Route path='/product/:id' element={<AuthWrapper><ProductDetail/></AuthWrapper>} />
        

        <Route path='*' element={<PageNotFound/>} />
        </Routes>       
    </div>
  )
}

export default Mainroutes
