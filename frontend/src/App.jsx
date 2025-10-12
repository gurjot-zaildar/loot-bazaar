import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='text-white bg-gray-800 h-screen'>
      <Nav/>
     <Mainroutes/>
    </div>
  )
}

export default App
