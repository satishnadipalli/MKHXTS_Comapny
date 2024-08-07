import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Mvap from './Pages/Platforms/MVAP/Mvap'
import Vip from './Pages/Platforms/VIP/Vip'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carve from './Pages/Platforms/Carve/Carve'
import About from './Pages/About/About'


function App() {

  return (
    <div className='Main_wraper'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/mvap' element={<Mvap/>}/>
          <Route path='/vip' element={<Vip/>}/>
          <Route path="/carve" element={<Carve/>}/>
          <Route path="/uspage" element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
