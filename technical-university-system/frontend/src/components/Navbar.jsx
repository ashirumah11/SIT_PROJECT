import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../assets/ptvti-logo.jpg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Departments', to: '/courses', isDepartmentMenu: true },
  { label: 'Student Life', to: '/student-life' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const departmentMenuItems = [
  { id: 'software-engineering', label: 'Engineering' },
  { id: 'cosmetology-fundamentals', label: 'Cosmetology' },
  { id: 'fashion-design', label: 'Fashion & Design' },
  { id: 'hospitality-management', label: 'Hospitality' },
  { id: 'ict-systems', label: 'ICT' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [departmentMenuOpen, setDepartmentMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const lastScrollY = useRef(0)
  const departmentMenuRef = useRef(null)
  const location = useLocation()
  const isDepartmentRoute = location.pathname === '/courses' || location.pathname.startsWith('/courses/')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setHidden(false)
      return
    }

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
  }, [isMobile])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (departmentMenuRef.current && !departmentMenuRef.current.contains(event.target)) {
        setDepartmentMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
        {navLinks.map((link) => {
          if (link.isDepartmentMenu) {
            return (
              <div
                key={link.to}
                className="department-menu-wrapper"
                ref={departmentMenuRef}
                onMouseEnter={() => {
                  if (!isMobile) setDepartmentMenuOpen(true)
                }}
                onMouseLeave={() => {
                  if (!isMobile) setDepartmentMenuOpen(false)
                }}
              >
                <button
                  type="button"
                  className={`nav-link department-menu-button ${departmentMenuOpen || isDepartmentRoute ? 'is-current' : ''}`}
                  onClick={() => {
                    if (isMobile) {
                      setDepartmentMenuOpen(prev => !prev)
                    } else {
                      setDepartmentMenuOpen(true)
                    }
                  }}
                  onMouseEnter={() => {
                    if (!isMobile) setDepartmentMenuOpen(true)
                  }}
                  onFocus={() => {
                    if (!isMobile) setDepartmentMenuOpen(true)
                  }}
                  aria-expanded={departmentMenuOpen}
                  aria-label="Open department menu"
                >
                  {link.label}
                </button>

                <div
                  className={`department-menu-panel ${departmentMenuOpen ? 'open' : ''}`}
                  onMouseEnter={() => {
                    if (!isMobile) setDepartmentMenuOpen(true)
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) setDepartmentMenuOpen(false)
                  }}
                >
                  <div className="department-menu-panel-header">
                    <span>Departments</span>
                  </div>
                  <Link
                    to="/courses"
                    className="department-menu-item department-menu-view-all"
                    onClick={() => {
                      setDepartmentMenuOpen(false)
                      setOpen(false)
                    }}
                  >
                    View all departments
                  </Link>
                  {departmentMenuItems.map((department) => (
                    <Link
                      key={department.id}
                      to={`/courses/${department.id}`}
                      className="department-menu-item"
                      onClick={() => {
                        setDepartmentMenuOpen(false)
                        setOpen(false)
                      }}
                    >
                      {department.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          }

          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => {
                setOpen(false)
                setDepartmentMenuOpen(false)
              }}
            >
              {link.label}
            </NavLink>
          )
        })}
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
