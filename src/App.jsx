import { useState } from 'react'
import About from './Pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <About/>
  )
}

export default App
