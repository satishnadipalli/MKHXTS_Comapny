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
import Services from './Pages/Services/Services'
import InsightsBooks from './Pages/InsightsBooks/InsightsBooks'
import NotFound from './Pages/Notfound/Notfound'
import Knolens from './Pages/Knolens/Knolens'
import Iemap from './Pages/IEMAP/Iemap'
import ContactUs from './Pages/ContactUs/Contactus'
import InsightMiner from './Pages/InsightMiner/InsightMiner'
import ClinicalOutComes from './Pages/Platforms/ClinicalOutComes/ClinicalOutComes'


function App() {

  return (
    <div className='Main_wraper'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/pharma-ai' element={<Mvap/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/services' element={<Services/>}/>
          {/* <Route path='/insight-miner' element={<InsightMiner/>}/> */}
          <Route path='/outcomes' element={<ClinicalOutComes/>}/> 
          <Route path='/vip' element={<Vip/>}/>
          <Route path="/carve" element={<Carve/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/iemap" element={<Iemap/>}/>
          <Route path="/insights" element={<InsightsBooks/>}/>
          <Route path="/knolens" element={<Knolens/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
