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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Main_wraper'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/mvap' element={<Mvap/>}></Route>
          <Route path='/vip' element={<Vip/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
