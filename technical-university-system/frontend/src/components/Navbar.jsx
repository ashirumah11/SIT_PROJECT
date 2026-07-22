import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/ptvti-logo.jpg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/courses' },
  { label: 'Student Life', to: '/student-life' },
  { label: 'Production Work', to: '/production-work' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [shrunk, setShrunk] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShrunk(window.scrollY > 36)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-nav ${shrunk ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <NavLink to="/" className="brand-link" aria-label="Palazzolo Institute">
          <img src={logo} alt="Palazzolo Institute logo" className="brand-logo" />
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="nav-action-button portal-link" type="button">
          Portal
        </button>
        <NavLink to="/contact" className="nav-action-button apply-link">
          Apply Now
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
