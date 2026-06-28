import { createContext, useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Booking from './pages/Booking'

// Theme context
const ThemeCtx = createContext()
export const useTheme = () => useContext(ThemeCtx)

export default function App() {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('kk-theme') || 'system'
  })

  const setTheme = (t) => {
    setThemeState(t)
    localStorage.setItem('kk-theme', t)
  }

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else if (theme === 'light') {
      root.setAttribute('data-theme', 'light')
    } else {
      // system
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    }
  }, [theme])

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />

      {/* WhatsApp float button */}
      <a
        href="https://wa.me/919750885764"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Chat with us
      </a>
    </ThemeCtx.Provider>
  )
}
