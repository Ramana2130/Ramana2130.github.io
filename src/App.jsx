import { useState } from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
