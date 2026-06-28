import { NavLink } from 'react-router-dom'
import { useTheme } from '../App'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="navbar">
      {/* LOGO — flex-shrink:0 ensures it never gets clipped */}
      <NavLink to="/" className="nav-logo">
        <span className="nav-logo-icon">⚙️</span>
        <span className="nav-logo-text">
          KK<span>Appliance</span>
        </span>
      </NavLink>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/booking" className={({ isActive }) => isActive ? 'active' : ''}>Book service</NavLink></li>
      </ul>

      {/* RIGHT CONTROLS */}
      <div className="nav-right">
        {/* Theme toggle */}
        <div className="theme-toggle">
          <button
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
            title="Light"
          >☀️</button>
          <button
            className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
            onClick={() => setTheme('system')}
            title="System"
          >🌙</button>
          <button
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
            title="Dark"
          >🌶️</button>
        </div>

        {/* Call Now */}
        <a href="tel:+919750885764" className="btn-call">
          📞 Call Now
        </a>
      </div>
    </nav>
  )
}
