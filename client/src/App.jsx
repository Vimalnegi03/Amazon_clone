import { useState } from 'react'

import './App.css'
import Navbar from './components/header/Navbar'
import Newnav from './components/newnavbaar/Newnav'
import Maincomp from './components/home/Maincomp'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Newnav/>
   <Maincomp/>
   <Footer/>
    </>
  )
}

export default App
