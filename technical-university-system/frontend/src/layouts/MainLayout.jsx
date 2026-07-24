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
        <span>ADMISSIONS OPEN FOR SEPTEMBER 2026 INTAKE</span>
        <a href="/prospectus.pdf" target="_blank" rel="noreferrer">
          Download prospectus
        </a>
      </div>
      <Navbar />
      
        <Outlet />
  
      <Footer />
    </div>
  )
}

export default MainLayout
