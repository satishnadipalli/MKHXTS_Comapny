import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Main_wraper'>
      <Router>
        {/* <Header/> */}
        <Home/>
        <Routes>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
