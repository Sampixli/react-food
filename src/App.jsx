import React, { useState,useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'  
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'  
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

 const toggleDarkMode = () => setIsDarkMode(prev => !prev);
 const [ showLogin, setShowLogin ] = useState(false)

  return (
   <>
   {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app bg-white dark:bg-black text-black dark:text-white'>
    <Navbar setShowLogin={setShowLogin} toggleDarkMode={toggleDarkMode} />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App

