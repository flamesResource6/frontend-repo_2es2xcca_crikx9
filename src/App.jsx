import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import BackgroundFX from './components/BackgroundFX'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  const [profile, setProfile] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/profile`).then(r => r.json()).then(setProfile).catch(() => {})
  }, [baseUrl])

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white relative">
      <BackgroundFX />

      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-widest text-cyan-300" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>ADARSH</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
            <a className="hover:text-cyan-300" href="#projects">Projects</a>
            <a className="hover:text-cyan-300" href="#experience">Experience</a>
            <a className="hover:text-cyan-300" href="#stack">Stack</a>
            <a className="hover:text-cyan-300" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={profile?.projects} />
        <Experience experience={profile?.experience} />
        <TechStack />
        <Contact contacts={profile?.contacts} />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        <p>Crafted with ❤️ + GPU cores.</p>
      </footer>

      {/* Cursor glow */}
      <motion.div
        className="pointer-events-none fixed -z-10 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: 0, y: 0 }}
        whileHover={{}}
      />
    </div>
  )
}

export default App
