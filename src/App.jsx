import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Wishlist from '../src/pages/Wishlist'
import Cart from '../src/pages/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/Cart" element={<Cart/>}/>

    </Routes>

    <Footer/>
     
    </>
  )
}

export default App
