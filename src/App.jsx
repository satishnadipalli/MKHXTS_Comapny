import { useState } from 'react'
<<<<<<< HEAD
import About from './Pages/About/About'
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'

>>>>>>> 7d3578550f47a04f56520891f1e033de39792896

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <About/>
=======
    <div className='Main_wraper'>
      <Router>
        {/* <Header/> */}
        <Home/>
        <Routes>
          
        </Routes>
      </Router>
    </div>
>>>>>>> 7d3578550f47a04f56520891f1e033de39792896
  )
}

export default App
