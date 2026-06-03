import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <Cursor />
      <ParticleField />
      <AnimatePresence mode="wait">
        {!loaded && <Loader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
