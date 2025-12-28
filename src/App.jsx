import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <ValueProposition />
      <Capabilities />
      <Projects />
      <Process />
      <About />
      <Contact />
    </div>
  )
}

export default App
