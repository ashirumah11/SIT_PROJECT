import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { getAnnouncements } from '../services/api.js'

const MainLayout = () => {
  const location = useLocation()
  const [announcement, setAnnouncement] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    getAnnouncements()
      .then((items) => {
        if (Array.isArray(items) && items.length > 0) {
          setAnnouncement(items[0])
        }
      })
      .catch(() => {})
  }, [])

  const message = announcement?.message ?? 'ADMISSIONS OPEN FOR SEPTEMBER 2026 INTAKE'
  const link = announcement?.link ?? '/prospectus.pdf'
  const phone = announcement?.phone ?? '0111 380 756'
  const email = announcement?.email ?? 'info@palazollotechnical.co.ke'

  return (
    <div className="app-shell">
      <div className="announcement-bar">
        <div className="announcement-content">
          <span>{message}</span>
          <a href={link} target="_blank" rel="noreferrer">
            {announcement?.link ? 'Learn more' : 'Download prospectus'}
          </a>
        </div>
        <div className="announcement-contacts">
          <span className="contact-info">
            <span className="contact-icon">📞</span>
            {phone}
          </span>
          <span className="contact-info">
            <span className="contact-icon">✉</span>
            {email}
          </span>
          <SocialLinks />
        </div>
      </div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default MainLayout