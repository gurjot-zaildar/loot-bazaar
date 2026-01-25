import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { asynccurrentuser } from './store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
//import { asyncloadproduct } from './store/actions/productAction'

const App = () => {
  const dispatch = useDispatch();
  const {users}=useSelector((state)=>state.userReducer)
  //const {products}=useSelector((state)=>state.productReducer)
 useEffect(()=>{
  !users && dispatch(asynccurrentuser());
 },[users]);

//  useEffect(()=>{
//   Products.length == 0 && dispatch(asyncloadproduct());
//  },[products]);


  return (
    <div className='text-white bg-gray-800'>
      <Nav/>
     <Mainroutes/>
       <ToastContainer />
    </div>
  )
}

export default App
