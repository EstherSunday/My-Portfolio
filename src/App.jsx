import { useState } from 'react'
import './App.css'
import Navban from './Components/navban/Navban'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Navban />
    </>
  )
}

export default App
