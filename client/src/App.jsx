import { useState } from 'react'

import './App.css'
import Navbar from './components/header/Navbar'
import Newnav from './components/newnavbaar/Newnav'
import Maincomp from './components/home/Maincomp'
import Footer from './components/footer/Footer'
import SignUp from './components/signup_sign/SignUp'
import Sign_in from './components/signup_sign/Sign_in'
import {Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Newnav/>
   <Routes>
    <Route path="/" element={<Maincomp/>}/>
    <Route path="/login" element={<Sign_in/>}/>
    <Route path="/register" element={<SignUp/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
