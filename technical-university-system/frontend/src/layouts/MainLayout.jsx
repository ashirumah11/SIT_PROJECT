import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <div className="announcement-bar">
        <div className="announcement-content">
          <span>ADMISSIONS OPEN FOR SEPTEMBER 2026 INTAKE</span>
          <a href="/prospectus.pdf" target="_blank" rel="noreferrer">
            Download prospectus
          </a>
        </div>
        <div className="announcement-contacts">
          <span className="contact-info">
            <span className="contact-icon">📞</span>
            0111 380 756
          </span>
          <span className="contact-info">
            <span className="contact-icon">✉</span>
            info@palazollotechnical.co.ke
          </span>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter" title="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.828.856 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.708c-1.445 1.445-3.356 2.24-5.521 2.24s-4.076-.795-5.521-2.24c-1.445-1.445-2.24-3.356-2.24-5.521s.795-4.076 2.24-5.521c1.445-1.445 3.356-2.24 5.521-2.24s4.076.795 5.521 2.24c1.445 1.445 2.24 3.356 2.24 5.521s-.795 4.076-2.24 5.521zm2.201-9.904c.401 0 .726.325.726.726s-.325.726-.726.726-.726-.325-.726-.726.325-.726.726-.726zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Navbar />
      
      <Outlet />
  
      <Footer />
    </div>
  )
}

export default MainLayout
