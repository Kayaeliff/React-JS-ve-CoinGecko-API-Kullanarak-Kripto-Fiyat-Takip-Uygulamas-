import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home"
import Coin from './pages/Coin/Coin'
import Footer from './companents/Footer/Footer'
import Navbar from './companents/Navbar/Navbar'

const App = () => {
  return (
    <div className='app'>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
