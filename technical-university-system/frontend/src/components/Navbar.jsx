import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/ptvti-logo.jpg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Departments', to: '/courses' },
  { label: 'Student Life', to: '/student-life' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY <= 80) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentScrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-nav ${hidden ? 'hidden' : ''}`}>
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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd7xoENz9pDaFgHlhPqdBQ6Io6BNlAQH3zQopXGq2A5BM0uig/viewform?usp=publish-editor"
          className="nav-action-button apply-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPLY NOW
        </a>
      </div>
    </header>
  )
}

export default Navbar
