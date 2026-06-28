import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <span className="nav-logo-icon">⚙️</span>
              <span className="nav-logo-text">
                KK<span>Appliance</span>
              </span>
            </Link>
            <p className="footer-brand-desc">
              Professional fridge & washing machine repair in Madurai,
              Dindigul, Sivagangai & surrounding areas. Same-day service,
              all brands covered.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="footer-col-title">Quick Links</p>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/booking">Book service</Link></li>
              <li><Link to="/about">About us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer-col-title">Services</p>
            <ul className="footer-links">
              <li><Link to="/services">Fridge repair</Link></li>
              <li><Link to="/services">Washing machine repair</Link></li>
              <li><Link to="/services">AC service</Link></li>
              <li><Link to="/services">All brands covered</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact-item">
              📞 <a href="tel:+919750885764">+91 97508 85764</a>
            </div>
            <div className="footer-contact-item">
              📧 <a href="mailto:info@kkappliance.in">info@kkappliance.in</a>
            </div>
            <div className="footer-contact-item">
              📍 Madurai, Tamil Nadu
            </div>
            <div className="footer-contact-item">
              🗺️ Covers 30 km radius
            </div>
            <div className="footer-contact-item">
              🕐 Mon–Sat, 8am–8pm
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 KK Appliance. All rights reserved.</p>
          <p className="footer-tagline">Made with <span>♥</span> in Madurai</p>
        </div>
      </div>
    </footer>
  )
}
